/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */
import Vue from "vue";

import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import MyButton from "./MyButton";

import Heading from "../src/components/Headings/Heading";
import SubHeading from "../src/components/Headings/Subheading";

import Card from "../src/components/Structure/Card";

import TodoList from "../src/components/Todo/TodoList";
import TodoItem from "../src/components/Todo/TodoItem";

storiesOf("Todo", module)
  .add("Empty List Container", () => ({
    components: { TodoList },
    template: "<todo-list/>"
  }))
  .add("Populated List Container", () => ({
    components: { TodoList },
    template:
      '<todo-list :items="[{text: `Wash Car`, completed: true}, {text: `Clean Room`, completed: false}]"/>'
  }))
  .add("List Item", () => ({
    components: { TodoItem },
    template: '<todo-item :item="{text: `Wash Car`, completed: true}"/>'
  }));

storiesOf("Button", module)
  .add("with text", () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action("clicked") }
  }))
  .add("with JSX", () => ({
    components: { MyButton },
    // eslint-disable-next-line no-unused-vars
    render(h) {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo("clicked") }
  }))
  .add("with some emoji", () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action("clicked") }
  }));

storiesOf("Structure", module)
  .add("Card", () => ({
    components: { Card },
    props: {
      title: {
        default: text("Card Title", "Card Title")
      },
      body: {
        default: text("Text", "Card Body")
      },
      bgVariant: {
        default: select(
          "Background Variant",
          ["", "primary", "danger", "success", "warning", "dark"],
          ""
        )
      },
      textVariant: {
        default: select("Text Variant", ["white", "dark"], "dark")
      }
    },
    template: `<Card :title="title" :bg-variant="bgVariant" :text-variant="textVariant">{{ body }}</Card>`
  }))
  .addDecorator(withKnobs);

storiesOf("Headings", module)
  .add("Heading", () => ({
    components: { Heading },
    props: {
      text: {
        default: text("Text", "Hello Storybook")
      }
    },
    template: `<Heading>{{ text }}</Heading>`
  }))
  .add("SubHeading", () => ({
    components: { SubHeading },
    props: {
      text: {
        default: text("Text", "Hello Storybook")
      }
    },
    template: `<SubHeading>{{ text }}</SubHeading>`
  }))
  .addDecorator(withKnobs);

/* eslint-enable react/react-in-jsx-scope */
