import languages from './languages.json'

function getId(current, langs) {
    let id = 0
    langs.forEach(lang => {
        if (lang.name === current)
            id = lang.id
    })
    return id; 
}
export function submitCodeToApi(editor,ipstd) {
    let code = editor.code;
    let id = getId(editor.lang, languages);
    let stdin = ipstd;
    let body = JSON.stringify({
        language_id: id,
        source_code: code,
        stdin: stdin
    })
    
    return fetch("https://judge0-ce.p.rapidapi.com/submissions", {
        "method": "POST",
        "headers": {
            "x-rapidapi-host":"judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": "aa4326aa95msh99b4eeb549d34a3p1f8c80jsnd0f82e778d7f",
            "content-type": "application/json",
            "accept": "application/json"
        },
        "body": body
    });
}

export function checkStatusFromApi(token) {
    return fetch(`https://judge0-ce.p.rapidapi.com/submissions/${token}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": "aa4326aa95msh99b4eeb549d34a3p1f8c80jsnd0f82e778d7f"
        }
    })
}