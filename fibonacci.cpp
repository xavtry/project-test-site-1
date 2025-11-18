#include <emscripten.h>
#include <cstdint>

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    uint64_t fib(uint32_t n) {
        if (n <= 1) return n;
        uint64_t a = 0, b = 1;
        for (uint32_t i = 2; i <= n; ++i) {
            uint64_t temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
}
