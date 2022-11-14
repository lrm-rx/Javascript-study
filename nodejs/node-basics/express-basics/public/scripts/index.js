
$.ajax({
  url: '/lists',
  success(result) {
    // console.log('result:', result);
    // let html = '<ul>'
    // $.each(result.data, (index, value) => {
    //   html += '<li>' + value + '</li>'
    // })
    // html += '</ul>'
    // $('.lists').html(html)
    let templateStr = `
      <ul>
        {{each data}}
          <li>{{$value}}</li>
        {{/each}}
      </ul>
    `
    const html = template.render(templateStr, {
      data: result.data
    })
    $('.lists').html(html)
  }
})