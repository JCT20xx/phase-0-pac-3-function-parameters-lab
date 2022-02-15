function introduction(name) {
    const aki = "Hi, my name is Aki."
    const samip = "Hi, my name is Samip."

    if ("Aki" === name) {
        return aki;
    }
    else if ("Samip" === name) {
        return samip
    }
}

function introductionWithLanguage(name, language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}