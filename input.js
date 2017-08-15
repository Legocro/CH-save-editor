
input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  height: calc(4em + 1px);
  margin: 0 0 1em;
  padding: 1em;
  border: 1px solid #ccc;
  background: #fff;
  resize: none;
  outline: none;
}

input[type="text"][required]:focus {
  border-color: #00bafa;
}
input[type="text"][required]:focus + label[placeholder]:before {
  color: #00bafa;
}
input[type="text"][required]:focus + label[placeholder]:before,
input[type="text"][required]:valid + label[placeholder]:before {
  transition-duration: .2s;
  transform: translate(0, -1.5em) scale(0.9, 0.9);
}

input[type="text"][required]:invalid + label[placeholder][alt]:before {
  content: attr(alt);
}

input[type="text"][required] + label[placeholder] {
  display: block;
  pointer-events: none;
  line-height: 1em;
  margin-top: calc(-3em - 2px);
  margin-bottom: calc((3em - 1em) + 2px);
}

input[type="text"][required] + label[placeholder]:before {
  content: attr(placeholder);
  display: inline-block;
  margin: 0 calc(1em + 2px);
  padding: 0 2px;
  color: #898989;
  white-space: nowrap;
  transition: 0.3s ease-in-out;
  background-image: linear-gradient(to bottom, #fff, #fff);
  background-size: 100% 5px;
  background-repeat: no-repeat;
  background-position: center;
}
