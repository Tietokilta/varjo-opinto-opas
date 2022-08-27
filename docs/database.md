## Schema

### Courses
|Param|Info|Example|
|---|---|---|
|Course code|PRIMARY KEY|CS-A1234|
|Name|||
|Credit max||8|
|Credit min||3|
|Language|fi, sv, en|en|
|Period||1-2,5|
|Grade Scale|0-5, Hyv/Hyl||
|Prerequsites|free text||
|Learning Results|free text||
|Course Content|free text||
|Grading information|free text||
|Additional information|free text||
|Updated|when db row has been changed?||


### Review
|Param|Info|Example|
|---|---|---|
|id|PRIMARY KEY||
|Course code||CS-A1234|
|Course taken|when user has taken the course?||
|Rating|1-5||
|Workload|1-5||
|Review written|fi, sv, en||
|Review|free text||