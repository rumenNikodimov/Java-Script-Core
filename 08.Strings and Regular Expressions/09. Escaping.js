
    function htmlEscape(input) {
        // TODO
        let result = '<ul>\n';

        // Loop over all input tokens
        for (let s of input) {
            let currLine = `  <li>`;
            s = s.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;');

            currLine += s + '</li>\n';

            result += currLine;
        }

        result += '</ul>\n';

        return result;
    }
