import json
import os
import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def generate_subject_pdf(subject_dir, subject_code, subject_name, units_subtitle, pdf_filename):
    json_path = os.path.join(subject_dir, 'questions.json')
    pdf_path = os.path.join(subject_dir, pdf_filename)
    
    if not os.path.exists(json_path):
        print(f"File not found: {json_path}")
        return
        
    with open(json_path, 'r', encoding='utf-8') as f:
        questions = json.load(f)
        
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=36,
        bottomMargin=36
    )
    
    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=colors.HexColor('#1e3a8a'),
        alignment=1
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=colors.HexColor('#475569'),
        alignment=1
    )
    
    unit_header_style = ParagraphStyle(
        'UnitHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=colors.HexColor('#0f172a'),
        spaceBefore=14,
        spaceAfter=6
    )
    
    q_text_style = ParagraphStyle(
        'QText',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#0f172a')
    )
    
    opt_style = ParagraphStyle(
        'OptionText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor('#334155')
    )
    
    ans_style = ParagraphStyle(
        'AnswerText',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor('#065f46')
    )
    
    exp_style = ParagraphStyle(
        'ExpText',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8,
        leading=11,
        textColor=colors.HexColor('#475569')
    )
    
    story = []
    
    # Title Banner
    story.append(Paragraph(f"{subject_code} – {subject_name.upper()}", title_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph(f"COMPREHENSIVE QUESTION BANK & SELF-ASSESSMENT COMPANION<br/>{units_subtitle}", subtitle_style))
    story.append(Spacer(1, 6))
    story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#2563eb'), spaceBefore=2, spaceAfter=10))
    
    # Overview Summary Table
    summary_data = [
        [
            Paragraph(f"<b>Total Questions:</b> {len(questions)} MCQs", opt_style),
            Paragraph("<b>Target Exam:</b> Semester Examination - 2", opt_style),
            Paragraph("<b>Format:</b> 4 Options + Verified Key & Detailed Explanation", opt_style)
        ]
    ]
    t = Table(summary_data, colWidths=[180, 180, 180])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f1f5f9')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#cbd5e1')),
        ('PADDING', (0,0), (-1,-1), 5),
        ('ALIGN', (0,0), (-1,-1), 'CENTER')
    ]))
    story.append(t)
    story.append(Spacer(1, 10))
    
    current_unit = None
    
    for q in questions:
        unit = q['unit']
        if unit != current_unit:
            current_unit = unit
            story.append(Spacer(1, 10))
            story.append(Paragraph(f"<b>{unit.upper()}</b>", unit_header_style))
            story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#94a3b8'), spaceBefore=2, spaceAfter=6))
            
        q_elements = []
        # Question text
        q_elements.append(Paragraph(f"<b>Q{q['id']}. {q['question']}</b> <font color='#64748b' size='7.5'>[{q['topic']} | {q.get('difficulty', 'Medium')}]</font>", q_text_style))
        q_elements.append(Spacer(1, 3))
        
        # Options 2x2 or 1x4 table
        opt_cells = []
        for opt in q['options']:
            opt_cells.append(Paragraph(f"<b>{opt['letter']})</b> {opt['text']}", opt_style))
            
        opts_table = Table([[opt_cells[0], opt_cells[1]], [opt_cells[2], opt_cells[3]]], colWidths=[270, 270])
        opts_table.setStyle(TableStyle([
            ('PADDING', (0,0), (-1,-1), 2),
            ('VALIGN', (0,0), (-1,-1), 'TOP')
        ]))
        q_elements.append(opts_table)
        q_elements.append(Spacer(1, 2))
        
        # Answer key
        q_elements.append(Paragraph(f"✓ <b>Correct Answer:</b> {q['correct_text']}", ans_style))
        if q.get('explanation'):
            q_elements.append(Paragraph(f"<i>Explanation:</i> {q['explanation']}", exp_style))
        q_elements.append(Spacer(1, 6))
        q_elements.append(HRFlowable(width="100%", thickness=0.3, color=colors.HexColor('#e2e8f0'), spaceBefore=1, spaceAfter=4))
        
        story.append(KeepTogether(q_elements))
        
    doc.build(story)
    print(f"Generated PDF for {subject_name}: {pdf_path} ({len(questions)} MCQs)")

if __name__ == '__main__':
    base_dir = os.path.dirname(__file__)
    
    # 1. Information Security
    generate_subject_pdf(
        subject_dir=os.path.join(base_dir, 'subjects', 'information-security'),
        subject_code='IT5054',
        subject_name='Information Security',
        units_subtitle='Unit V (Authentication, Passwords, Biometrics) & Unit VI (CAPTCHA, Firewalls, IDS)',
        pdf_filename='IT5054_IS_Units_V_VI_MCQ_Question_Bank.pdf'
    )
    
    # 2. Machine Learning
    generate_subject_pdf(
        subject_dir=os.path.join(base_dir, 'subjects', 'machine-learning'),
        subject_code='AI502',
        subject_name='Machine Learning',
        units_subtitle='Unit V (Unsupervised Learning & Basics of Neural Networks) & Unit VI (Advanced Learning Topics)',
        pdf_filename='AI502_ML_Units_V_VI_MCQ_Question_Bank.pdf'
    )
    
    # 3. Windows .NET
    generate_subject_pdf(
        subject_dir=os.path.join(base_dir, 'subjects', 'windows-dotnet'),
        subject_code='MOB503',
        subject_name='Windows .NET (WPF)',
        units_subtitle='Unit V (Graphics, Templates, & Animation) & Unit VI (Windows, Pages and Rich Controls)',
        pdf_filename='MOB503_Windows_DotNet_Units_V_VI_MCQ_Question_Bank.pdf'
    )

