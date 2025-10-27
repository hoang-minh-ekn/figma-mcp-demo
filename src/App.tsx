import BadButton from "./components/example-1/bad-button";
import GoodButton from "./components/example-1/good-button";
import BadLinkButton from "./components/example-2/bad-link-button";
import GoodLinkButton from "./components/example-2/good-link-button";
import HeaderWithBEM from "./components/example-3/header-with-bem";
import BadHeader from "./components/example-4/bad-header";
import GoodHeader from "./components/example-4/good-header";

function App() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-[1280px] mx-auto space-y-10">
        <section className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-xl font-bold mb-6 text-gray-800">
            Example 1: Figma tokens
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 items-start justify-center">
            <div className="flex flex-col items-center gap-2 flex-1">
              <span className="text-sm font-medium text-gray-500 mb-1">
                Bad Button
              </span>
              <BadButton />
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <span className="text-sm font-medium text-gray-500 mb-1">
                Good Button
              </span>
              <GoodButton />
            </div>
          </div>
        </section>
        <section className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-xl font-bold mb-6 text-gray-800">
            Example 2 - Component
          </h2>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium text-gray-500 mb-1">
              Bad Link Button
            </span>
            <BadLinkButton />
            <span className="text-sm font-medium text-gray-500 mt-4 mb-1">
              Good Link Button
            </span>
            <GoodLinkButton />
          </div>
        </section>
        <section className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-xl font-bold mb-6 text-gray-800">
            Example 3 - Naming
          </h2>
          <div>
            <span className="text-sm font-medium text-gray-500 mb-4 block">
              Header with BEM
            </span>
            <HeaderWithBEM />
          </div>
          <div>
            <span className="text-sm font-medium text-gray-500 mb-4 block">
              Header without BEM
            </span>
            <GoodHeader />
          </div>
        </section>
        <section className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-xl font-bold mb-6 text-gray-800">
            Example 4 - Auto Layout
          </h2>
          <div>
            <span className="text-sm font-medium text-gray-500 mb-4 block">
              Header without auto layout
            </span>
            <BadHeader />
          </div>

          <div>
            <span className="text-sm font-medium text-gray-500 mb-4 block">
              Header with auto layout
            </span>
            <GoodHeader />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
