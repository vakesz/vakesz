---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
description: "Write a compelling 150-160 character description that will appear in search results and social media previews"
summary: "Brief summary of the post content for better SEO"
tags: ["tag1", "tag2", "tag3"]
categories: ["category"]
keywords: ["keyword1", "keyword2", "keyword3"]
cover:
    image: "/img/posts/{{ .TranslationBaseName }}/cover.webp"
    alt: "Descriptive alt text for the cover image"
    caption: "Optional caption for the cover image"
    relative: false
    hidden: false
---

Write your compelling introduction here...

<!--more-->

Your detailed content goes here...
