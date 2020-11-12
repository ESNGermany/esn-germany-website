import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sectionmap',
  templateUrl: './sectionmap.component.html',
  styleUrls: ['./sectionmap.component.scss'],
})
export class SectionmapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // onMouseOver() {
  //   $("path, circle").hover(function (e) {
  //     document.getElementById('info-box').setAttribute('display', 'block'); //$('#info-box').css('display', 'block');
  //     $('#info-box').html($(this).data('info'));
  //   });

  //   $("path, circle").mouseleave(function (e) {
  //     document.getElementById('info-box').setAttribute('display', 'none'); // $('#info-box').css('display', 'none');
  //   });

  //   $(document).mousemove(function (e) {
  //     $('#info-box').css('top', e.pageY - $('#info-box').height() - 30);
  //     $('#info-box').css('left', e.pageX - ($('#info-box').width()) / 2);
  //   }).mouseover();

  //   var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  //   if (ios) {
  //     $('a').on('click touchend', function () {
  //       var link = $(this).attr('href');
  //       window.open(link, '_blank');
  //       return false;
  //     });
  //   }
}
