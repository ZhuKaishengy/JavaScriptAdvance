import module1 from './module1'
import data from '../json/person.json'
import '../css/test1.css'
import '../img/1.jpg'
import '../img/big.jpg'
import '../img/logo.jpg'

document.write(`entry ... <br>`)
document.write(`foo() ... ${module1.foo(2)} <br>`)
document.write(`bar() ... ${module1.bar(3)} <br>`)
document.write(`${JSON.stringify(data)} <br>`)
