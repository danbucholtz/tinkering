import { Component } from '@stencil/core';

@Component({
  tag: 'th-culture-body-content',
  styleUrl: 'th-culture-body-content.css',
  shadow: true
})
export class ThCultureBodyContent {
  
  render() {
    return [
      <div class="container">
        <div class="text-container">
          <h1 class="title">Our Manifesto</h1>
          <p>We take company culture and core values very seriously. Culture doesn't just eat strategy for breakfast - it's eats everything. Therefore, we know that to be successful and build a lasting business, we need to be the sort of company that employees and customers love, respect, and trust. Our core values are ever evolving and will drive our decision making process.</p>
        </div>

        <div>
          <h1 class="green">Invest the time up front to avoid costly mistakes</h1>
          <p>Whether experimenting with a new technology, or when hiring new staff, take the time to fully grasp the pros/cons of a situation and get the best information possible. When it comes to decision making, you can never have too much information. If this means we spend a week doing a deep dive into a topic to make sure we understand what we're getting into, or we spend 5 hours interviewing a single candidate, it's worth it to avoid making costly mistakes.</p>
        </div>

        <div>
          <h1 class="purple">Employees are our best assets and advocates</h1>
          <p>Theracode employees are our best asset and advocates for our services. If our employees aren't loving what we're doing or what our culture is like, why would our customers buy it? It is our job to genuinely listen and respond effectively so our employees needs are being met. Since we hire very talented, ambitious people, we need to compensate them handsomely and give them opportunities and space to grow, learn, fail, and succeed.</p>
        </div>

        <div>
          <h1 class="orange">Work comes second</h1>
          <p>From the top down, we want everyone in our company being great spouses/partners and parents. We will only hire people that we believe fit that bill. This will be the single most important characteristic in candidates we select. While doing exceptional work is important, we believe being available and responsive to one's family is more important. We would much rather that our employees have lunch with their kids instead of working through lunch. We'd rather our employees cut out early on a nice day and take their kids to the park. As long as we're assigning reasonable amounts of work, and the work is getting done, we want our employees putting in the bear minimum time to achieve that and being great partners, parents, etc the rest of the time.</p>
        </div>

        <div>
          <h1 class="red">Be a fundamentally sound business</h1>
          <p>Every employee has the right to know if they're going to have a job tomorrow, next week, and next month. We will consistently provide transparent updates about the financial health of the business to all employees. In addition, the business will be run in a conservative, slow-growing, strategic manner. We're not planning on a quick exit, we'd like to be around for a long time. The idea of venture capital or outside investors is not something we're interested in.</p>
        </div>

        <div>
          <h1 class="green">The Internet is our office</h1>
          <p>There are so many reasons to be all-in on remote work in today's world. Makers need quiet time to think, life is way too short to waste time commuting, limiting ourselves to local candidates decreases overall talent pool, etc. We believe that remote work is more productive, collaborative, fun, and social then working in a traditional office when done correctly. In order to ensure we do things correctly, we will never have a central headquarters or office. We will also make sure that teams work collaboratively and effectively together by having consistent weekly social time and team meetings.</p>
        </div>
      </div>


    ];
  }
}
