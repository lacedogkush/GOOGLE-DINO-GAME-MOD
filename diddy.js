Obstacle.prototype.init = function init(t) {
                    if (
                    this.size > 1 && this.typeConfig.multipleSpeed > t && (this.size = 1),
                    this.width = this.typeConfig.width * this.size,
                    Array.isArray(this.typeConfig.yPos)) {
                        const t = IS_MOBILE ? this.typeConfig.yPosMobile : this.typeConfig.yPos;
                        this.yPos = t[getRandomNum(0, t.length - 1)]
                    } else
                        this.yPos = this.typeConfig.yPos;
                    this.draw(),
                    this.typeConfig.speedOffset && (this.speedOffset = Math.random() > .5 ? this.typeConfig.speedOffset : -this.typeConfig.speedOffset),
                    this.gap = 0,
                    Runner.audioCues && (this.gap *= 2) }

Runner.config.ACCELERATION = 0.5
Runner.config.MAX_SPEED = 1000000
