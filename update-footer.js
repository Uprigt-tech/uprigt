const fs = require('fs');
const path = 'c:/Users/vipin/OneDrive/Desktop/Uprigt/app/src/sections/Footer.tsx';
let txt = fs.readFileSync(path, 'utf8');

const newContent = `{/* Founder Info */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-steel-blue/30 flex items-center justify-center ring-2 ring-deep-space">
                      <span className="text-sm font-semibold">V</span>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center ring-2 ring-deep-space z-10">
                      <span className="text-sm text-white/80 font-semibold">U</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Founded by</p>
                    <div className="flex items-center gap-1.5 leading-none">
                      <a
                        href="https://vipinfolio.vercel.app/"
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        Vipin
                      </a>
                      <span className="text-sm text-white/30">&amp;</span>
                      <a 
                        href="#"
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        Umar
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}`;

txt = txt.replace(/\{\/\* Founder Info \*\/\}[\s\S]*?\{\/\* Social Links \*\/\}/, newContent);

fs.writeFileSync(path, txt, 'utf8');
console.log('Update complete');
