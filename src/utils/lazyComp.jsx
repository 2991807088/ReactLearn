import React, { Suspense } from "react";
const lazyComp = (Comp) => {
    return (
        <Suspense fallback={<div>请稍后</div>}>
            <Comp />
        </Suspense>
    )
}
export default lazyComp