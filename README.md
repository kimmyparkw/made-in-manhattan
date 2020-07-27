<h1>Technology Used:</h1>
I used classes to create the characters and fabric stores and was able to access the methods within the narration texts. I created a lot of buttons and used click events on each to deliver the user to the next point in the story. I used nested arrays to hold my narration text as well as my option button texts.

<h1> Approach taken:</h1>
I created divs for my text as well as the option buttons. I knew I needed to access text information for each and append them to the divs. Then I had to be able to remove the buttons from the previous page before appending the buttons for the next decision. 

<h1>User story:</h1>

Background: it's your first time in New York and you are starting as an unpaid
intern at a fashion design studio. You must navigate through New York and the
Fashion District to run errands. You want to work hard and make the best
impression on your team lead and the designer with the ultimate goal of becoming
the lead dresser at the fashion show at the end of the week.

Story:
You walk into the studio and are greeted by the head designer, Christina, herself! He
introduces himself and asks you for your name. You introduce yourself and he
wastes no time in getting you started with intern life. You are then introduced
to the head intern(team lead), Michaela, who gives you a couple of tasks to do
for the day. You are to pick up the dry cleaning and find some fabric swatches
according to what Christina needs. Christina says she needs various swatches of nude, sequin fabric.

--DAY 1--

1st task set:
Either go to the fabric stores to see what there is or go to the dry cleaners first.

if (fabric store first) {
  pick which fabric store you want to go to first - Mood, B&H, or Spandex World
  if (Mood) {
    no fabrics like that
    decision: either go to the studio or pick a new store
      if (back to studio) - you're fired for making a bad impression
  } else if (B&H) {
    too expensive
    decision: either go to the studio or pick a new store
      if (back to studio) - you're fired for making a bad impression
  } else if (Spandex World) {
    You found some swatches!
  }
  decision: either go back to the studio or go to the dry cleaners.
  if (back to studio) -- "What about the dry cleaning?! You're fired!"
  else if (dry cleaning then studio) -- "Wow you did that so fast! There is
  nothing else for you to do today. See you tomorrow!"
}

if (dry cleaning fist) {
  You picked up the dry cleaning
  decision: buy swatches or go to the studio first?
  if (buy swatches) {
   Your arms are about to fall off from holding such heavy garments for so long
   and the city is too hot. You quit because this is not what you thought it would be.
  } else if (back to studio) {
  "what about the swatches?! You're fired!"
  }
  }
}
<h1>Wireframes:</h1>
https://github.com/kimmyparkw/made-in-manhattan/issues/4

<h1>How to use:</h1>
As the user, just click through the decisions that you would like to make.

<h1>Unsolved problems:</h1>
My biggest problem that I would like to address at a later time would be to dry up my code and to try using a nested array with objects that have the narration texts and options in the same object. that way I can access all the information in one method.

## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/kimmyparkw/made-in-manhattan/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/kimmyparkw/made-in-manhattan/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
