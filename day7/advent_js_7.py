def fix_packages(packages):
  stack = []
  for char in packages:
    if char == ')':
      reversed = ''
      while stack[-1] != '(':
        reversed += stack.pop()
      stack.pop()

      stack.extend(reversed)
    else:
      stack.append(char)
  return ''.join(stack)
