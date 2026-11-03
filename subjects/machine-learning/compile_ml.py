import json
import os
import sys

# Import base and extra questions
sys.path.append(os.path.dirname(__file__))
from generate_ml_mcqs import ml_questions_raw
from extra_ml_mcqs import more_ml_questions

all_raw = ml_questions_raw + more_ml_questions

formatted_questions = []
for idx, q in enumerate(all_raw, 1):
    unit, topic, question_text, options_text, correct_answer, explanation, difficulty = q
    
    # Options array
    letters = ['A', 'B', 'C', 'D']
    options = [{'letter': letters[i], 'text': options_text[i]} for i in range(4)]
    
    formatted_questions.append({
        'id': idx,
        'subject_id': 'machine-learning',
        'subject_code': 'AI502',
        'subject_name': 'Machine Learning',
        'unit': unit,
        'topic': topic,
        'question': question_text,
        'options': options,
        'correct_text': correct_answer,
        'explanation': explanation,
        'difficulty': difficulty
    })

# Save to JSON
json_path = os.path.join(os.path.dirname(__file__), 'questions.json')
with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(formatted_questions, f, indent=2, ensure_ascii=False)

# Save to JS
js_path = os.path.join(os.path.dirname(__file__), 'questions.js')
with open(js_path, 'w', encoding='utf-8') as f:
    f.write('// Machine Learning (AI502) Units V & VI Question Bank\n')
    f.write('window.ML_DATA = ')
    json.dump(formatted_questions, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print(f"Successfully compiled {len(formatted_questions)} Machine Learning MCQs!")
print("Saved to questions.json and questions.js")
