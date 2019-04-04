# Abstracts

Abstracts are stylesheets that only declare variables. There should be _zero_ style declarations within these abstracts files. Adhering to this rule will allow us to import all of these files in `../variables` and then allows other apps to consume the file to inherit the variables we wish to define.

When defining abstracts, it is a good practice to use the `!default` flag if this is a newly defined value that can be overriden by a brand-specific theme such as `~@uaf/theme/src/bluehost/theme`. Be aware that `bootstrap-sass` also uses `!default` flags, so it may sometimes be necessary to exclude the flag to properly override their values. [See: Official documentation for `!default`](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_default)
