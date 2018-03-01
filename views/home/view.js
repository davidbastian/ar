import posthtml from 'posthtml';
import expressions from 'posthtml-expressions';
import {
    readFileSync
} from 'fs';

import './styles.scss';
const template = readFileSync('./views/home/template.html');

class HomeView {
    constructor() {
        this.setup();
    }
    setup() {
        console.log('start HomeView');
        posthtml(expressions({
                locals: {
                    foo: 'bartdydt'
                }
            }))
            .process(template, 'utf8')
            .then((result) => document.body.innerHTML = result.html);

    }
    render() {
    }
}

const v = new HomeView();
export default v;