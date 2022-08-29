## Schema

### Course
|Param|Info|Example|
|---|---|---|
|course_code|primary key|CS-A1234|
|credits_max||8|
|credits_min||3|
|language|fi, sv, en|en|
|period||1-2,5|
|last_updated|when course info has been changed||

### CourseTranslation
|Column|Info|Example|
|---|---|---|
|course_code|foreign key|CS-A1234|
|translation|fi, sv, en|en|
|name|||
|grade_scale|0-5, Hyv/Hyl||
|prerequisites|free text||
|learning_results|free text||
|content|free text||
|grading_information|free text||
|additional_information|free text||


### Review
|Column|Info|Example|
|---|---|---|
|id|primary key||
|course_code||CS-A1234|
|course_taken|when user has taken the course||
|rating|1-5||
|workload|1-5||
|review_lang|fi, sv, en||
|review|free text||