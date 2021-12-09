# color-names-generator
Generator for color names to name hex pairs pairs.
The use case is really not all that fancy, I just needed to create a color picker but instead of using hex values or a color wheel it needed to use the actual color names. So this is a small utility that just pulls colors from [source](https://www.w3schools.com/colors/colors_names.asp) parses them into the required format then generates a file in the language of choices ( Js and Dart ).
For now just doing web colors because they cover alot. May add more souces if the need arises.
## Usage
- Clone the repo and install npm packages
- ``npm i -g``
- `` colorname download ``
## Stuff being used
- Handlebars ( For creating the js and Dart)
- Got
- cheerio
## Todo
[] Add multi language support
[] Add Progress indicator for download
[] Parse using downloaded json
[] Publish to npm (🙂🙂 I dont know why I'd do this, but will try)
## Resources to check out later
- https://philna.sh/blog/2020/08/06/how-to-stream-file-downloads-in-Node-js-with-got/
