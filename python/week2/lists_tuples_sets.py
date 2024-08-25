courses = ['History','Maths','Physics','Stats', 'Science']
courses_2 = ['Arts','Politics']
index =-4
course = courses[index]
message = f'index= {index},  course= {course}'
# print (message )

# print(courses[-2])
# courses.append(courses_2)

courses.extend(courses_2)
courses.pop()
# courses.remove(4)
courses.sort(reverse=True)
course_str = '-'.join(courses).split(',')
print (course_str)
# for index, course in enumerate(courses, start=3):
#     print (index, course)
    
# print (courses)
# print (courses.index('History'))