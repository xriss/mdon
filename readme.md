# item: Main Item.

```hjson
{
  "extra":"data",
}
```

We can include text here for the main item but as soon as we see a ## name: we will switch to a new part.

Multiple # name: can apear in one file so of course multiple items can be contained in one file.


## part: Part of an item.

```hjson
{
  "extra":"data",
}
```

Each # item: can contain multiple parts of markdown data usin ## part: to start them.
This nesting can continue as needed with sub parts and sub sub parts.

# This is normal markdown contained in an item

Becaues this heading does not contain a name: at the start it is just a normal heading
and does not start a new part or item.

