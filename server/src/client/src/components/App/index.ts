import style from './App.module.scss'
import classNames from 'classnames/bind'
const cn = classNames.bind(style)

import Component from '@lib/component'

import Side from '../Side'
import Main from '../Main'
import Modal from '../Modal'

export default class App extends Component {
    constructor($parent: HTMLElement) {
        super($parent, { id: 'root' })
    }
    
    mount() {
        const $container = this.$el.querySelector(
            `.${cn('container')}`
        ) as HTMLElement
        
        new Side($container)
        new Main($container)
        new Modal($container)
    }

    render() {
        return `
            <div class="${cn('container')}"></div>
        `
    }
}
