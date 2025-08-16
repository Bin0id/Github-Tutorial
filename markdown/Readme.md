# Markdown Examples

- [unordered lists](#unordered-lists)
- ordered lists
- text formatting
- code
- tables
- [links](#links)
- images
- blockquote
- autolists
- lists

https://github.github.com/gfm/

## Unordered lists

We can create unordered lists in markdown using hyphens.

- foo
- bar
+ baz
+ baz

## Ordered lists

1. foo
1. bar
3) baz
3) baz
3) baz

## Text formatting

*italics*
_italics_

**bold**
__bold__

~~striketrough~~

## Code

### Inline code

You can print to the terminal using the
`puts "Hello World" ` command in Ruby.

### Multiline code


#### Without highlighting

```
def hello_world
    puts "Hello World"
end
```

#### With highlighting

```rb
def hello_world
    puts "Hello World"
end
```

##  Tables

| foo | bar |
| --- | --- |
| baz | bim |

| abc | defghi |
:-: | -----------:
bar | baz

| abc | def |
| --- | --- |
| bar |
| bar | baz | boo |

| abc | def |
| --- | --- |

 ## Links 

Great way to naviguate between pages and link it to the other page [Secret page](secret.md). It's specific to Github.

[Github Website](https://github.com)


## Blockquote

>"The cloud is amazing"

   > # Foo
   > bar
 > baz

 ## Tasklist

 - [ ] Item 1
 - [X] Item 2
