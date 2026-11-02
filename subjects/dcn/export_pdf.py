import json
import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def generate_pdf():
    json_path = os.path.join(os.path.dirname(__file__), 'questions.json')
    pdf_path = os.path.join(os.path.dirname(__file__), 'IT5052_DCN_Units_IV_V_VI_MCQ_Question_Bank.pdf')
    
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
        fontSize=20,
        leading=24,
        textColor=colors.HexColor('#1e3a8a'),
        alignment=1
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=11,
        leading=15,
        textColor=colors.HexColor('#475569'),
        alignment=1
    )
    
    unit_header_style = ParagraphStyle(
        'UnitHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=17,
        textColor=colors.HexColor('#0f172a'),
        spaceBefore=14,
        spaceAfter=6
    )
    
    q_num_style = ParagraphStyle(
        'QNum',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        textColor=colors.HexColor('#1d4ed8')
    )
    
    q_text_style = ParagraphStyle(
        'QText',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        textColor=colors.HexColor('#0f172a')
    )
    
    opt_style = ParagraphStyle(
        'OptionText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#334155')
    )
    
    ans_style = ParagraphStyle(
        'AnswerText',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#065f46')
    )
    
    story = []
    
    # Title Banner
    story.append(Paragraph("IT5052 – DATA COMMUNICATION & NETWORKING", title_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph("COMPREHENSIVE MCQ QUESTION BANK & SELF-ASSESSMENT COMPANION<br/>Units IV (Network Layer Protocols), Unit V (Transport Layer Protocols) & Unit VI (Application Layer)", subtitle_style))
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#2563eb'), spaceBefore=4, spaceAfter=14))
    
    # Overview Summary Table
    summary_data = [
        [
            Paragraph("<b>Total Questions:</b> 123 MCQs", opt_style),
            Paragraph("<b>Target Exam:</b> Internal Examination - 2", opt_style),
            Paragraph("<b>Format:</b> 4 Options + Verified Key", opt_style)
        ]
    ]
    t = Table(summary_data, colWidths=[180, 180, 180])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f1f5f9')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#cbd5e1')),
        ('PADDING', (0,0), (-1,-1), 6),
        ('ALIGN', (0,0), (-1,-1), 'CENTER')
    ]))
    story.append(t)
    story.append(Spacer(1, 14))
    
    current_unit = None
    
    for q in questions:
        unit = q['unit']
        if unit != current_unit:
            current_unit = unit
            story.append(Spacer(1, 10))
            story.append(Paragraph(f"<b>{unit.upper()}</b>", unit_header_style))
            story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#94a3b8'), spaceBefore=2, spaceAfter=8))
            
        q_elements = []
        # Question text
        q_elements.append(Paragraph(f"<b>Q{q['id']}. {q['question']}</b> <font color='#64748b' size='8'>[{q['topic']}]</font>", q_text_style))
        q_elements.append(Spacer(1, 4))
        
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
        q_elements.append(Spacer(1, 3))
        
        # Answer key
        q_elements.append(Paragraph(f"✓ <b>Answer:</b> {q['correct_text']}", ans_style))
        q_elements.append(Spacer(1, 8))
        q_elements.append(HRFlowable(width="100%", thickness=0.4, color=colors.HexColor('#e2e8f0'), spaceBefore=2, spaceAfter=6))
        
        story.append(KeepTogether(q_elements))
        
    doc.build(story)
    print(f"Successfully generated PDF: {pdf_path}")

if __name__ == '__main__':
    generate_pdf()

