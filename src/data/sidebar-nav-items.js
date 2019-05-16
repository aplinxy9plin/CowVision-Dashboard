export default function() {
  return [
    {
      title: "Главная",
      to: "/main",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Отчет",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/order",
    },
  ];
}
