---
templateKey: blog-post
title: Git Password 물어보지 않도록 설정
slug: Git-Password-물어보지-않도록-설정
date: 2020-10-26T00:33:46.715Z
dateModified: 2020-10-26T00:33:46.741Z
description: this is the fifth test post
featuredPost: false
category: document
tags:
  - Git
  - Document
featuredImage: ../../../static/images/programmers.jpg
---

# 문제

### 문제 설명

프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 ``으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

### 제한 조건

- s는 길이 4 이상, 20이하인 문자열입니다.

### 입출력 예

| phone_number | return |
| ------------ | ------ |
| 1033334444 | `*******4444` |
| 27778888 | `****8888` |

# 풀이

```jsx
function solution(phone_number) {
    return phone_number.replace(/(\d+)(\d{4})/, (_, $2, $3) => {
        return `${$2.replace(/./g, '*')}${$3}`
    });
}
```
