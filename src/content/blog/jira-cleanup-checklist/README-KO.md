# 최종본 안내

이 ZIP은 Bomray Lab Resources의 첫 번째 게시용 글입니다.

## 수정한 핵심

- 본문 H1 제거: 제목은 frontmatter의 `title`을 레이아웃에서 한 번만 출력
- 약 2,300단어 수준으로 압축
- 25개 항목을 7개 카테고리로 묶어 가독성 개선
- 단순 원형 나열이 아니라 실제 검토 흐름을 보여주는 workflow 이미지로 교체
- checklist 이미지를 카테고리 카드 방식으로 교체
- comparison 이미지를 본문 마지막 설명 구간으로 이동
- SEO 값은 본문이 아니라 frontmatter에만 포함
- Atlassian 공식 문서 기준으로 내용 재검토
- Needs Attention는 마지막에 선택지로만 자연스럽게 소개

## 파일 구조

```text
jira-cleanup-checklist-final/
├── index.md
├── hero.webp
├── workflow.webp
├── checklist.webp
├── comparison.webp
└── README-KO.md
```

## 업로드 방법

글과 이미지를 같은 폴더에서 처리하는 Astro Content Collection 구조라면 폴더째 복사합니다.

```text
src/content/blog/jira-cleanup-checklist/
```

현재 프로젝트가 Markdown과 public 이미지를 분리한다면 `index.md`의 이미지 경로를 프로젝트 구조에 맞게 바꿔야 합니다.

## 메타 설정 요청 문구

Bomray Lab Resources의 Astro 블로그가 Markdown frontmatter를 이용해 SEO 메타 태그를 자동 생성하도록 수정해 주세요.

지원할 값:

- title
- description
- pubDate
- category
- lang
- slug
- hero
- seo.title
- seo.description
- seo.canonical
- seo.robots
- seo.ogImage
- seo.ogTitle
- seo.ogDescription
- keywords
- related

상세 페이지에서는 frontmatter의 `title`을 H1으로 한 번만 출력하고, Markdown 본문에는 H1이 없어도 되게 해 주세요.

`<head>`에는 title, description, canonical, robots, Open Graph, Twitter Card를 생성해 주세요. 상대경로 canonical과 ogImage는 Astro의 `site` 설정을 기준으로 절대 URL로 변환해 주세요.

Article JSON-LD도 추가해 주세요.

- headline
- description
- datePublished
- dateModified
- image
- author: Bomray Lab
- publisher: Bomray Lab
- mainEntityOfPage

`related`는 slug 배열이며, 실제 존재하는 글만 하단에 표시해 주세요.

hero 이미지는 상세 페이지 상단과 OG 이미지에 사용하고 alt는 글 제목으로 설정해 주세요.
