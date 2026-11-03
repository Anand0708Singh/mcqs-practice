import json
import os
import sys

# Combine all Information Security question sets
sys.path.append(os.path.dirname(__file__))
from generate_is_mcqs import questions_raw
from extra_is_mcqs import extra_is_mcqs
from deep_is_mcqs import is_deep_expansion

all_raw = questions_raw + extra_is_mcqs + is_deep_expansion

formatted_questions = []
for idx, q in enumerate(all_raw, 1):
    unit, topic, question_text, options_text, correct_answer, explanation, difficulty = q
    letters = ['A', 'B', 'C', 'D']
    options = [{'letter': letters[i], 'text': options_text[i]} for i in range(4)]
    
    formatted_questions.append({
        'id': idx,
        'subject_id': 'information-security',
        'subject_code': 'IT5054',
        'subject_name': 'Information Security',
        'unit': unit,
        'topic': topic,
        'question': question_text,
        'options': options,
        'correct_text': correct_answer,
        'explanation': explanation,
        'difficulty': difficulty
    })

# Save JSON
json_path = os.path.join(os.path.dirname(__file__), 'questions.json')
with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(formatted_questions, f, indent=2, ensure_ascii=False)

# Save JS
js_path = os.path.join(os.path.dirname(__file__), 'questions.js')
with open(js_path, 'w', encoding='utf-8') as f:
    f.write('// Information Security (IT5054) Units V & VI Question Bank\n')
    f.write('window.IS_DATA = ')
    json.dump(formatted_questions, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print(f"Information Security: Total MCQs compiled: {len(formatted_questions)}")
