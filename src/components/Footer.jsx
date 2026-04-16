export default function Footer() {
  return (
    <footer className="bg-[#4A69E2] text-white">

      {/* 🔥 TOP */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* LOGO + TAGLINE */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">🏠 HomeFinder</h1>
          <p className="text-xs text-white/80">
            Find your dream property easily
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">

          {/* COL 1 */}
          <div>
            <h2 className="font-semibold mb-2">Professional</h2>
            <ul className="space-y-1 text-white/90">
              <li>Promoter</li>
              <li>Project Partner</li>
              <li>Sales Partner</li>
              <li>Territory Partner</li>
            </ul>
          </div>

          {/* COL 2 */}
          <div>
            <h2 className="font-semibold mb-2">Tools</h2>
            <ul className="space-y-1 text-white/90">
              <li>EMI Calculator</li>
              <li>Cost Calculator</li>
              <li>RERA</li>
              <li>Builders</li>
            </ul>
          </div>

          {/* COL 3 (CONTACT) */}
          <div>
            <h2 className="font-semibold mb-2">Contact</h2>
            <ul className="space-y-1 text-white/90 text-xs">
              <li>📧 abhishek@gmail.com</li>
              <li>📞 9955607199</li>
              <li>📍 India</li>
            </ul>
          </div>

          {/* COL 4 (SOCIAL) */}
          <div>
            <h2 className="font-semibold mb-2">Follow</h2>

            <div className="flex gap-2 mt-2">
              <div className="icon">f</div>
              <div className="icon">i</div>
              <div className="icon">in</div>
            </div>

            {/* TRUST BADGE */}
            <p className="text-xs text-white/70 mt-3">
              🔒 Secure Payments
            </p>
          </div>

        </div>

      </div>

      {/* 🔥 BOTTOM */}
      <div className="border-t border-white/30 py-4 text-center text-xs text-white/80 px-4">

        <p>© 2026 HomeFinder.in</p>

        <div className="flex justify-center gap-3 mt-2 flex-wrap">
          <span className="hover:underline cursor-pointer">Terms</span>
          <span className="hover:underline cursor-pointer">Privacy</span>
          <span className="hover:underline cursor-pointer">Cancellation</span>
        </div>

      </div>

      {/* 🔥 STYLE */}
      <style>
        {`
          .icon {
            width: 32px;
            height: 32px;
            background: white;
            color: #4A69E2;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            font-weight: bold;
            font-size: 12px;
            transition: 0.3s;
          }

          .icon:hover {
            transform: scale(1.1);
            background: #e0e7ff;
          }
        `}
      </style>

    </footer>
  );
}