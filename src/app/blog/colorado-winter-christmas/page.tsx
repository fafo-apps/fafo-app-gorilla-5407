import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fun Things to Do in Colorado During Winter & Christmas",
  description:
    "Your friendly guide to Colorado winter fun: skiing, snow tubing, hot springs, holiday lights, markets, festive train rides, and cozy towns.",
};

export default function ArticlePage() {
  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <header>
        <h1>Fun Things to Do in Colorado During Winter & Christmas</h1>
        <p className="lead">Make the most of snow season with festive experiences, mountain adventures, and warm-and-cozy relax time.</p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Updated for this winter season</p>
      </header>

      <section>
        <h2>Hit the slopes (all skill levels welcome)</h2>
        <p>
          Colorado’s ski resorts are famous for a reason. Whether you’re taking your first lesson or chasing powder, you’ll find runs that fit your comfort level.
        </p>
        <ul>
          <li><strong>Beginner-friendly:</strong> Keystone, Winter Park, Copper Mountain.</li>
          <li><strong>Mix of terrain:</strong> Breckenridge, Vail, Steamboat.</li>
          <li><strong>Iconic destinations:</strong> Aspen Snowmass, Telluride.</li>
        </ul>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Tip: Book lessons and lift tickets early for best pricing and availability.</p>
      </section>

      <section>
        <h2>Snow tubing and sledding (big smiles, little effort)</h2>
        <p>
          Tube hills are pure joy for families and groups. No skills required—just hop on and slide.
        </p>
        <ul>
          <li>Fraser Tubing Hill (near Winter Park)</li>
          <li>Adventure Point Tubing (Keystone)</li>
          <li>Hidden Valley sledding area (Rocky Mountain National Park; bring your own sled)</li>
        </ul>
      </section>

      <section>
        <h2>Ice skating with a view</h2>
        <p>
          Glide under open skies at scenic rinks and lakes.
        </p>
        <ul>
          <li>Evergreen Lake (when conditions allow)</li>
          <li>Dercum Square (Keystone)</li>
          <li>Downtown Denver’s seasonal rink at Skyline Park</li>
        </ul>
      </section>

      <section>
        <h2>Holiday lights and markets</h2>
        <p>
          Colorado lights up for the season with sparkling displays and cozy markets.
        </p>
        <ul>
          <li>Denver Zoo Lights</li>
          <li>Blossoms of Light (Denver Botanic Gardens)</li>
          <li>Denver Christkindlmarket (European-style holiday market)</li>
          <li>Historic small towns like Georgetown, Breckenridge, and Golden decked out for the holidays</li>
        </ul>
      </section>

      <section>
        <h2>Festive train rides</h2>
        <p>
          Step into a storybook setting on a scenic winter train. Expect mountain views, cocoa, and plenty of cheer.
        </p>
        <ul>
          <li>Georgetown Loop Railroad holiday rides</li>
          <li>Durango &amp; Silverton Narrow Gauge Railroad seasonal rides</li>
        </ul>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Check schedules and book early—popular dates sell out fast.</p>
      </section>

      <section>
        <h2>Warm up in natural hot springs</h2>
        <p>
          Soak under the stars while snow falls around you—unforgettable.
        </p>
        <ul>
          <li>Glenwood Hot Springs and Iron Mountain Hot Springs (Glenwood Springs)</li>
          <li>Strawberry Park Hot Springs (Steamboat Springs)</li>
          <li>Ouray Hot Springs (San Juan Mountains)</li>
        </ul>
      </section>

      <section>
        <h2>Snowshoeing and winter hikes</h2>
        <p>
          Quiet trails, sparkling forests, and wildlife tracks in the snow. Many rental shops offer snowshoes by the day.
        </p>
        <ul>
          <li>Rocky Mountain National Park</li>
          <li>Brainard Lake Recreation Area</li>
          <li>Local Nordic centers at major resorts</li>
        </ul>
      </section>

      <section>
        <h2>Sleigh rides and dog sledding</h2>
        <p>
          Bundle up for a classic winter experience.
        </p>
        <ul>
          <li>Horse-drawn sleigh dinners (Breckenridge, Steamboat, and more)</li>
          <li>Guided dog sledding tours in mountain towns across the state</li>
        </ul>
      </section>

      <section>
        <h2>Cozy food, drink, and culture</h2>
        <p>
          Warm up with local flavors and creative experiences.
        </p>
        <ul>
          <li>Craft breweries, distilleries, and hot cocoa by the fire</li>
          <li>Denver Art Museum and other museums for a culture day</li>
          <li>Immersive art at Meow Wolf: Convergence Station (Denver)</li>
        </ul>
      </section>

      <section>
        <h2>Practical tips for a smooth trip</h2>
        <ul>
          <li><strong>Altitude:</strong> Drink water, take it easy your first day, and consider staying a night in Denver before heading higher.</li>
          <li><strong>Layers:</strong> Weather changes quickly. Pack base layers, a warm mid-layer, and a waterproof outer layer.</li>
          <li><strong>Sun + snow glare:</strong> Sunscreen and sunglasses are musts, even on cloudy days.</li>
          <li><strong>Driving:</strong> Check road conditions; carry traction options if snow is in the forecast.</li>
          <li><strong>Book ahead:</strong> Lodging, lessons, train rides, and special events can sell out in peak weeks.</li>
        </ul>
      </section>

      <hr/>
      <section>
        <h2>Plan a perfect long weekend</h2>
        <ul>
          <li><strong>Day 1:</strong> Arrive, stroll a holiday market, enjoy lights at the Botanic Gardens or Zoo.</li>
          <li><strong>Day 2:</strong> Ski or snowshoe; soak in a hot spring in the evening.</li>
          <li><strong>Day 3:</strong> Tubing or a sleigh ride; finish with a festive train ride or a cozy dinner in a mountain town.</li>
        </ul>
      </section>

      <p>
        However you like to celebrate, Colorado’s winter has something special for you—memories in the making.
      </p>
    </article>
  );
}
