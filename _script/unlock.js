/**
 * @supported A52E29AADCCB
 */

/*
[rewrite_local]
^https:\/\/(raw.githubusercontent|\w+\.github)\.(com|io)\/.*\.js$ url script-response-body unlock.js

hostname = raw.githubusercontent.com, *.github.io,
*/

var body = $response.body;
body = '\/*\n@supported A52E29AADCCB\n*\/\n' + body;
$done(body);
