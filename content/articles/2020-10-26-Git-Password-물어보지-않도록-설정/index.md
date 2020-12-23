---
templateKey: blog-post
title: Git Password 물어보지 않도록 설정
slug: Git-Password-물어보지-않도록-설정
date: 2020-08-01T11:58:00.000Z
dateModified: 2020-08-01T11:58:00.000Z
description: 귀찮게 계속 물어보는 Git 로그인이 싫을때
featuredPost: false
category: document
tags:
  - Git
  - Document
# featuredImage: ../../../static/images/programmers.jpg
---

해당 프로젝트에서 먼저 `pull` 또는 `push`를 진행 후 아래의 명령어를 입력한다.

`git config credential.helper store`

그러면 해당 프로젝트에 대한 계정들이 기억된다.
