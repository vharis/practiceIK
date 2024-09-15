from dateutil.parser import parse

def parse_expenses(expense_string):
    expenses = []
    lines = expense_string.split('\n')
    
    for line in lines:
        line = line.strip()
        if not line or line.startswith('#'):
            continue
        
        parts = line.split(',')
        if len(parts) != 3:
            continue
        
        try:
            date = parse(parts[0])
            value = float(parts[1])
            currency = parts[2].strip()
            expenses.append((date, value, currency))
        except (ValueError, TypeError):
            continue
    
    return expenses