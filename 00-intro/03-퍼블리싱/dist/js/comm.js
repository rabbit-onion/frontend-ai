$(document).ready(function () {
    let $btnEvent = $("#btnApply"),
        $layerRegister = $("#layerLegister"),
        $layerAgree = $("#layerAgree"),
        $btnClose = $("#btnClose"),
        $btnClose2 = $("#btnClose2"),
        $completion = $("#completion");

    $btnEvent.on("click", function () {
        $layerRegister.show();
    });

    $layerRegister.each(function () {
        let $this = $(this);

        $btnClose.click(function () {
            $this.hide();
        });

        $completion.click(function () {
            $this.hide();
            $layerAgree.css({
                display: "flex",
            });
        });
    });

    $layerAgree.each(function () {
        let $this = $(this);

        $btnClose2.click(function () {
            $this.hide();
        });
    });
});
