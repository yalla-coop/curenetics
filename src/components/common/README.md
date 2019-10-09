# Common Components README
> Guidance and advice on how to use them for consistent code.

## All Components
- When passing in most props, you can usually just do `<Button isClear>` rather than `<Button isClear={true}>`
- When creating a new component, base it off a component in `Buttons.js`, `Forms.js`. `Layouts.js`, or `Typography.js`, then style it with `const MyComponent = styled(OriginalComponent)``;`. Adding more props to existing components will make them unnecessarily complex.
- If you want to find out what props can be passed into a component, please view the source code for that component. The below guidance will cover most cases.


---

## Buttons
- Found in `Buttons.js`.
- 9 basic varieties of buttons / links (all include text):
    - `<button>` (clear and purple), plus each type with an icon (4 types total).
    - `<a>` anchor link (clear and purple), plus each type with an icon, **plus** back link (5 types total).
- 2 extra varieties of `RoundButton`
    - `<button>` (clear with outline, or purple).
    - This button is used on the upload page.
- Props:
    - by default, buttons / anchors are purple with white text / svg.
    - Adding `isCenter` will centrally align the button on the screen.
    - Adding `isClear` prop will make them clear with purple text.
    - To edit svg colour, pass in `fill={colors.purple}`, or the colour you wish to use from `globalStyles.js`.
    - For icon buttons / anchors, you can align the icon to the right by adding the `iconRight` prop.
- Accessibility:
    - Some guidance on accessibilty can be found [here](https://developers.google.com/web/tools/lighthouse/audits/button-name) and [here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role#Basic_buttons).
    - As a rule of thumb, please use the `aria-label` attribute on buttons, with a basic description of what the button does. This is particularly important if the button contains no text.
- Extending Styles
    - To keep button / anchor code easier to reason about, please extend styles in whatever component you are working on, rather than modifying `Buttons.js`. As these buttons are used in mulitple places throughout the app, making modifications here will affect styles in multiple places.
    - You can extend styles by doing `const MyButton = styled(OriginalButton)``;`, then adding your styles in the backticks. You will also be able to pass in the same props to `MyButton` as you would do to `OriginalButton`.
    - Examples of extended anchors (defined in `Buttons.js`) can be found in `pages/home/index.js`.

## Forms
- Found in `Forms.js`.
- Includes `<PatientForm>`, `<FormItem>`, `<Label>`, and `<Input>`
- Styles for **antd** dropdown, which we are using in place of `<select>` have so far (7/10/2019) been added in `reset.css` and `<PatientFormItem />` in styles for **PatientList** page. This component has to be styled contextually.

## Layout
- Found in `Layout.js`.
- Mixins from this file can be used if you want to use specific styles, but not be confined to a specific html element. For example, you may wish to have an `<img>` at 50% of it's parent container's width, but not use the html element of `<Article>`. This pattern is repeated for Cards and content containers.
- `<Container>` and `sectionMixin` have a `max-width` of 1024px. These are used for page content containers (within `<Main>`), and are narrower than the container in `<TopBar />` in `App.js`, which has a `max-width` of `1440px`.
- `columnMixin` is designed to be used for two column layouts. Under tablet size (768px), these are single column layouts. `<Article>` makes use `columnMixin`, also applying a margin to space the column out, depending upon the `isLeft` or `isRight` prop.

## Icons
- Found in the [icons](https://github.com/yalla-coop/curenetics/tree/feature/list-patients/src/components/common/icons) folder.
- Props:
    - icons have default props passed into them, to style them out of the box. You can override them by passing in your own props, as follows:
    - `fill` - a colour string. Usually the colour of the icon. For example `<Icon fill={colors.primary} />`
    - `width` - a number. Width of the icon in pixels.
    - `titleTag` - svgs can have a title tag element. This can give screen readers more information about them. You can pass in a custom `titleTag` prop if you wish.
    - `direction` - some icons (for example `<Arrow />`) take a direction prop to point it in a different direction.
- As with the above components, if you get stuck, see the source code.
- If you need to add more svg styles, this is best done contextually, for example:

```javascript
const CustomButton = styled(Button)`
  padding: 0 2rem;
  border-radius: 0.5rem;
`;

<CustomButton>
  <Arrow />
</CustomButton>
```