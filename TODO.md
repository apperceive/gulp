### TODOs
| Filename | line # | TODO
|:------|:------:|:------
| slnzen7/template.php | 59 | check for html__node__999999 and load that node to add type, add title too? - automatic for type
| slnzen7/template.php | 62 | check for html__node__submission__999999 and add "webform_submission" to body class, also status (draft, complete)
| slnzen7/template.php | 88 | use menu function to get preloaded node and pass object instead of nid to avoid additional node_loads. performance
| slnzen7/template.php | 158 | add args (e.g., slnsurvey/submission/report/%nid/%sid)
| slnzen7/template.php | 336 | shouldn't this be $class instead of $form_key???
| slnzen7/template.php | 356 | add project from sln_project_id data
| slnzen7/template.php | 461 | do not show if no components
| slnzen7/templates/views-view-field--project-submissions--nothing.tpl.php | 38 | what if !$surveynode
| slnzen7/templates/views-view-field--project-submissions--nothing.tpl.php | 40 | check that submission status is not draft
| slnzen7/templates/views-view-field--user-survey-submissions--nothing-1.tpl.php | 34 | what if !$surveynode
| slnzen7/templates/views-view-field--user-survey-submissions--nothing-1.tpl.php | 36 | check that submission status is not draft
| bootstrap/theme/bootstrap/bootstrap-accordion.func.php | 5 | replace this with bootstrap_panel?
| bootstrap/theme/bootstrap/bootstrap-modal.vars.php | 10 | Replace with "bootstrap_effect_fade" theme setting.
| bootstrap/theme/system/pager.func.php | 46 | add theme setting for this.
| bootstrap/theme/system/pager.func.php | 64 | add theme setting for this.
| bootstrap/theme/system/pager.func.php | 71 | add theme setting for this.
| bootstrap/theme/system/pager.func.php | 137 | add theme setting for this.
| bootstrap/theme/system/region.vars.php | 20 | is this actually used properly?