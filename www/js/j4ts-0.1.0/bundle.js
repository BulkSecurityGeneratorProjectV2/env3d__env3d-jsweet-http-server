"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        var logging;
        (function (logging) {
            /**
             * An emulation of the java.util.logging.Level class. See
             * <a href="http://java.sun.com/j2se/1.4.2/docs/api/java/util/logging/Level.html">
             * The Java API doc for details</a>
             */
            var Level = (function () {
                function Level() {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                }
                Level.ALL_$LI$ = function () { if (Level.ALL == null)
                    Level.ALL = new Level.LevelAll(); return Level.ALL; };
                ;
                Level.CONFIG_$LI$ = function () { if (Level.CONFIG == null)
                    Level.CONFIG = new Level.LevelConfig(); return Level.CONFIG; };
                ;
                Level.FINE_$LI$ = function () { if (Level.FINE == null)
                    Level.FINE = new Level.LevelFine(); return Level.FINE; };
                ;
                Level.FINER_$LI$ = function () { if (Level.FINER == null)
                    Level.FINER = new Level.LevelFiner(); return Level.FINER; };
                ;
                Level.FINEST_$LI$ = function () { if (Level.FINEST == null)
                    Level.FINEST = new Level.LevelFinest(); return Level.FINEST; };
                ;
                Level.INFO_$LI$ = function () { if (Level.INFO == null)
                    Level.INFO = new Level.LevelInfo(); return Level.INFO; };
                ;
                Level.OFF_$LI$ = function () { if (Level.OFF == null)
                    Level.OFF = new Level.LevelOff(); return Level.OFF; };
                ;
                Level.SEVERE_$LI$ = function () { if (Level.SEVERE == null)
                    Level.SEVERE = new Level.LevelSevere(); return Level.SEVERE; };
                ;
                Level.WARNING_$LI$ = function () { if (Level.WARNING == null)
                    Level.WARNING = new Level.LevelWarning(); return Level.WARNING; };
                ;
                Level.parse = function (name) {
                    java.util.logging.Logger.assertLoggingValues();
                    var loggingDisabled = (java.lang.System.getProperty("gwt.logging.enabled", "FALSE") === "FALSE");
                    if (loggingDisabled) {
                        return null;
                    }
                    var value = name.toUpperCase();
                    switch ((value)) {
                        case "ALL":
                            return Level.ALL_$LI$();
                        case "CONFIG":
                            return Level.CONFIG_$LI$();
                        case "FINE":
                            return Level.FINE_$LI$();
                        case "FINER":
                            return Level.FINER_$LI$();
                        case "FINEST":
                            return Level.FINEST_$LI$();
                        case "INFO":
                            return Level.INFO_$LI$();
                        case "OFF":
                            return Level.OFF_$LI$();
                        case "SEVERE":
                            return Level.SEVERE_$LI$();
                        case "WARNING":
                            return Level.WARNING_$LI$();
                        default:
                            throw new java.lang.IllegalArgumentException("Invalid level \"" + name + "\"");
                    }
                };
                Level.prototype.getName = function () {
                    return "DUMMY";
                };
                Level.prototype.intValue = function () {
                    return -1;
                };
                Level.prototype.toString = function () {
                    return this.getName();
                };
                return Level;
            }());
            logging.Level = Level;
            var Level;
            (function (Level) {
                var LevelAll = (function (_super) {
                    __extends(LevelAll, _super);
                    function LevelAll() {
                        _super.call(this);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    }
                    LevelAll.prototype.getName = function () {
                        return "ALL";
                    };
                    LevelAll.prototype.intValue = function () {
                        return javaemul.internal.IntegerHelper.MIN_VALUE;
                    };
                    return LevelAll;
                }(java.util.logging.Level));
                Level.LevelAll = LevelAll;
                var LevelConfig = (function (_super) {
                    __extends(LevelConfig, _super);
                    function LevelConfig() {
                        _super.call(this);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    }
                    LevelConfig.prototype.getName = function () {
                        return "CONFIG";
                    };
                    LevelConfig.prototype.intValue = function () {
                        return 700;
                    };
                    return LevelConfig;
                }(java.util.logging.Level));
                Level.LevelConfig = LevelConfig;
                var LevelFine = (function (_super) {
                    __extends(LevelFine, _super);
                    function LevelFine() {
                        _super.call(this);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    }
                    LevelFine.prototype.getName = function () {
                        return "FINE";
                    };
                    LevelFine.prototype.intValue = function () {
                        return 500;
                    };
                    return LevelFine;
                }(java.util.logging.Level));
                Level.LevelFine = LevelFine;
                var LevelFiner = (function (_super) {
                    __extends(LevelFiner, _super);
                    function LevelFiner() {
                        _super.call(this);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    }
                    LevelFiner.prototype.getName = function () {
                        return "FINER";
                    };
                    LevelFiner.prototype.intValue = function () {
                        return 400;
                    };
                    return LevelFiner;
                }(java.util.logging.Level));
                Level.LevelFiner = LevelFiner;
                var LevelFinest = (function (_super) {
                    __extends(LevelFinest, _super);
                    function LevelFinest() {
                        _super.call(this);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    }
                    LevelFinest.prototype.getName = function () {
                        return "FINEST";
                    };
                    LevelFinest.prototype.intValue = function () {
                        return 300;
                    };
                    return LevelFinest;
                }(java.util.logging.Level));
                Level.LevelFinest = LevelFinest;
                var LevelInfo = (function (_super) {
                    __extends(LevelInfo, _super);
                    function LevelInfo() {
                        _super.call(this);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    }
                    LevelInfo.prototype.getName = function () {
                        return "INFO";
                    };
                    LevelInfo.prototype.intValue = function () {
                        return 800;
                    };
                    return LevelInfo;
                }(java.util.logging.Level));
                Level.LevelInfo = LevelInfo;
                var LevelOff = (function (_super) {
                    __extends(LevelOff, _super);
                    function LevelOff() {
                        _super.call(this);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    }
                    LevelOff.prototype.getName = function () {
                        return "OFF";
                    };
                    LevelOff.prototype.intValue = function () {
                        return javaemul.internal.IntegerHelper.MAX_VALUE;
                    };
                    return LevelOff;
                }(java.util.logging.Level));
                Level.LevelOff = LevelOff;
                var LevelSevere = (function (_super) {
                    __extends(LevelSevere, _super);
                    function LevelSevere() {
                        _super.call(this);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    }
                    LevelSevere.prototype.getName = function () {
                        return "SEVERE";
                    };
                    LevelSevere.prototype.intValue = function () {
                        return 1000;
                    };
                    return LevelSevere;
                }(java.util.logging.Level));
                Level.LevelSevere = LevelSevere;
                var LevelWarning = (function (_super) {
                    __extends(LevelWarning, _super);
                    function LevelWarning() {
                        _super.call(this);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    }
                    LevelWarning.prototype.getName = function () {
                        return "WARNING";
                    };
                    LevelWarning.prototype.intValue = function () {
                        return 900;
                    };
                    return LevelWarning;
                }(java.util.logging.Level));
                Level.LevelWarning = LevelWarning;
            })(Level = logging.Level || (logging.Level = {}));
        })(logging = util.logging || (util.logging = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * This class provides methods that generates pseudo-random numbers of different
         * types, such as {@code int}, {@code long}, {@code double}, and {@code float}.
         * It follows the algorithms specified in the JRE javadoc.
         *
         * This emulated version of Random is not serializable.
         */
        var Random = (function () {
            /**
             * Construct a random generator with the given {@code seed} as the initial
             * state.
             *
             * @param seed the seed that will determine the initial state of this random
             * number generator.
             * @see #setSeed
             */
            function Random(seed) {
                var _this = this;
                /**
                 * The boolean value indicating if the second Gaussian number is available.
                 */
                this.haveNextNextGaussian = false;
                if (((typeof seed === 'number') || seed === null)) {
                    this.nextNextGaussian = 0;
                    this.seedhi = 0;
                    this.seedlo = 0;
                    (function () {
                        _this.setSeed(seed);
                    })();
                }
                else if (seed === undefined) {
                    this.nextNextGaussian = 0;
                    this.seedhi = 0;
                    this.seedlo = 0;
                    (function () {
                        var seed = Random.uniqueSeed++ + javaemul.internal.DateUtil.now();
                        var hi = (Math.floor(seed * Random.twoToTheMinus24) | 0) & 16777215;
                        var lo = ((seed - (hi * Random.twoToThe24)) | 0);
                        _this.setSeed(hi, lo);
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            Random.__static_initialize = function () { if (!Random.__static_initialized) {
                Random.__static_initialized = true;
                Random.__static_initializer_0();
            } };
            Random.twoToTheXMinus24_$LI$ = function () { Random.__static_initialize(); if (Random.twoToTheXMinus24 == null)
                Random.twoToTheXMinus24 = new Array(25); return Random.twoToTheXMinus24; };
            ;
            Random.twoToTheXMinus48_$LI$ = function () { Random.__static_initialize(); if (Random.twoToTheXMinus48 == null)
                Random.twoToTheXMinus48 = new Array(33); return Random.twoToTheXMinus48; };
            ;
            Random.__static_initializer_0 = function () {
                var twoToTheXMinus48Tmp = 1.52587890625E-5;
                for (var i = 32; i >= 0; i--) {
                    Random.twoToTheXMinus48_$LI$()[i] = twoToTheXMinus48Tmp;
                    twoToTheXMinus48Tmp *= 0.5;
                }
                var twoToTheXMinus24Tmp = 1.0;
                for (var i = 24; i >= 0; i--) {
                    Random.twoToTheXMinus24_$LI$()[i] = twoToTheXMinus24Tmp;
                    twoToTheXMinus24Tmp *= 0.5;
                }
            };
            /**
             * Returns the next pseudo-random, uniformly distributed {@code boolean} value
             * generated by this generator.
             *
             * @return a pseudo-random, uniformly distributed boolean value.
             */
            Random.prototype.nextBoolean = function () {
                return this.nextInternal(1) !== 0;
            };
            /**
             * Modifies the {@code byte} array by a random sequence of {@code byte}s
             * generated by this random number generator.
             *
             * @param buf non-null array to contain the new random {@code byte}s.
             * @see #next
             */
            Random.prototype.nextBytes = function (buf) {
                javaemul.internal.InternalPreconditions.checkNotNull(buf);
                var rand = 0;
                var count = 0;
                var loop = 0;
                while ((count < buf.length)) {
                    if (loop === 0) {
                        rand = (this.nextInternal(32) | 0);
                        loop = 3;
                    }
                    else {
                        loop--;
                    }
                    buf[count++] = (rand | 0);
                    rand >>= 8;
                }
                ;
            };
            /**
             * Generates a normally distributed random {@code double} number between 0.0
             * inclusively and 1.0 exclusively.
             *
             * @return a random {@code double} in the range [0.0 - 1.0)
             * @see #nextFloat
             */
            Random.prototype.nextDouble = function () {
                return this.nextInternal(26) * Random.twoToTheMinus26 + this.nextInternal(27) * Random.twoToTheMinus53;
            };
            /**
             * Generates a normally distributed random {@code float} number between 0.0
             * inclusively and 1.0 exclusively.
             *
             * @return float a random {@code float} number between [0.0 and 1.0)
             * @see #nextDouble
             */
            Random.prototype.nextFloat = function () {
                return (this.nextInternal(24) * Random.twoToTheMinus24);
            };
            /**
             * Pseudo-randomly generates (approximately) a normally distributed {@code
             * double} value with mean 0.0 and a standard deviation value of {@code 1.0}
             * using the <i>polar method<i> of G. E. P. Box, M. E. Muller, and G.
             * Marsaglia, as described by Donald E. Knuth in <i>The Art of Computer
             * Programming, Volume 2: Seminumerical Algorithms</i>, section 3.4.1,
             * subsection C, algorithm P.
             *
             * @return a random {@code double}
             * @see #nextDouble
             */
            Random.prototype.nextGaussian = function () {
                if (this.haveNextNextGaussian) {
                    this.haveNextNextGaussian = false;
                    return this.nextNextGaussian;
                }
                var v1;
                var v2;
                var s;
                do {
                    v1 = 2 * this.nextDouble() - 1;
                    v2 = 2 * this.nextDouble() - 1;
                    s = v1 * v1 + v2 * v2;
                } while ((s >= 1));
                var norm = (s === 0) ? 0.0 : Math.sqrt(-2.0 * Math.log(s) / s);
                this.nextNextGaussian = v2 * norm;
                this.haveNextNextGaussian = true;
                return v1 * norm;
            };
            /**
             * Generates a uniformly distributed 32-bit {@code int} value from the random
             * number sequence.
             *
             * @return a uniformly distributed {@code int} value.
             * @see java.lang.Integer#MAX_VALUE
             * @see java.lang.Integer#MIN_VALUE
             * @see #next
             * @see #nextLong
             */
            Random.prototype.nextInt$ = function () {
                return (this.nextInternal(32) | 0);
            };
            /**
             * Returns a new pseudo-random {@code int} value which is uniformly
             * distributed between 0 (inclusively) and the value of {@code n}
             * (exclusively).
             *
             * @param n the exclusive upper border of the range [0 - n).
             * @return a random {@code int}.
             */
            Random.prototype.nextInt = function (n) {
                var _this = this;
                if (((typeof n === 'number') || n === null)) {
                    return (function () {
                        javaemul.internal.InternalPreconditions.checkCriticalArgument(n > 0);
                        if ((n & -n) === n) {
                            return (((n * _this.nextInternal(31)) * Random.twoToTheMinus31) | 0);
                        }
                        var bits;
                        var val;
                        do {
                            bits = _this.nextInternal(31);
                            val = bits % n;
                        } while ((bits - val + (n - 1) < 0));
                        return (val | 0);
                    })();
                }
                else if (n === undefined) {
                    return this.nextInt$();
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Generates a uniformly distributed 64-bit integer value from the random
             * number sequence.
             *
             * @return 64-bit random integer.
             * @see java.lang.Integer#MAX_VALUE
             * @see java.lang.Integer#MIN_VALUE
             * @see #next
             * @see #nextInt()
             * @see #nextInt(int)
             */
            Random.prototype.nextLong = function () {
                return (Math.round(this.nextInternal(32)) << 32) + Math.round(this.nextInternal(32));
            };
            /**
             * Modifies the seed a using linear congruential formula presented in <i>The
             * Art of Computer Programming, Volume 2</i>, Section 3.2.1.
             *
             * @param seed the seed that alters the state of the random number generator.
             * @see #next
             * @see #Random()
             * @see #Random(long)
             */
            Random.prototype.setSeed$long = function (seed) {
                this.setSeed((((seed >> 24) & 16777215) | 0), ((seed & 16777215) | 0));
            };
            /**
             * Returns a pseudo-random uniformly distributed {@code int} value of the
             * number of bits specified by the argument {@code bits} as described by
             * Donald E. Knuth in <i>The Art of Computer Programming, Volume 2:
             * Seminumerical Algorithms</i>, section 3.2.1.
             *
             * @param bits number of bits of the returned value.
             * @return a pseudo-random generated int number.
             * @see #nextBytes
             * @see #nextDouble
             * @see #nextFloat
             * @see #nextInt()
             * @see #nextInt(int)
             * @see #nextGaussian
             * @see #nextLong
             */
            Random.prototype.next = function (bits) {
                return (this.nextInternal(bits) | 0);
            };
            Random.prototype.nextInternal = function (bits) {
                var hi = this.seedhi * Random.multiplierLo + this.seedlo * Random.multiplierHi;
                var lo = this.seedlo * Random.multiplierLo + 11;
                var carry = Math.floor(lo * Random.twoToTheMinus24);
                hi += carry;
                lo -= carry * Random.twoToThe24;
                hi %= Random.twoToThe24;
                this.seedhi = hi;
                this.seedlo = lo;
                if (bits <= 24) {
                    return Math.floor(this.seedhi * Random.twoToTheXMinus24_$LI$()[bits]);
                }
                else {
                    var h = this.seedhi * (1 << (bits - 24));
                    var l = Math.floor(this.seedlo * Random.twoToTheXMinus48_$LI$()[bits]);
                    var dval = h + l;
                    if (dval >= Random.twoToThe31) {
                        dval -= Random.twoToThe32;
                    }
                    return dval;
                }
            };
            Random.prototype.setSeed = function (seedhi, seedlo) {
                var _this = this;
                if (((typeof seedhi === 'number') || seedhi === null) && ((typeof seedlo === 'number') || seedlo === null)) {
                    return (function () {
                        _this.seedhi = seedhi ^ 1502;
                        _this.seedlo = seedlo ^ 15525485;
                        _this.haveNextNextGaussian = false;
                    })();
                }
                else if (((typeof seedhi === 'number') || seedhi === null) && seedlo === undefined) {
                    return this.setSeed$long(seedhi);
                }
                else
                    throw new Error('invalid overload');
            };
            Random.__static_initialized = false;
            Random.multiplierHi = 1502;
            Random.multiplierLo = 15525485;
            Random.twoToThe24 = 1.6777216E7;
            Random.twoToThe31 = 2.147483648E9;
            Random.twoToThe32 = 4.294967296E9;
            Random.twoToTheMinus24 = 5.9604644775390625E-8;
            Random.twoToTheMinus26 = 1.4901161193847656E-8;
            Random.twoToTheMinus31 = 4.6566128730773926E-10;
            Random.twoToTheMinus53 = 1.1102230246251565E-16;
            /**
             * A value used to avoid two random number generators produced at the same
             * time having the same seed.
             */
            Random.uniqueSeed = 0;
            return Random;
        }());
        util.Random = Random;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var io;
    (function (io) {
        /**
         * A writable sink for bytes.
         *
         * <p>Most clients will use output streams that write data to the file system
         * ({@link FileOutputStream}), the network ({@link java.net.Socket#getOutputStream()}/{@link
         * java.net.HttpURLConnection#getOutputStream()}), or to an in-memory byte array
         * ({@link ByteArrayOutputStream}).
         *
         * <p>Use {@link OutputStreamWriter} to adapt a byte stream like this one into a
         * character stream.
         *
         * <p>Most clients should wrap their output stream with {@link
         * BufferedOutputStream}. Callers that do only bulk writes may omit buffering.
         *
         * <h3>Subclassing OutputStream</h3>
         * Subclasses that decorate another output stream should consider subclassing
         * {@link FilterOutputStream}, which delegates all calls to the target output
         * stream.
         *
         * <p>All output stream subclasses should override <strong>both</strong> {@link
         * #write(int)} and {@link #write(byte[],int,int) write(byte[],int,int)}. The
         * three argument overload is necessary for bulk access to the data. This is
         * much more efficient than byte-by-byte access.
         *
         * @see InputStream
         *
         * <p>The implementation provided by this class behaves as described in the Java
         * API documentation except for {@link write(int)} which throws an exception of
         * type {@link java.lang.UnsupportedOperationException} instead of being
         * abstract.
         */
        var OutputStream = (function () {
            /**
             * Default constructor.
             */
            function OutputStream() {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Closeable", "java.lang.AutoCloseable", "java.io.Flushable"] });
            }
            /**
             * Closes this stream. Implementations of this method should free any
             * resources used by the stream. This implementation does nothing.
             *
             * @throws IOException
             * if an error occurs while closing this stream.
             */
            OutputStream.prototype.close = function () {
            };
            /**
             * Flushes this stream. Implementations of this method should ensure that
             * any buffered data is written out. This implementation does nothing.
             *
             * @throws IOException
             * if an error occurs while flushing this stream.
             */
            OutputStream.prototype.flush = function () {
            };
            /**
             * Equivalent to {@code write(buffer, 0, buffer.length)}.
             */
            OutputStream.prototype.write$byte_A = function (buffer) {
                javaemul.internal.InternalPreconditions.checkNotNull(buffer);
                this.write(buffer, 0, buffer.length);
            };
            /**
             * Writes {@code count} bytes from the byte array {@code buffer} starting at
             * position {@code offset} to this stream.
             *
             * @param buffer
             * the buffer to be written.
             * @param offset
             * the start position in {@code buffer} from where to get bytes.
             * @param count
             * the number of bytes from {@code buffer} to write to this
             * stream.
             * @throws IOException
             * if an error occurs while writing to this stream.
             * @throws IndexOutOfBoundsException
             * if {@code offset < 0} or {@code count < 0}, or if
             * {@code offset + count} is bigger than the length of
             * {@code buffer}.
             */
            OutputStream.prototype.write = function (buffer, offset, count) {
                var _this = this;
                if (((buffer != null && buffer instanceof Array) || buffer === null) && ((typeof offset === 'number') || offset === null) && ((typeof count === 'number') || count === null)) {
                    return (function () {
                        java.io.IOUtils.checkOffsetAndCount(buffer, offset, count);
                        for (var i = offset; i < offset + count; i++) {
                            _this.write(buffer[i]);
                        }
                    })();
                }
                else if (((buffer != null && buffer instanceof Array) || buffer === null) && offset === undefined && count === undefined) {
                    return this.write$byte_A(buffer);
                }
                else if (((typeof buffer === 'number') || buffer === null) && offset === undefined && count === undefined) {
                    return this.write$int(buffer);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Writes a single byte to this stream. Only the least significant byte of
             * the integer {@code oneByte} is written to the stream.
             *
             * @param oneByte
             * the byte to be written.
             * @throws IOException
             * if an error occurs while writing to this stream.
             */
            OutputStream.prototype.write$int = function (oneByte) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); };
            return OutputStream;
        }());
        io.OutputStream = OutputStream;
    })(io = java.io || (java.io = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var io;
    (function (io) {
        /**
         * A specialized {@link OutputStream} for class for writing content to an
         * (internal) byte array. As bytes are written to this stream, the byte array
         * may be expanded to hold more bytes. When the writing is considered to be
         * finished, a copy of the byte array can be requested from the class.
         *
         * @see ByteArrayInputStream
         */
        var ByteArrayOutputStream = (function (_super) {
            __extends(ByteArrayOutputStream, _super);
            /**
             * Constructs a new {@code ByteArrayOutputStream} with a default size of
             * {@code size} bytes. If more than {@code size} bytes are written to this
             * instance, the underlying byte array will expand.
             *
             * @param size
             * initial size for the underlying byte array, must be
             * non-negative.
             * @throws IllegalArgumentException
             * if {@code size} < 0.
             */
            function ByteArrayOutputStream(size) {
                var _this = this;
                if (((typeof size === 'number') || size === null)) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Closeable", "java.lang.AutoCloseable", "java.io.Flushable"] });
                    this.count = 0;
                    (function () {
                        if (size >= 0) {
                            _this.buf = new Array(size);
                        }
                        else {
                            throw new java.lang.IllegalArgumentException("size < 0");
                        }
                    })();
                }
                else if (size === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Closeable", "java.lang.AutoCloseable", "java.io.Flushable"] });
                    this.count = 0;
                    (function () {
                        _this.buf = new Array(32);
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             * Closes this stream. This releases system resources used for this stream.
             *
             * @throws IOException
             * if an error occurs while attempting to close this stream.
             */
            ByteArrayOutputStream.prototype.close = function () {
                _super.prototype.close.call(this);
            };
            ByteArrayOutputStream.prototype.expand = function (i) {
                if (this.count + i <= this.buf.length) {
                    return;
                }
                var newbuf = new Array((this.count + i) * 2);
                java.lang.System.arraycopy(this.buf, 0, newbuf, 0, this.count);
                this.buf = newbuf;
            };
            /**
             * Resets this stream to the beginning of the underlying byte array. All
             * subsequent writes will overwrite any bytes previously stored in this
             * stream.
             */
            ByteArrayOutputStream.prototype.reset = function () {
                this.count = 0;
            };
            /**
             * Returns the total number of bytes written to this stream so far.
             *
             * @return the number of bytes written to this stream.
             */
            ByteArrayOutputStream.prototype.size = function () {
                return this.count;
            };
            /**
             * Returns the contents of this ByteArrayOutputStream as a byte array. Any
             * changes made to the receiver after returning will not be reflected in the
             * byte array returned to the caller.
             *
             * @return this stream's current contents as a byte array.
             */
            ByteArrayOutputStream.prototype.toByteArray = function () {
                var newArray = new Array(this.count);
                java.lang.System.arraycopy(this.buf, 0, newArray, 0, this.count);
                return newArray;
            };
            /**
             * Returns the contents of this ByteArrayOutputStream as a string. Any
             * changes made to the receiver after returning will not be reflected in the
             * string returned to the caller.
             *
             * @return this stream's current contents as a string.
             */
            ByteArrayOutputStream.prototype.toString$ = function () {
                return (function (str, index, len) { return str.substring(index, index + len); })((this.buf).map(function (s) { return String.fromCharCode(s); }).join(''), 0, this.count);
            };
            /**
             * Returns the contents of this ByteArrayOutputStream as a string. Each byte
             * {@code b} in this stream is converted to a character {@code c} using the
             * following function:
             * {@code c == (char)(((hibyte & 0xff) << 8) | (b & 0xff))}. This method is
             * deprecated and either {@link #toString()} or {@link #toString(String)}
             * should be used.
             *
             * @param hibyte
             * the high byte of each resulting Unicode character.
             * @return this stream's current contents as a string with the high byte set
             * to {@code hibyte}.
             * @deprecated Use {@link #toString()} instead.
             */
            ByteArrayOutputStream.prototype.toString$int = function (hibyte) {
                var newBuf = new Array(this.size());
                for (var i = 0; i < newBuf.length; i++) {
                    newBuf[i] = String.fromCharCode((((hibyte & 255) << 8) | (this.buf[i] & 255)));
                }
                return new String(newBuf);
            };
            /**
             * Returns the contents of this ByteArrayOutputStream as a string converted
             * according to the encoding declared in {@code charsetName}.
             *
             * @param charsetName
             * a string representing the encoding to use when translating
             * this stream to a string.
             * @return this stream's current contents as an encoded string.
             * @throws UnsupportedEncodingException
             * if the provided encoding is not supported.
             */
            ByteArrayOutputStream.prototype.toString = function (charsetName) {
                var _this = this;
                if (((typeof charsetName === 'string') || charsetName === null)) {
                    return (function () {
                        return (function (str, index, len) { return str.substring(index, index + len); })((_this.buf).map(function (s) { return String.fromCharCode(s); }).join(''), 0, _this.count);
                    })();
                }
                else if (((typeof charsetName === 'number') || charsetName === null)) {
                    return this.toString$int(charsetName);
                }
                else if (charsetName === undefined) {
                    return this.toString$();
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Writes {@code count} bytes from the byte array {@code buffer} starting at
             * offset {@code index} to this stream.
             *
             * @param buffer
             * the buffer to be written.
             * @param offset
             * the initial position in {@code buffer} to retrieve bytes.
             * @param len
             * the number of bytes of {@code buffer} to write.
             * @throws NullPointerException
             * if {@code buffer} is {@code null}.
             * @throws IndexOutOfBoundsException
             * if {@code offset < 0} or {@code len < 0}, or if
             * {@code offset + len} is greater than the length of
             * {@code buffer}.
             */
            ByteArrayOutputStream.prototype.write = function (buffer, offset, len) {
                var _this = this;
                if (((buffer != null && buffer instanceof Array) || buffer === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                    return (function () {
                        java.io.IOUtils.checkOffsetAndCount(buffer, offset, len);
                        if (len === 0) {
                            return;
                        }
                        _this.expand(len);
                        java.lang.System.arraycopy(buffer, offset, _this.buf, _this.count, len);
                        _this.count += len;
                    })();
                }
                else if (((buffer != null && buffer instanceof Array) || buffer === null) && offset === undefined && len === undefined) {
                    return this.write$byte_A(buffer);
                }
                else if (((typeof buffer === 'number') || buffer === null) && offset === undefined && len === undefined) {
                    return this.write$int(buffer);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Writes the specified byte {@code oneByte} to the OutputStream. Only the
             * low order byte of {@code oneByte} is written.
             *
             * @param oneByte
             * the byte to be written.
             */
            ByteArrayOutputStream.prototype.write$int = function (oneByte) {
                if (this.count === this.buf.length) {
                    this.expand(1);
                }
                this.buf[this.count++] = (oneByte | 0);
            };
            /**
             * Takes the contents of this stream and writes it to the output stream
             * {@code out}.
             *
             * @param out
             * an OutputStream on which to write the contents of this stream.
             * @throws IOException
             * if an error occurs while writing to {@code out}.
             */
            ByteArrayOutputStream.prototype.writeTo = function (out) {
                out.write(this.buf, 0, this.count);
            };
            return ByteArrayOutputStream;
        }(java.io.OutputStream));
        io.ByteArrayOutputStream = ByteArrayOutputStream;
    })(io = java.io || (java.io = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * See <a href="https://docs.oracle.com/javase/8/docs/api/java/util/OptionalInt.html">
         * the official Java API doc</a> for details.
         */
        var OptionalInt = (function () {
            function OptionalInt(value) {
                var _this = this;
                if (((typeof value === 'number') || value === null)) {
                    this.ref = 0;
                    this.present = false;
                    (function () {
                        _this.ref = value;
                        _this.present = true;
                    })();
                }
                else if (value === undefined) {
                    this.ref = 0;
                    this.present = false;
                    (function () {
                        _this.ref = 0;
                        _this.present = false;
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            OptionalInt.empty = function () {
                return OptionalInt.EMPTY_$LI$();
            };
            OptionalInt.of = function (value) {
                return new OptionalInt(value);
            };
            OptionalInt.EMPTY_$LI$ = function () { if (OptionalInt.EMPTY == null)
                OptionalInt.EMPTY = new OptionalInt(); return OptionalInt.EMPTY; };
            ;
            OptionalInt.prototype.isPresent = function () {
                return this.present;
            };
            OptionalInt.prototype.getAsInt = function () {
                javaemul.internal.InternalPreconditions.checkCriticalElement(this.present);
                return this.ref;
            };
            OptionalInt.prototype.ifPresent = function (consumer) {
                if (this.present) {
                    consumer(this.ref);
                }
            };
            OptionalInt.prototype.orElse = function (other) {
                return this.present ? this.ref : other;
            };
            OptionalInt.prototype.orElseGet = function (other) {
                return this.present ? this.ref : other();
            };
            OptionalInt.prototype.orElseThrow = function (exceptionSupplier) {
                if (this.present) {
                    return this.ref;
                }
                throw exceptionSupplier();
            };
            OptionalInt.prototype.equals = function (obj) {
                if (obj === this) {
                    return true;
                }
                if (!(obj != null && obj instanceof java.util.OptionalInt)) {
                    return false;
                }
                var other = obj;
                return this.present === other.present && javaemul.internal.IntegerHelper.compare(this.ref, other.ref) === 0;
            };
            OptionalInt.prototype.hashCode = function () {
                return this.present ? javaemul.internal.IntegerHelper.hashCode(this.ref) : 0;
            };
            OptionalInt.prototype.toString = function () {
                return this.present ? "OptionalInt.of(" + ('' + this.ref) + ")" : "OptionalInt.empty()";
            };
            return OptionalInt;
        }());
        util.OptionalInt = OptionalInt;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * Included for hosted mode source compatibility. Partially implemented
         *
         * @skip
         */
        var StackTraceElement = (function () {
            function StackTraceElement(className, methodName, fileName, lineNumber) {
                var _this = this;
                if (((typeof className === 'string') || className === null) && ((typeof methodName === 'string') || methodName === null) && ((typeof fileName === 'string') || fileName === null) && ((typeof lineNumber === 'number') || lineNumber === null)) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    this.lineNumber = 0;
                    (function () {
                        _this.className = className;
                        _this.methodName = methodName;
                        _this.fileName = fileName;
                        _this.lineNumber = lineNumber;
                    })();
                }
                else if (className === undefined && methodName === undefined && fileName === undefined && lineNumber === undefined) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    this.lineNumber = 0;
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            StackTraceElement.prototype.getClassName = function () {
                return this.className;
            };
            StackTraceElement.prototype.getFileName = function () {
                return this.fileName;
            };
            StackTraceElement.prototype.getLineNumber = function () {
                return this.lineNumber;
            };
            StackTraceElement.prototype.getMethodName = function () {
                return this.methodName;
            };
            StackTraceElement.prototype.equals = function (other) {
                if (other != null && other instanceof java.lang.StackTraceElement) {
                    var st = other;
                    return this.lineNumber === st.lineNumber && java.util.Objects.equals(this.methodName, st.methodName) && java.util.Objects.equals(this.className, st.className) && java.util.Objects.equals(this.fileName, st.fileName);
                }
                return false;
            };
            StackTraceElement.prototype.hashCode = function () {
                return java.util.Objects.hash(this.lineNumber, this.className, this.methodName, this.fileName);
            };
            StackTraceElement.prototype.toString = function () {
                return this.className + "." + this.methodName + "(" + (this.fileName != null ? this.fileName : "Unknown Source") + (this.lineNumber >= 0 ? ":" + this.lineNumber : "") + ")";
            };
            return StackTraceElement;
        }());
        lang.StackTraceElement = StackTraceElement;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        var InternalJsMap = (function () {
            function InternalJsMap() {
            }
            InternalJsMap.prototype.get$int = function (key) {
                return null;
            };
            InternalJsMap.prototype.get = function (key) {
                if (((typeof key === 'string') || key === null)) {
                    return (function () {
                        return null;
                    })();
                }
                else if (((typeof key === 'number') || key === null)) {
                    return this.get$int(key);
                }
                else
                    throw new Error('invalid overload');
            };
            InternalJsMap.prototype.set$int$java_lang_Object = function (key, value) {
            };
            InternalJsMap.prototype.set = function (key, value) {
                if (((typeof key === 'string') || key === null) && ((value != null) || value === null)) {
                    return (function () {
                    })();
                }
                else if (((typeof key === 'number') || key === null) && ((value != null) || value === null)) {
                    return this.set$int$java_lang_Object(key, value);
                }
                else
                    throw new Error('invalid overload');
            };
            InternalJsMap.prototype.delete$int = function (key) {
                InternalJsMap.JsHelper.delete(this, key);
            };
            InternalJsMap.prototype.delete = function (key) {
                var _this = this;
                if (((typeof key === 'string') || key === null)) {
                    return (function () {
                        InternalJsMap.JsHelper.delete(_this, key);
                    })();
                }
                else if (((typeof key === 'number') || key === null)) {
                    return this.delete$int(key);
                }
                else
                    throw new Error('invalid overload');
            };
            InternalJsMap.prototype.entries = function () {
                return null;
            };
            return InternalJsMap;
        }());
        util.InternalJsMap = InternalJsMap;
        var InternalJsMap;
        (function (InternalJsMap) {
            var Iterator = (function () {
                function Iterator() {
                }
                Iterator.prototype.next = function () {
                    return null;
                };
                return Iterator;
            }());
            InternalJsMap.Iterator = Iterator;
            var IteratorEntry = (function () {
                function IteratorEntry() {
                    this.done = false;
                }
                return IteratorEntry;
            }());
            InternalJsMap.IteratorEntry = IteratorEntry;
            var JsHelper = (function () {
                function JsHelper() {
                }
                JsHelper.delete$java_util_InternalJsMap$int = function (obj, key) {
                    obj["delete"](key);
                };
                JsHelper.delete = function (obj, key) {
                    if (((obj != null && obj instanceof java.util.InternalJsMap) || obj === null) && ((typeof key === 'string') || key === null)) {
                        return (function () {
                            obj["delete"](key);
                        })();
                    }
                    else if (((obj != null && obj instanceof java.util.InternalJsMap) || obj === null) && ((typeof key === 'number') || key === null)) {
                        return java.util.InternalJsMap.JsHelper.delete$java_util_InternalJsMap$int(obj, key);
                    }
                    else
                        throw new Error('invalid overload');
                };
                return JsHelper;
            }());
            InternalJsMap.JsHelper = JsHelper;
        })(InternalJsMap = util.InternalJsMap || (util.InternalJsMap = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var javaemul;
(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Contains logics for calculating hash codes in JavaScript.
         */
        var HashCodes = (function () {
            function HashCodes() {
            }
            HashCodes.hashCodeForString = function (s) {
                return javaemul.internal.StringHashCache.getHashCode(s);
            };
            HashCodes.getIdentityHashCode = function (o) {
                if (o == null) {
                    return 0;
                }
                return (typeof o === 'string') ? HashCodes.hashCodeForString(javaemul.internal.JsUtils.unsafeCastToString(o)) : HashCodes.getObjectIdentityHashCode(o);
            };
            HashCodes.getObjectIdentityHashCode = function (o) {
                if (o[HashCodes.HASH_CODE_PROPERTY] != null) {
                    return o[HashCodes.HASH_CODE_PROPERTY];
                }
                else {
                    return o[HashCodes.HASH_CODE_PROPERTY] = HashCodes.getNextHashId();
                }
            };
            /**
             * Called from JSNI. Do not change this implementation without updating:
             * <ul>
             * <li>{@link com.google.gwt.user.client.rpc.impl.SerializerBase}</li>
             * </ul>
             */
            HashCodes.getNextHashId = function () {
                return ++HashCodes.sNextHashId;
            };
            HashCodes.sNextHashId = 0;
            HashCodes.HASH_CODE_PROPERTY = "$H";
            return HashCodes;
        }());
        internal.HashCodes = HashCodes;
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * See <a href="https://docs.oracle.com/javase/8/docs/api/java/util/OptionalLong.html">
         * the official Java API doc</a> for details.
         */
        var OptionalLong = (function () {
            function OptionalLong(value) {
                var _this = this;
                if (((typeof value === 'number') || value === null)) {
                    this.ref = 0;
                    this.present = false;
                    (function () {
                        _this.ref = value;
                        _this.present = true;
                    })();
                }
                else if (value === undefined) {
                    this.ref = 0;
                    this.present = false;
                    (function () {
                        _this.ref = 0;
                        _this.present = false;
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            OptionalLong.empty = function () {
                return OptionalLong.EMPTY_$LI$();
            };
            OptionalLong.of = function (value) {
                return new OptionalLong(value);
            };
            OptionalLong.EMPTY_$LI$ = function () { if (OptionalLong.EMPTY == null)
                OptionalLong.EMPTY = new OptionalLong(); return OptionalLong.EMPTY; };
            ;
            OptionalLong.prototype.isPresent = function () {
                return this.present;
            };
            OptionalLong.prototype.getAsLong = function () {
                javaemul.internal.InternalPreconditions.checkCriticalElement(this.present);
                return this.ref;
            };
            OptionalLong.prototype.ifPresent = function (consumer) {
                if (this.present) {
                    consumer(this.ref);
                }
            };
            OptionalLong.prototype.orElse = function (other) {
                return this.present ? this.ref : other;
            };
            OptionalLong.prototype.orElseGet = function (other) {
                return this.present ? this.ref : other();
            };
            OptionalLong.prototype.orElseThrow = function (exceptionSupplier) {
                if (this.present) {
                    return this.ref;
                }
                throw exceptionSupplier();
            };
            OptionalLong.prototype.equals = function (obj) {
                if (obj === this) {
                    return true;
                }
                if (!(obj != null && obj instanceof java.util.OptionalLong)) {
                    return false;
                }
                var other = obj;
                return this.present === other.present && javaemul.internal.LongHelper.compare(this.ref, other.ref) === 0;
            };
            OptionalLong.prototype.hashCode = function () {
                return this.present ? javaemul.internal.LongHelper.hashCode(this.ref) : 0;
            };
            OptionalLong.prototype.toString = function () {
                return this.present ? "OptionalLong.of(" + ('' + this.ref) + ")" : "OptionalLong.empty()";
            };
            return OptionalLong;
        }());
        util.OptionalLong = OptionalLong;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var beans;
    (function (beans) {
        /**
         * General-purpose beans control methods. GWT only supports a limited subset of these methods. Only
         * the documented methods are available.
         */
        var Beans = (function () {
            function Beans() {
            }
            /**
             * @return <code>true</code> if we are running in the design time mode.
             */
            Beans.isDesignTime = function () {
                return false;
            };
            return Beans;
        }());
        beans.Beans = Beans;
    })(beans = java.beans || (java.beans = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var javaemul;
(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Private implementation class for GWT. This API should not be
         * considered public or stable.
         */
        var Coercions = (function () {
            function Coercions() {
            }
            /**
             * Coerce js int to 32 bits.
             * Trick related to JS and lack of integer rollover.
             * {@see com.google.gwt.lang.Cast#narrow_int}
             */
            Coercions.ensureInt = function (value) {
                return value | 0;
            };
            return Coercions;
        }());
        internal.Coercions = Coercions;
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var test;
(function (test) {
    var Test = (function () {
        function Test() {
        }
        Test.assertEquals = function (o1, o2) {
            if (!(o1 === o2)) {
                throw new Error("invalid assertion: " + o1 + "!=" + o2);
            }
        };
        Test.assertTrue = function (b) {
            if (!b) {
                throw new Error("invalid assertion");
            }
        };
        Test.assertFalse = function (b) {
            if (b) {
                throw new Error("invalid assertion");
            }
        };
        Test.test = function () {
            try {
                Test.testList();
                Test.testMap();
                Test.testSet();
                Test.testString();
                Test.testIO();
                var result = document.getElementById("result");
                if (result != null) {
                    result.innerHTML = "Success!";
                }
            }
            catch (e) {
                var result = document.getElementById("result");
                if (result != null) {
                    result.innerHTML = "Failure: " + e.message;
                }
            }
            ;
        };
        Test.testList = function () {
            console.info("testing lists");
            var l = new java.util.ArrayList();
            l.add("a");
            l.add("b");
            l.add("c");
            Test.assertEquals(l.toString(), "[a, b, c]");
            Test.assertEquals(l.subList(1, 3).toString(), "[b, c]");
            Test.assertEquals(l.remove("b"), true);
            Test.assertEquals(l.remove("d"), false);
            Test.assertEquals(l.remove(1), "c");
            l.add("c");
            Test.assertEquals(l.toString(), "[a, c]");
            Test.assertEquals(l.size(), 2);
            Test.assertEquals(l.get(1), "c");
            Test.assertEquals(l.indexOf("a"), 0);
            var res = "";
            for (var index121 = l.iterator(); index121.hasNext();) {
                var s = index121.next();
                {
                    res += s;
                }
            }
            Test.assertEquals("ac", res);
            var it = l.iterator();
            Test.assertTrue(it.hasNext());
            Test.assertEquals("a", it.next());
            Test.assertTrue(it.hasNext());
            Test.assertEquals("c", it.next());
            Test.assertFalse(it.hasNext());
            console.info("end testing lists");
        };
        Test.testSet = function () {
            console.info("testing sets");
            var s = new java.util.HashSet();
            s.add("a");
            s.add("a");
            s.add("b");
            s.add("c");
            s.add("c");
            Test.assertEquals(s.toString(), "[a, b, c]");
            s.remove("b");
            Test.assertTrue(s.contains("a"));
            Test.assertTrue(s.contains("c"));
            Test.assertFalse(s.contains("b"));
            Test.assertEquals(s.size(), 2);
            console.info("end testing sets");
        };
        Test.testMap = function () {
            console.info("testing maps");
            var m = new java.util.HashMap();
            m.put("a", "aa");
            m.put("b", "bb");
            m.put("c", "cc");
            Test.assertEquals(m.size(), 3);
            Test.assertEquals("bb", m.get("b"));
            m.remove("aa");
            Test.assertEquals(m.size(), 3);
            m.remove("a");
            Test.assertEquals(m.size(), 2);
            console.info("end testing maps");
        };
        Test.testString = function () {
            console.info("testing strings");
            var sb = new java.lang.StringBuilder();
            sb.append(true);
            sb.append('c');
            sb.append("test");
            sb.deleteCharAt(sb.length() - 1);
            Test.assertEquals("truectes", sb.toString());
            sb.append("abc", 0, 1);
            Test.assertEquals("truectesa", sb.toString());
            var sb2 = new java.lang.StringBuffer();
            sb2.append(true);
            sb2.append('c');
            sb2.append("test");
            sb2.deleteCharAt(sb2.length() - 1);
            Test.assertEquals("truectes", sb2.toString());
            console.info("end testing strings");
        };
        Test.testIO = function () {
            console.info("testing io");
            var s = new java.io.ByteArrayInputStream(/* getBytes */ ("abc").split('').map(function (s) { return s.charCodeAt(0); }));
            Test.assertEquals(javaemul.internal.CharacterHelper.getNumericValue('a'), s.read());
            console.info("end testing io");
        };
        return Test;
    }());
    test.Test = Test;
})(test || (test = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var javaemul;
(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Simple Helper class to return Date.now.
         */
        var DateUtil = (function () {
            function DateUtil() {
            }
            /**
             * Returns the numeric value corresponding to the current time -
             * the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
             */
            DateUtil.now = function () {
                // IE8 does not have Date.now
                // when removing IE8 support we change this to Date.now()
                if (Date.now) {
                    // Date.now vs Date.getTime() performance comparison:
                    // http://jsperf.com/date-now-vs-new-date/8
                    return Date.now();
                }
                return (new Date()).getTime();
            };
            return DateUtil;
        }());
        internal.DateUtil = DateUtil;
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        var logging;
        (function (logging) {
            /**
             * An emulation of the java.util.logging.Formatter class. See
             * <a href="http://java.sun.com/j2se/1.4.2/docs/api/java/util/logging/Formatter.html">
             * The Java API doc for details</a>
             */
            var Formatter = (function () {
                function Formatter() {
                }
                Formatter.prototype.formatMessage = function (record) {
                    return this.format(record);
                };
                return Formatter;
            }());
            logging.Formatter = Formatter;
        })(logging = util.logging || (util.logging = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * For JRE compatibility.
         */
        var Void = (function () {
            /**
             * Not instantiable.
             */
            function Void() {
            }
            return Void;
        }());
        lang.Void = Void;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * Represents an error caused by an assertion failure.
         */
        var AssertionError = (function (_super) {
            __extends(AssertionError, _super);
            function AssertionError(message, cause) {
                if (((typeof message === 'string') || message === null) && ((cause != null && cause instanceof Error) || cause === null)) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((typeof message === 'string') || message === null) && cause === undefined) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((typeof message === 'boolean') || message === null) && cause === undefined) {
                    {
                        var message = new String(message).toString();
                        _super.call(this, /* valueOf */ new String(message).toString());
                        this.message = new String(message).toString();
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                        (function () {
                        })();
                    }
                    (function () {
                    })();
                }
                else if (((typeof message === 'string') || message === null) && cause === undefined) {
                    {
                        var message = new String(message).toString();
                        _super.call(this, /* valueOf */ new String(message).toString());
                        this.message = new String(message).toString();
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                        (function () {
                        })();
                    }
                    (function () {
                    })();
                }
                else if (((typeof message === 'number') || message === null) && cause === undefined) {
                    {
                        var message = new String(message).toString();
                        _super.call(this, /* valueOf */ new String(message).toString());
                        this.message = new String(message).toString();
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                        (function () {
                        })();
                    }
                    (function () {
                    })();
                }
                else if (((typeof message === 'number') || message === null) && cause === undefined) {
                    {
                        var message = new String(message).toString();
                        _super.call(this, /* valueOf */ new String(message).toString());
                        this.message = new String(message).toString();
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                        (function () {
                        })();
                    }
                    (function () {
                    })();
                }
                else if (((typeof message === 'number') || message === null) && cause === undefined) {
                    {
                        var message = new String(message).toString();
                        _super.call(this, /* valueOf */ new String(message).toString());
                        this.message = new String(message).toString();
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                        (function () {
                        })();
                    }
                    (function () {
                    })();
                }
                else if (((typeof message === 'number') || message === null) && cause === undefined) {
                    {
                        var message = new String(message).toString();
                        _super.call(this, /* valueOf */ new String(message).toString());
                        this.message = new String(message).toString();
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                        (function () {
                        })();
                    }
                    (function () {
                    })();
                }
                else if (((message != null) || message === null) && cause === undefined) {
                    _super.call(this, /* valueOf */ new String(message).toString());
                    this.message = new String(message).toString();
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (message === undefined && cause === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return AssertionError;
        }(Error));
        lang.AssertionError = AssertionError;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var javaemul;
(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * A utility to provide array stamping. Provided as a separate class to simplify
         * super-source.
         */
        var ArrayStamper = (function () {
            function ArrayStamper() {
            }
            ArrayStamper.stampJavaTypeInfo = function (array, referenceType) {
                return array;
            };
            return ArrayStamper;
        }());
        internal.ArrayStamper = ArrayStamper;
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        var logging;
        (function (logging) {
            /**
             * An emulation of the java.util.logging.LogManager class. See
             * <a href="http://java.sun.com/j2se/1.4.2/docs/api/java/util/logging/LogManger.html">
             * The Java API doc for details</a>
             */
            var LogManager = (function () {
                function LogManager() {
                    this.loggerMap = new java.util.HashMap();
                }
                LogManager.getLogManager = function () {
                    if (LogManager.singleton == null) {
                        LogManager.singleton = new LogManager();
                        var rootLogger = new java.util.logging.Logger("", null);
                        rootLogger.setLevel(java.util.logging.Level.INFO_$LI$());
                        LogManager.singleton.addLoggerImpl(rootLogger);
                    }
                    return LogManager.singleton;
                };
                LogManager.prototype.addLogger = function (logger) {
                    if (this.getLogger(logger.getName()) != null) {
                        return false;
                    }
                    this.addLoggerAndEnsureParents(logger);
                    return true;
                };
                LogManager.prototype.getLogger = function (name) {
                    return this.loggerMap.get(name);
                };
                LogManager.prototype.getLoggerNames = function () {
                    return java.util.Collections.enumeration(this.loggerMap.keySet());
                };
                /**
                 * Helper function to add a logger when we have already determined that it
                 * does not exist.  When we add a logger, we recursively add all of it's
                 * ancestors. Since loggers do not get removed, logger creation is cheap,
                 * and there are not usually too many loggers in an ancestry chain,
                 * this is a simple way to ensure that the parent/child relationships are
                 * always correctly set up.
                 */
                LogManager.prototype.addLoggerAndEnsureParents = function (logger) {
                    var name = logger.getName();
                    var parentName = name.substring(0, Math.max(0, name.lastIndexOf('.')));
                    logger.setParent(this.ensureLogger(parentName));
                    this.addLoggerImpl(logger);
                };
                LogManager.prototype.addLoggerImpl = function (logger) {
                    if ((java.lang.System.getProperty("gwt.logging.simpleConsoleHandler", "ENABLED") === "ENABLED")) {
                        if ((logger.getName().length === 0)) {
                            logger.addHandler(new java.util.logging.SimpleConsoleLogHandler());
                        }
                    }
                    this.loggerMap.put(logger.getName(), logger);
                };
                /**
                 * Helper function to create a logger if it does not exist since the public
                 * APIs for getLogger and addLogger make it difficult to use those functions
                 * for this.
                 */
                LogManager.prototype.ensureLogger = function (name) {
                    var logger = this.getLogger(name);
                    if (logger == null) {
                        var newLogger = new java.util.logging.Logger(name, null);
                        this.addLoggerAndEnsureParents(newLogger);
                        return newLogger;
                    }
                    return logger;
                };
                return LogManager;
            }());
            logging.LogManager = LogManager;
        })(logging = util.logging || (util.logging = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Represents a date and time.
         */
        var Date = (function () {
            function Date(year, month, date, hrs, min, sec) {
                var _this = this;
                if (((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && ((typeof date === 'number') || date === null) && ((typeof hrs === 'number') || hrs === null) && ((typeof min === 'number') || min === null) && ((typeof sec === 'number') || sec === null)) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.lang.Comparable", "java.io.Serializable"] });
                    (function () {
                        _this.jsdate = new (Date.jsdateClass())();
                        _this.jsdate["setFullYear"](_this.jsdate, year + 1900, month, date);
                        _this.jsdate["setHours"](_this.jsdate, hrs, min, sec, 0);
                        _this.fixDaylightSavings(hrs);
                    })();
                }
                else if (((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && ((typeof date === 'number') || date === null) && ((typeof hrs === 'number') || hrs === null) && ((typeof min === 'number') || min === null) && sec === undefined) {
                    {
                        var sec = 0;
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.lang.Comparable", "java.io.Serializable"] });
                        (function () {
                            _this.jsdate = new (Date.jsdateClass())();
                            _this.jsdate["setFullYear"](_this.jsdate, year + 1900, month, date);
                            _this.jsdate["setHours"](_this.jsdate, hrs, min, sec, 0);
                            _this.fixDaylightSavings(hrs);
                        })();
                    }
                    (function () {
                    })();
                }
                else if (((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && ((typeof date === 'number') || date === null) && hrs === undefined && min === undefined && sec === undefined) {
                    {
                        var hrs = 0;
                        var min = 0;
                        var sec = 0;
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.lang.Comparable", "java.io.Serializable"] });
                        (function () {
                            _this.jsdate = new (Date.jsdateClass())();
                            _this.jsdate["setFullYear"](_this.jsdate, year + 1900, month, date);
                            _this.jsdate["setHours"](_this.jsdate, hrs, min, sec, 0);
                            _this.fixDaylightSavings(hrs);
                        })();
                    }
                    (function () {
                    })();
                }
                else if (((typeof year === 'string') || year === null) && month === undefined && date === undefined && hrs === undefined && min === undefined && sec === undefined) {
                    var date = year;
                    {
                        var date = Date.parse(date);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.lang.Comparable", "java.io.Serializable"] });
                        (function () {
                            _this.jsdate = new Date(date);
                        })();
                    }
                    (function () {
                    })();
                }
                else if (((typeof year === 'number') || year === null) && month === undefined && date === undefined && hrs === undefined && min === undefined && sec === undefined) {
                    var date = year;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.lang.Comparable", "java.io.Serializable"] });
                    (function () {
                        _this.jsdate = new Date(date);
                    })();
                }
                else if (year === undefined && month === undefined && date === undefined && hrs === undefined && min === undefined && sec === undefined) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.lang.Comparable", "java.io.Serializable"] });
                    (function () {
                        _this.jsdate = new (Date.jsdateClass())();
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            Date.parse = function (s) {
                var parsed = Date.jsdateClass()["parse"](s);
                if ((Number.NaN === parsed)) {
                    throw new java.lang.IllegalArgumentException();
                }
                return Math.round(parsed);
            };
            Date.UTC = function (year, month, date, hrs, min, sec) {
                return Math.round(Date.jsdateClass()["UTC"](year + 1900, month, date, hrs, min, sec, 0));
            };
            /**
             * Ensure a number is displayed with two digits.
             *
             * @return a two-character base 10 representation of the number
             */
            Date.padTwo = function (number) {
                if (number < 10) {
                    return "0" + number;
                }
                else {
                    return new String(number).toString();
                }
            };
            Date.jsdateClass = function () {
                return window["Date"];
            };
            Date.prototype.after = function (ts) {
                if (((ts != null && ts instanceof java.util.Date) || ts === null)) {
                    return this.after$java_util_Date(ts);
                }
                else
                    throw new Error('invalid overload');
            };
            Date.prototype.after$java_util_Date = function (when) {
                return this.getTime() > when.getTime();
            };
            Date.prototype.before = function (ts) {
                if (((ts != null && ts instanceof java.util.Date) || ts === null)) {
                    return this.before$java_util_Date(ts);
                }
                else
                    throw new Error('invalid overload');
            };
            Date.prototype.before$java_util_Date = function (when) {
                return this.getTime() < when.getTime();
            };
            Date.prototype.clone = function () {
                return new Date(this.getTime());
            };
            Date.prototype.compareTo = function (o) {
                if (((o != null && o instanceof java.util.Date) || o === null)) {
                    return this.compareTo$java_util_Date(o);
                }
                else
                    throw new Error('invalid overload');
            };
            Date.prototype.compareTo$java_util_Date = function (other) {
                return javaemul.internal.LongHelper.compare(this.getTime(), other.getTime());
            };
            Date.prototype.equals = function (ts) {
                if (((ts != null) || ts === null)) {
                    return this.equals$java_lang_Object(ts);
                }
                else
                    throw new Error('invalid overload');
            };
            Date.prototype.equals$java_lang_Object = function (obj) {
                return ((obj != null && obj instanceof java.util.Date) && (this.getTime() === obj.getTime()));
            };
            Date.prototype.getDate = function () {
                return (this.jsdate["getDate"](this.jsdate) | 0);
            };
            Date.prototype.getDay = function () {
                return (this.jsdate["getDay"](this.jsdate) | 0);
            };
            Date.prototype.getHours = function () {
                return (this.jsdate["getHours"](this.jsdate) | 0);
            };
            Date.prototype.getMinutes = function () {
                return (this.jsdate["getMinutes"](this.jsdate) | 0);
            };
            Date.prototype.getMonth = function () {
                return (this.jsdate["getMonth"](this.jsdate) | 0);
            };
            Date.prototype.getSeconds = function () {
                return (this.jsdate["getSeconds"](this.jsdate) | 0);
            };
            Date.prototype.getTime = function () {
                return Math.round(this.jsdate["getTime"](this.jsdate));
            };
            Date.prototype.getTimezoneOffset = function () {
                return (this.jsdate["getTimezoneOffset"](this.jsdate) | 0);
            };
            Date.prototype.getYear = function () {
                return (this.jsdate["getFullYear"](this.jsdate) | 0) - 1900;
            };
            Date.prototype.hashCode = function () {
                var time = this.getTime();
                return ((time ^ (time >>> 32)) | 0);
            };
            Date.prototype.setDate = function (date) {
                var hours = this.getHours();
                this.jsdate["setDate"](this.jsdate, date);
                this.fixDaylightSavings(hours);
            };
            Date.prototype.setHours = function (hours) {
                this.jsdate["setHours"](this.jsdate, hours);
                this.fixDaylightSavings(hours);
            };
            Date.prototype.setMinutes = function (minutes) {
                var hours = this.getHours() + (minutes / 60 | 0);
                this.jsdate["setMinutes"](this.jsdate, minutes);
                this.fixDaylightSavings(hours);
            };
            Date.prototype.setMonth = function (month) {
                var hours = this.getHours();
                this.jsdate["setMonth"](this.jsdate, month);
                this.fixDaylightSavings(hours);
            };
            Date.prototype.setSeconds = function (seconds) {
                var hours = this.getHours() + (seconds / (60 * 60) | 0);
                this.jsdate["setSeconds"](this.jsdate, seconds);
                this.fixDaylightSavings(hours);
            };
            Date.prototype.setTime = function (time) {
                this.jsdate["setTime"](this.jsdate, time);
            };
            Date.prototype.setYear = function (year) {
                var hours = this.getHours();
                this.jsdate["setFullYear"](this.jsdate, year + 1900);
                this.fixDaylightSavings(hours);
            };
            Date.prototype.toGMTString = function () {
                return this.jsdate["getUTCDate"](this.jsdate) + " " + Date.StringData.MONTHS_$LI$()[(this.jsdate["getUTCMonth"](this.jsdate) | 0)] + " " + this.jsdate["getUTCFullYear"](this.jsdate) + " " + Date.padTwo((this.jsdate["getUTCHours"](this.jsdate) | 0)) + ":" + Date.padTwo((this.jsdate["getUTCMinutes"](this.jsdate) | 0)) + ":" + Date.padTwo((this.jsdate["getUTCSeconds"](this.jsdate) | 0)) + " GMT";
            };
            Date.prototype.toLocaleString = function () {
                return this.jsdate.toLocaleString();
            };
            Date.prototype.toString = function () {
                var offset = -(this.getTimezoneOffset() | 0);
                var hourOffset = ((offset >= 0) ? "+" : "") + ((offset / 60 | 0));
                var minuteOffset = Date.padTwo(Math.abs(offset) % 60);
                return Date.StringData.DAYS_$LI$()[(this.getDay() | 0)] + " " + Date.StringData.MONTHS_$LI$()[(this.getMonth() | 0)] + " " + Date.padTwo((this.getDate() | 0)) + " " + Date.padTwo((this.getHours() | 0)) + ":" + Date.padTwo((this.getMinutes() | 0)) + ":" + Date.padTwo((this.getSeconds() | 0)) + " GMT" + hourOffset + minuteOffset + " " + this.jsdate["getFullYear"](this.jsdate);
            };
            Date.ONE_HOUR_IN_MILLISECONDS_$LI$ = function () { if (Date.ONE_HOUR_IN_MILLISECONDS == null)
                Date.ONE_HOUR_IN_MILLISECONDS = 60 * 60 * 1000; return Date.ONE_HOUR_IN_MILLISECONDS; };
            ;
            /**
             * Detects if the requested time falls into a non-existent time range due to
             * local time advancing into daylight savings time or is ambiguous due to
             * going out of daylight savings. If so, adjust accordingly.
             */
            Date.prototype.fixDaylightSavings = function (requestedHours) {
                requestedHours %= 24;
                if (this.getHours() !== requestedHours) {
                    var copy = new (Date.jsdateClass())(this.getTime());
                    copy["setDate"](((copy["getDate"](copy) | 0) + 1));
                    var timeDiff = (this.jsdate["getTimezoneOffset"](this.jsdate) | 0) - (copy["getTimezoneOffset"](copy) | 0);
                    if (timeDiff > 0) {
                        var timeDiffHours = (timeDiff / 60 | 0);
                        var timeDiffMinutes = timeDiff % 60;
                        var day = (this.getDate() | 0);
                        var badHours = (this.getHours() | 0);
                        if (badHours + timeDiffHours >= 24) {
                            day++;
                        }
                        var newTime = new (Date.jsdateClass())((this.jsdate["getFullYear"](this.jsdate) | 0), this.getMonth(), day, requestedHours + timeDiffHours, this.getMinutes() + timeDiffMinutes, this.getSeconds(), Math.round(this.jsdate["getMilliseconds"](this.jsdate)));
                        this.setTime(newTime["getMilliseconds"](newTime));
                    }
                }
                var originalTimeInMillis = this.getTime();
                this.setTime(originalTimeInMillis + Date.ONE_HOUR_IN_MILLISECONDS_$LI$());
                if (this.getHours() !== requestedHours) {
                    this.setTime(originalTimeInMillis);
                }
            };
            return Date;
        }());
        util.Date = Date;
        var Date;
        (function (Date) {
            /**
             * Encapsulates static data to avoid Date itself having a static
             * initializer.
             */
            var StringData = (function () {
                function StringData() {
                }
                StringData.DAYS_$LI$ = function () { if (StringData.DAYS == null)
                    StringData.DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; return StringData.DAYS; };
                ;
                StringData.MONTHS_$LI$ = function () { if (StringData.MONTHS == null)
                    StringData.MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; return StringData.MONTHS; };
                ;
                return StringData;
            }());
            Date.StringData = StringData;
        })(Date = util.Date || (util.Date = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * The first-class representation of an enumeration.
         *
         * @param <E>
         */
        var Enum = (function () {
            function Enum(name, ordinal) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable", "java.io.Serializable"] });
                this.__ordinal = 0;
                this.__name = name;
                this.__ordinal = ordinal;
            }
            Enum.valueOf = function (enumType, name) {
                if (((enumType != null && enumType instanceof java.lang.Class) || enumType === null) && ((typeof name === 'string') || name === null)) {
                    return (function () {
                        var enumValueOfFunc = javaemul.internal.InternalPreconditions.checkNotNull(enumType).enumValueOfFunc;
                        javaemul.internal.InternalPreconditions.checkCriticalArgument(enumValueOfFunc != null);
                        javaemul.internal.InternalPreconditions.checkNotNull(name);
                        return Enum.invokeValueOf(enumValueOfFunc, name);
                    })();
                }
                else if (((enumType != null && enumType instanceof Object) || enumType === null) && ((typeof name === 'string') || name === null)) {
                    return java.lang.Enum.valueOf$jsweet_lang_Object$java_lang_String(enumType, name);
                }
                else
                    throw new Error('invalid overload');
            };
            Enum.createValueOfMap = function (enumConstants) {
                var result = new Object();
                for (var index122 = 0; index122 < enumConstants.length; index122++) {
                    var value = enumConstants[index122];
                    {
                        Enum.put0(result, ":" + value.name(), value);
                    }
                }
                return result;
            };
            Enum.valueOf$jsweet_lang_Object$java_lang_String = function (map, name) {
                javaemul.internal.InternalPreconditions.checkNotNull(name);
                var result = java.lang.Enum.get0(map, ":" + name);
                javaemul.internal.InternalPreconditions.checkCriticalArgument(result != null, "Enum constant undefined: %s", name);
                return result;
            };
            Enum.get0 = function (map, name) {
                return map[name];
            };
            Enum.invokeValueOf = function (enumValueOfFunc, name) {
                return enumValueOfFunc(name);
            };
            Enum.put0 = function (map, name, value) {
                map[name] = value;
            };
            Enum.prototype.compareTo = function (other) {
                var _this = this;
                if (((other != null) || other === null)) {
                    return (function () {
                        return _this.__ordinal - other.__ordinal;
                    })();
                }
                else
                    throw new Error('invalid overload');
            };
            Enum.prototype.getDeclaringClass = function () {
                return null;
            };
            Enum.prototype.name = function () {
                return this.__name != null ? this.__name : "" + this.__ordinal;
            };
            Enum.prototype.ordinal = function () {
                return this.__ordinal;
            };
            Enum.prototype.toString = function () {
                return this.name();
            };
            return Enum;
        }());
        lang.Enum = Enum;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * See <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html">
         * the official Java API doc</a> for details.
         *
         * @param <T> type of the wrapped reference
         */
        var Optional = (function () {
            function Optional(ref) {
                var _this = this;
                if (((ref != null) || ref === null)) {
                    (function () {
                        _this.ref = javaemul.internal.InternalPreconditions.checkCriticalNotNull(ref);
                    })();
                }
                else if (ref === undefined) {
                    (function () {
                        _this.ref = null;
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            Optional.empty = function () {
                return Optional.EMPTY_$LI$();
            };
            Optional.of = function (value) {
                return new Optional(value);
            };
            Optional.ofNullable = function (value) {
                return value == null ? Optional.empty() : Optional.of(value);
            };
            Optional.EMPTY_$LI$ = function () { if (Optional.EMPTY == null)
                Optional.EMPTY = new Optional(); return Optional.EMPTY; };
            ;
            Optional.prototype.isPresent = function () {
                return this.ref != null;
            };
            Optional.prototype.get = function () {
                javaemul.internal.InternalPreconditions.checkCriticalElement(this.isPresent());
                return this.ref;
            };
            Optional.prototype.ifPresent = function (consumer) {
                if (this.isPresent()) {
                    consumer(this.ref);
                }
            };
            Optional.prototype.filter = function (predicate) {
                javaemul.internal.InternalPreconditions.checkCriticalNotNull(predicate);
                if (!this.isPresent() || predicate(this.ref)) {
                    return this;
                }
                return Optional.empty();
            };
            Optional.prototype.map = function (mapper) {
                javaemul.internal.InternalPreconditions.checkCriticalNotNull(mapper);
                if (this.isPresent()) {
                    return Optional.ofNullable(mapper(this.ref));
                }
                return Optional.empty();
            };
            Optional.prototype.flatMap = function (mapper) {
                javaemul.internal.InternalPreconditions.checkCriticalNotNull(mapper);
                if (this.isPresent()) {
                    return javaemul.internal.InternalPreconditions.checkCriticalNotNull(mapper(this.ref));
                }
                return Optional.empty();
            };
            Optional.prototype.orElse = function (other) {
                return this.isPresent() ? this.ref : other;
            };
            Optional.prototype.orElseGet = function (other) {
                return this.isPresent() ? this.ref : other();
            };
            Optional.prototype.orElseThrow = function (exceptionSupplier) {
                if (this.isPresent()) {
                    return this.ref;
                }
                throw exceptionSupplier();
            };
            Optional.prototype.equals = function (obj) {
                if (obj === this) {
                    return true;
                }
                if (!(obj != null && obj instanceof java.util.Optional)) {
                    return false;
                }
                var other = obj;
                return java.util.Objects.equals(this.ref, other.ref);
            };
            Optional.prototype.hashCode = function () {
                return java.util.Objects.hashCode(this.ref);
            };
            Optional.prototype.toString = function () {
                return this.isPresent() ? "Optional.of(" + new String(this.ref).toString() + ")" : "Optional.empty()";
            };
            return Optional;
        }());
        util.Optional = Optional;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var javaemul;
(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Hashcode caching for strings.
         */
        var StringHashCache = (function () {
            function StringHashCache() {
            }
            StringHashCache.back_$LI$ = function () { if (StringHashCache.back == null)
                StringHashCache.back = StringHashCache.createNativeObject(); return StringHashCache.back; };
            ;
            StringHashCache.front_$LI$ = function () { if (StringHashCache.front == null)
                StringHashCache.front = StringHashCache.createNativeObject(); return StringHashCache.front; };
            ;
            StringHashCache.getHashCode = function (str) {
                var key = ":" + str;
                var result = StringHashCache.getProperty(StringHashCache.front_$LI$(), key);
                if (!javaemul.internal.JsUtils.isUndefined(result)) {
                    return StringHashCache.unsafeCastToInt(result);
                }
                result = StringHashCache.getProperty(StringHashCache.back_$LI$(), key);
                var hashCode = javaemul.internal.JsUtils.isUndefined(result) ? StringHashCache.compute(str) : StringHashCache.unsafeCastToInt(result);
                StringHashCache.increment();
                javaemul.internal.JsUtils.setIntProperty(StringHashCache.front_$LI$(), key, hashCode);
                return hashCode;
            };
            StringHashCache.compute = function (str) {
                var hashCode = 0;
                var n = str.length;
                var nBatch = n - 4;
                var i = 0;
                while ((i < nBatch)) {
                    hashCode = (str.charAt(i + 3)).charCodeAt(0) + 31 * ((str.charAt(i + 2)).charCodeAt(0) + 31 * ((str.charAt(i + 1)).charCodeAt(0) + 31 * ((str.charAt(i)).charCodeAt(0) + 31 * hashCode)));
                    hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                    i += 4;
                }
                ;
                while ((i < n)) {
                    hashCode = hashCode * 31 + (str.charAt(i++)).charCodeAt(0);
                }
                ;
                hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                return hashCode;
            };
            StringHashCache.increment = function () {
                if (StringHashCache.count === StringHashCache.MAX_CACHE) {
                    StringHashCache.back = StringHashCache.front;
                    StringHashCache.front = StringHashCache.createNativeObject();
                    StringHashCache.count = 0;
                }
                ++StringHashCache.count;
            };
            StringHashCache.getProperty = function (map, key) {
                return map[key];
            };
            StringHashCache.createNativeObject = function () {
                return {};
            };
            StringHashCache.unsafeCastToInt = function (o) {
                return o;
            };
            /**
             * Tracks the number of entries in front.
             */
            StringHashCache.count = 0;
            /**
             * Pulled this number out of thin air.
             */
            StringHashCache.MAX_CACHE = 256;
            return StringHashCache;
        }());
        internal.StringHashCache = StringHashCache;
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var nio;
    (function (nio) {
        var charset;
        (function (charset) {
            /**
             * A minimal emulation of {@link Charset}.
             */
            var Charset = (function () {
                function Charset(name, aliasesIgnored) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable"] });
                    this.__name = name;
                }
                Charset.availableCharsets = function () {
                    if (Charset.AvailableCharsets.CHARSETS == null) {
                        var map = new java.util.TreeMap();
                        map.put(javaemul.internal.EmulatedCharset.ISO_8859_1_$LI$().name(), javaemul.internal.EmulatedCharset.ISO_8859_1_$LI$());
                        map.put(javaemul.internal.EmulatedCharset.ISO_LATIN_1_$LI$().name(), javaemul.internal.EmulatedCharset.ISO_LATIN_1_$LI$());
                        map.put(javaemul.internal.EmulatedCharset.UTF_8_$LI$().name(), javaemul.internal.EmulatedCharset.UTF_8_$LI$());
                        Charset.AvailableCharsets.CHARSETS = java.util.Collections.unmodifiableSortedMap(map);
                    }
                    return Charset.AvailableCharsets.CHARSETS;
                };
                Charset.forName = function (charsetName) {
                    javaemul.internal.InternalPreconditions.checkArgument(charsetName != null, "Null charset name");
                    charsetName = charsetName.toUpperCase();
                    if ((javaemul.internal.EmulatedCharset.ISO_8859_1_$LI$().name() === charsetName)) {
                        return javaemul.internal.EmulatedCharset.ISO_8859_1_$LI$();
                    }
                    else if ((javaemul.internal.EmulatedCharset.ISO_LATIN_1_$LI$().name() === charsetName)) {
                        return javaemul.internal.EmulatedCharset.ISO_LATIN_1_$LI$();
                    }
                    else if ((javaemul.internal.EmulatedCharset.UTF_8_$LI$().name() === charsetName)) {
                        return javaemul.internal.EmulatedCharset.UTF_8_$LI$();
                    }
                    if (!Charset.createLegalCharsetNameRegex().test(charsetName)) {
                        throw new java.nio.charset.IllegalCharsetNameException(charsetName);
                    }
                    else {
                        throw new java.nio.charset.UnsupportedCharsetException(charsetName);
                    }
                };
                Charset.createLegalCharsetNameRegex = function () {
                    return new RegExp("^[A-Za-z0-9][\\w-:\\.\\+]*$");
                };
                Charset.prototype.name = function () {
                    return this.__name;
                };
                Charset.prototype.compareTo = function (that) {
                    var _this = this;
                    if (((that != null && that instanceof java.nio.charset.Charset) || that === null)) {
                        return (function () {
                            return _this.__name.toUpperCase().localeCompare(that.__name.toUpperCase());
                        })();
                    }
                    else
                        throw new Error('invalid overload');
                };
                Charset.prototype.hashCode = function () {
                    return this.__name.toString();
                };
                Charset.prototype.equals = function (o) {
                    if (o === this) {
                        return true;
                    }
                    if (!(o != null && o instanceof java.nio.charset.Charset)) {
                        return false;
                    }
                    var that = o;
                    return (this.__name === that.__name);
                };
                Charset.prototype.toString = function () {
                    return this.__name;
                };
                return Charset;
            }());
            charset.Charset = Charset;
            var Charset;
            (function (Charset) {
                var AvailableCharsets = (function () {
                    function AvailableCharsets() {
                    }
                    return AvailableCharsets;
                }());
                Charset.AvailableCharsets = AvailableCharsets;
            })(Charset = charset.Charset || (charset.Charset = {}));
        })(charset = nio.charset || (nio.charset = {}));
    })(nio = java.nio || (java.nio = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Skeletal implementation of the Collection interface. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractCollection.html">[Sun
         * docs]</a>
         *
         * @param <E> the element type.
         */
        var AbstractCollection = (function () {
            function AbstractCollection() {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.lang.Iterable"] });
            }
            AbstractCollection.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull(action);
                for (var index123 = this.iterator(); index123.hasNext();) {
                    var t = index123.next();
                    {
                        action(t);
                    }
                }
            };
            AbstractCollection.prototype.add = function (index, element) {
                if (((index != null) || index === null) && element === undefined) {
                    return this.add$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractCollection.prototype.add$java_lang_Object = function (o) {
                throw new java.lang.UnsupportedOperationException("Add not supported on this collection");
            };
            AbstractCollection.prototype.addAll = function (index, c) {
                if (((index != null && index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0) || index === null) && c === undefined) {
                    return this.addAll$java_util_Collection(index);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractCollection.prototype.addAll$java_util_Collection = function (c) {
                javaemul.internal.InternalPreconditions.checkNotNull(c);
                var changed = false;
                for (var index124 = c.iterator(); index124.hasNext();) {
                    var e = index124.next();
                    {
                        changed = changed || this.add(e);
                    }
                }
                return changed;
            };
            AbstractCollection.prototype.clear = function () {
                for (var iter = this.iterator(); iter.hasNext();) {
                    iter.next();
                    iter.remove();
                }
            };
            AbstractCollection.prototype.contains = function (o) {
                return this.advanceToFind(o, false);
            };
            AbstractCollection.prototype.containsAll = function (c) {
                javaemul.internal.InternalPreconditions.checkNotNull(c);
                for (var index125 = c.iterator(); index125.hasNext();) {
                    var e = index125.next();
                    {
                        if (!this.contains(e)) {
                            return false;
                        }
                    }
                }
                return true;
            };
            AbstractCollection.prototype.isEmpty = function () {
                return this.size() === 0;
            };
            AbstractCollection.prototype.remove = function (index) {
                if (((index != null) || index === null)) {
                    return this.remove$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractCollection.prototype.remove$java_lang_Object = function (o) {
                return this.advanceToFind(o, true);
            };
            AbstractCollection.prototype.removeAll = function (c) {
                javaemul.internal.InternalPreconditions.checkNotNull(c);
                var changed = false;
                for (var iter = this.iterator(); iter.hasNext();) {
                    var o = iter.next();
                    if (c.contains(o)) {
                        iter.remove();
                        changed = true;
                    }
                }
                return changed;
            };
            AbstractCollection.prototype.retainAll = function (c) {
                javaemul.internal.InternalPreconditions.checkNotNull(c);
                var changed = false;
                for (var iter = this.iterator(); iter.hasNext();) {
                    var o = iter.next();
                    if (!c.contains(o)) {
                        iter.remove();
                        changed = true;
                    }
                }
                return changed;
            };
            AbstractCollection.prototype.toArray$ = function () {
                return this.toArray(new Array(this.size()));
            };
            AbstractCollection.prototype.toArray = function (a) {
                var _this = this;
                if (((a != null && a instanceof Array) || a === null)) {
                    return (function () {
                        var size = _this.size();
                        if (a.length < size) {
                            a = javaemul.internal.ArrayHelper.createFrom(a, size);
                        }
                        var result = a;
                        var it = _this.iterator();
                        for (var i = 0; i < size; ++i) {
                            result[i] = it.next();
                        }
                        if (a.length > size) {
                            a[size] = null;
                        }
                        return a;
                    })();
                }
                else if (a === undefined) {
                    return this.toArray$();
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractCollection.prototype.toString = function () {
                var joiner = new java.util.StringJoiner(", ", "[", "]");
                for (var index126 = this.iterator(); index126.hasNext();) {
                    var e = index126.next();
                    {
                        joiner.add(e === this ? "(this Collection)" : new String(e).toString());
                    }
                }
                return joiner.toString();
            };
            AbstractCollection.prototype.advanceToFind = function (o, remove) {
                for (var iter = this.iterator(); iter.hasNext();) {
                    var e = iter.next();
                    if (java.util.Objects.equals(o, e)) {
                        if (remove) {
                            iter.remove();
                        }
                        return true;
                    }
                }
                return false;
            };
            return AbstractCollection;
        }());
        util.AbstractCollection = AbstractCollection;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Skeletal implementation of the Set interface. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractSet.html">[Sun
         * docs]</a>
         *
         * @param <E> the element type.
         */
        var AbstractSet = (function (_super) {
            __extends(AbstractSet, _super);
            function AbstractSet() {
                _super.call(this);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Set", "java.lang.Iterable"] });
            }
            AbstractSet.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull(action);
                for (var index127 = this.iterator(); index127.hasNext();) {
                    var t = index127.next();
                    {
                        action(t);
                    }
                }
            };
            AbstractSet.prototype.equals = function (o) {
                if (o === this) {
                    return true;
                }
                if (!(o != null && o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.Set") >= 0)) {
                    return false;
                }
                var other = o;
                if (other.size() !== this.size()) {
                    return false;
                }
                return this.containsAll(other);
            };
            AbstractSet.prototype.hashCode = function () {
                return java.util.Collections.hashCode(this);
            };
            AbstractSet.prototype.removeAll = function (c) {
                javaemul.internal.InternalPreconditions.checkNotNull(c);
                var size = this.size();
                if (size < c.size()) {
                    for (var iter = this.iterator(); iter.hasNext();) {
                        var o = iter.next();
                        if (c.contains(o)) {
                            iter.remove();
                        }
                    }
                }
                else {
                    for (var index128 = c.iterator(); index128.hasNext();) {
                        var o1 = index128.next();
                        {
                            this.remove(o1);
                        }
                    }
                }
                return (size !== this.size());
            };
            return AbstractSet;
        }(java.util.AbstractCollection));
        util.AbstractSet = AbstractSet;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Implements a set in terms of a hash table. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/HashSet.html">[Sun
         * docs]</a>
         *
         * @param <E> element type.
         */
        var HashSet = (function (_super) {
            __extends(HashSet, _super);
            function HashSet(initialCapacity, loadFactor) {
                var _this = this;
                if (((typeof initialCapacity === 'number') || initialCapacity === null) && ((typeof loadFactor === 'number') || loadFactor === null)) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Collection", "java.util.Set", "java.lang.Iterable", "java.io.Serializable"] });
                    (function () {
                        _this.map = new java.util.HashMap(initialCapacity, loadFactor);
                    })();
                }
                else if (((initialCapacity != null && initialCapacity["__interfaces"] != null && initialCapacity["__interfaces"].indexOf("java.util.Collection") >= 0) || initialCapacity === null) && loadFactor === undefined) {
                    var c = initialCapacity;
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Collection", "java.util.Set", "java.lang.Iterable", "java.io.Serializable"] });
                    (function () {
                        _this.map = new java.util.HashMap(c.size());
                        _this.addAll(c);
                    })();
                }
                else if (((initialCapacity != null && initialCapacity instanceof java.util.HashMap) || initialCapacity === null) && loadFactor === undefined) {
                    var map = initialCapacity;
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Collection", "java.util.Set", "java.lang.Iterable", "java.io.Serializable"] });
                    (function () {
                        _this.map = map;
                    })();
                }
                else if (((typeof initialCapacity === 'number') || initialCapacity === null) && loadFactor === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Collection", "java.util.Set", "java.lang.Iterable", "java.io.Serializable"] });
                    (function () {
                        _this.map = new java.util.HashMap(initialCapacity);
                    })();
                }
                else if (initialCapacity === undefined && loadFactor === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Collection", "java.util.Set", "java.lang.Iterable", "java.io.Serializable"] });
                    (function () {
                        _this.map = new java.util.HashMap();
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            HashSet.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull(action);
                for (var index129 = this.iterator(); index129.hasNext();) {
                    var t = index129.next();
                    {
                        action(t);
                    }
                }
            };
            HashSet.prototype.add = function (o) {
                var old = this.map.put(o, this);
                return (old == null);
            };
            HashSet.prototype.clear = function () {
                this.map.clear();
            };
            HashSet.prototype.clone = function () {
                return new HashSet(this);
            };
            HashSet.prototype.contains = function (o) {
                return this.map.containsKey(o);
            };
            HashSet.prototype.isEmpty = function () {
                return this.map.isEmpty();
            };
            HashSet.prototype.iterator = function () {
                return this.map.keySet().iterator();
            };
            HashSet.prototype.remove = function (o) {
                var _this = this;
                if (((o != null) || o === null)) {
                    return (function () {
                        return (_this.map.remove(o) != null);
                    })();
                }
                else
                    throw new Error('invalid overload');
            };
            HashSet.prototype.size = function () {
                return this.map.size();
            };
            HashSet.prototype.toString = function () {
                return this.map.keySet().toString();
            };
            return HashSet;
        }(java.util.AbstractSet));
        util.HashSet = HashSet;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Skeletal implementation of the Queue interface. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractQueue.html">[Sun
         * docs]</a>
         *
         * @param <E> element type.
         */
        var AbstractQueue = (function (_super) {
            __extends(AbstractQueue, _super);
            function AbstractQueue() {
                _super.call(this);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Queue", "java.lang.Iterable"] });
            }
            AbstractQueue.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull(action);
                for (var index130 = this.iterator(); index130.hasNext();) {
                    var t = index130.next();
                    {
                        action(t);
                    }
                }
            };
            AbstractQueue.prototype.add = function (o) {
                javaemul.internal.InternalPreconditions.checkState(this.offer(o), "Unable to add element to queue");
                return true;
            };
            AbstractQueue.prototype.addAll = function (c) {
                javaemul.internal.InternalPreconditions.checkNotNull(c);
                javaemul.internal.InternalPreconditions.checkArgument(c !== this, "Can\'t add a queue to itself");
                return _super.prototype.addAll.call(this, c);
            };
            AbstractQueue.prototype.clear = function () {
                while ((this.poll() != null)) {
                }
                ;
            };
            AbstractQueue.prototype.element = function () {
                var e = this.peek();
                javaemul.internal.InternalPreconditions.checkElement(e != null, "Queue is empty");
                return e;
            };
            AbstractQueue.prototype.remove$ = function () {
                var e = this.poll();
                javaemul.internal.InternalPreconditions.checkElement(e != null, "Queue is empty");
                return e;
            };
            return AbstractQueue;
        }(java.util.AbstractCollection));
        util.AbstractQueue = AbstractQueue;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * A {@link java.util.Set} of {@link Enum}s. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/EnumSet.html">[Sun
         * docs]</a>
         *
         * @param <E> enumeration type
         */
        var EnumSet = (function (_super) {
            __extends(EnumSet, _super);
            /**
             * Single implementation only.
             */
            function EnumSet() {
                _super.call(this);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Set", "java.lang.Iterable"] });
            }
            EnumSet.allOf = function (elementType) {
                var all = elementType.getEnumConstants();
                var set = javaemul.internal.ArrayHelper.clone(all, 0, all.length);
                return new EnumSet.EnumSetImpl(all, set, all.length);
            };
            EnumSet.complementOf = function (other) {
                var s = other;
                var all = s.all;
                var oldSet = s.set;
                var newSet = javaemul.internal.ArrayHelper.createFrom(oldSet, oldSet.length);
                for (var i = 0, c = oldSet.length; i < c; ++i) {
                    if (oldSet[i] == null) {
                        newSet[i] = all[i];
                    }
                }
                return new EnumSet.EnumSetImpl(all, newSet, all.length - s.__size);
            };
            EnumSet.copyOf$java_util_Collection = function (c) {
                if (c != null && c instanceof java.util.EnumSet) {
                    return EnumSet.copyOf(c);
                }
                javaemul.internal.InternalPreconditions.checkArgument(!c.isEmpty(), "Collection is empty");
                var iterator = c.iterator();
                var first = iterator.next();
                var set = EnumSet.of(first);
                while ((iterator.hasNext())) {
                    var e = iterator.next();
                    set.add(e);
                }
                ;
                return set;
            };
            EnumSet.copyOf = function (s) {
                if (((s != null && s instanceof java.util.EnumSet) || s === null)) {
                    return (function () {
                        return s.clone();
                    })();
                }
                else if (((s != null && s["__interfaces"] != null && s["__interfaces"].indexOf("java.util.Collection") >= 0) || s === null)) {
                    return java.util.EnumSet.copyOf$java_util_Collection(s);
                }
                else
                    throw new Error('invalid overload');
            };
            EnumSet.noneOf = function (elementType) {
                var all = elementType.getEnumConstants();
                return new EnumSet.EnumSetImpl(all, javaemul.internal.ArrayHelper.createFrom(all, all.length), 0);
            };
            EnumSet.of$java_lang_Enum = function (first) {
                var set = EnumSet.noneOf(first.getDeclaringClass());
                set.add(first);
                return set;
            };
            EnumSet.of = function (first) {
                var rest = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    rest[_i - 1] = arguments[_i];
                }
                if (((first != null) || first === null) && ((rest != null && rest instanceof Array) || rest === null)) {
                    return (function () {
                        var set = EnumSet.of(first);
                        java.util.Collections.addAll(set, rest);
                        return set;
                    })();
                }
                else if (((first != null) || first === null) && rest === undefined) {
                    return java.util.EnumSet.of$java_lang_Enum(first);
                }
                else
                    throw new Error('invalid overload');
            };
            EnumSet.range = function (from, to) {
                javaemul.internal.InternalPreconditions.checkArgument(from.compareTo(to) <= 0, "%s > %s", from, to);
                var all = from.getDeclaringClass().getEnumConstants();
                var set = javaemul.internal.ArrayHelper.createFrom(all, all.length);
                var start = from.ordinal();
                var end = to.ordinal() + 1;
                for (var i = start; i < end; ++i) {
                    set[i] = all[i];
                }
                return new EnumSet.EnumSetImpl(all, set, end - start);
            };
            return EnumSet;
        }(java.util.AbstractSet));
        util.EnumSet = EnumSet;
        var EnumSet;
        (function (EnumSet) {
            /**
             * Implemented via sparse array since the set size is finite. Iteration takes
             * linear time with respect to the set of the enum rather than the number of
             * items in the set.
             *
             * Note: Implemented as a subclass instead of a concrete final EnumSet class.
             * This is because declaring an EnumSet.add(E) causes hosted mode to bind to
             * the tighter method rather than the bridge method; but the tighter method
             * isn't available in the real JRE.
             */
            var EnumSetImpl = (function (_super) {
                __extends(EnumSetImpl, _super);
                /**
                 * Constructs a set taking ownership of the specified set. The size must
                 * accurately reflect the number of non-null items in set.
                 */
                function EnumSetImpl(all, set, size) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Set", "java.lang.Iterable"] });
                    this.__size = 0;
                    this.all = all;
                    this.set = set;
                    this.__size = size;
                }
                EnumSetImpl.prototype.add = function (e) {
                    var _this = this;
                    if (((e != null) || e === null)) {
                        return (function () {
                            javaemul.internal.InternalPreconditions.checkNotNull(e);
                            var ordinal = e.ordinal();
                            if (_this.set[ordinal] == null) {
                                _this.set[ordinal] = e;
                                ++_this.__size;
                                return true;
                            }
                            return false;
                        })();
                    }
                    else if (((e != null) || e === null)) {
                        return this.add$java_lang_Object(e);
                    }
                    else
                        throw new Error('invalid overload');
                };
                EnumSetImpl.prototype.clone = function () {
                    var clonedSet = javaemul.internal.ArrayHelper.clone(this.set, 0, this.set.length);
                    return new EnumSet.EnumSetImpl(this.all, clonedSet, this.__size);
                };
                EnumSetImpl.prototype.contains = function (o) {
                    return (o != null && o instanceof java.lang.Enum) && this.containsEnum(o);
                };
                EnumSetImpl.prototype.containsEnum = function (e) {
                    return e != null && this.set[e.ordinal()] === e;
                };
                EnumSetImpl.prototype.iterator = function () {
                    return new EnumSetImpl.IteratorImpl(this);
                };
                EnumSetImpl.prototype.remove = function (o) {
                    var _this = this;
                    if (((o != null) || o === null)) {
                        return (function () {
                            return (o != null && o instanceof java.lang.Enum) && _this.removeEnum(o);
                        })();
                    }
                    else
                        throw new Error('invalid overload');
                };
                EnumSetImpl.prototype.removeEnum = function (e) {
                    if (e != null && this.set[e.ordinal()] === e) {
                        this.set[e.ordinal()] = null;
                        --this.__size;
                        return true;
                    }
                    return false;
                };
                EnumSetImpl.prototype.size = function () {
                    return this.__size;
                };
                EnumSetImpl.prototype.capacity = function () {
                    return this.all.length;
                };
                return EnumSetImpl;
            }(java.util.EnumSet));
            EnumSet.EnumSetImpl = EnumSetImpl;
            var EnumSetImpl;
            (function (EnumSetImpl) {
                var IteratorImpl = (function () {
                    function IteratorImpl(__parent) {
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                        this.__parent = __parent;
                        this.i = -1;
                        this.last = -1;
                        this.findNext();
                    }
                    IteratorImpl.prototype.forEachRemaining = function (consumer) {
                        javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                        while ((this.hasNext())) {
                            consumer(this.next());
                        }
                        ;
                    };
                    IteratorImpl.prototype.hasNext = function () {
                        return this.i < this.__parent.capacity();
                    };
                    IteratorImpl.prototype.next = function () {
                        javaemul.internal.InternalPreconditions.checkElement(this.hasNext());
                        this.last = this.i;
                        this.findNext();
                        return this.__parent.set[this.last];
                    };
                    IteratorImpl.prototype.remove = function () {
                        javaemul.internal.InternalPreconditions.checkState(this.last !== -1);
                        this.__parent.set[this.last] = null;
                        --this.__parent.__size;
                        this.last = -1;
                    };
                    IteratorImpl.prototype.findNext = function () {
                        ++this.i;
                        for (var c = this.__parent.capacity(); this.i < c; ++this.i) {
                            if (this.__parent.set[this.i] != null) {
                                return;
                            }
                        }
                    };
                    return IteratorImpl;
                }());
                EnumSetImpl.IteratorImpl = IteratorImpl;
            })(EnumSetImpl = EnumSet.EnumSetImpl || (EnumSet.EnumSetImpl = {}));
        })(EnumSet = util.EnumSet || (util.EnumSet = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Skeletal implementation of the List interface. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractList.html">[Sun
         * docs]</a>
         *
         * @param <E> the element type.
         */
        var AbstractList = (function (_super) {
            __extends(AbstractList, _super);
            function AbstractList() {
                _super.call(this);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.List", "java.util.Collection", "java.lang.Iterable"] });
                this.modCount = 0;
            }
            AbstractList.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull(action);
                for (var index131 = this.iterator(); index131.hasNext();) {
                    var t = index131.next();
                    {
                        action(t);
                    }
                }
            };
            AbstractList.prototype.add$java_lang_Object = function (obj) {
                this.add(this.size(), obj);
                return true;
            };
            AbstractList.prototype.add = function (index, element) {
                if (((typeof index === 'number') || index === null) && ((element != null) || element === null)) {
                    return (function () {
                        throw new java.lang.UnsupportedOperationException("Add not supported on this list");
                    })();
                }
                else if (((index != null) || index === null) && element === undefined) {
                    return this.add$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractList.prototype.addAll = function (index, c) {
                var _this = this;
                if (((typeof index === 'number') || index === null) && ((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0) || c === null)) {
                    return (function () {
                        javaemul.internal.InternalPreconditions.checkNotNull(c);
                        var changed = false;
                        for (var index132 = c.iterator(); index132.hasNext();) {
                            var e = index132.next();
                            {
                                _this.add(index++, e);
                                changed = true;
                            }
                        }
                        return changed;
                    })();
                }
                else if (((index != null && index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0) || index === null) && c === undefined) {
                    return this.addAll$java_util_Collection(index);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractList.prototype.clear = function () {
                this.removeRange(0, this.size());
            };
            AbstractList.prototype.equals = function (o) {
                if (o === this) {
                    return true;
                }
                if (!(o != null && o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.List") >= 0)) {
                    return false;
                }
                var other = o;
                if (this.size() !== other.size()) {
                    return false;
                }
                var iterOther = other.iterator();
                for (var index133 = this.iterator(); index133.hasNext();) {
                    var elem = index133.next();
                    {
                        var elemOther = iterOther.next();
                        if (!java.util.Objects.equals(elem, elemOther)) {
                            return false;
                        }
                    }
                }
                return true;
            };
            AbstractList.prototype.hashCode = function () {
                return java.util.Collections.hashCode(this);
            };
            AbstractList.prototype.indexOf = function (o, index) {
                if (((o != null) || o === null) && index === undefined) {
                    return this.indexOf$java_lang_Object(o);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractList.prototype.indexOf$java_lang_Object = function (toFind) {
                for (var i = 0, n = this.size(); i < n; ++i) {
                    if (java.util.Objects.equals(toFind, this.get(i))) {
                        return i;
                    }
                }
                return -1;
            };
            AbstractList.prototype.iterator = function () {
                return new AbstractList.IteratorImpl(this);
            };
            AbstractList.prototype.lastIndexOf = function (o, index) {
                if (((o != null) || o === null) && index === undefined) {
                    return this.lastIndexOf$java_lang_Object(o);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractList.prototype.lastIndexOf$java_lang_Object = function (toFind) {
                for (var i = this.size() - 1; i > -1; --i) {
                    if (java.util.Objects.equals(toFind, this.get(i))) {
                        return i;
                    }
                }
                return -1;
            };
            AbstractList.prototype.listIterator$ = function () {
                return this.listIterator(0);
            };
            AbstractList.prototype.listIterator = function (from) {
                var _this = this;
                if (((typeof from === 'number') || from === null)) {
                    return (function () {
                        return new AbstractList.ListIteratorImpl(_this, from);
                    })();
                }
                else if (from === undefined) {
                    return this.listIterator$();
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractList.prototype.remove = function (index) {
                if (((typeof index === 'number') || index === null)) {
                    return (function () {
                        throw new java.lang.UnsupportedOperationException("Remove not supported on this list");
                    })();
                }
                else if (((index != null) || index === null)) {
                    return this.remove$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractList.prototype.set = function (index, o) {
                throw new java.lang.UnsupportedOperationException("Set not supported on this list");
            };
            AbstractList.prototype.subList = function (fromIndex, toIndex) {
                return new AbstractList.SubList(this, fromIndex, toIndex);
            };
            AbstractList.prototype.removeRange = function (fromIndex, endIndex) {
                var iter = this.listIterator(fromIndex);
                for (var i = fromIndex; i < endIndex; ++i) {
                    iter.next();
                    iter.remove();
                }
            };
            return AbstractList;
        }(java.util.AbstractCollection));
        util.AbstractList = AbstractList;
        var AbstractList;
        (function (AbstractList) {
            var IteratorImpl = (function () {
                function IteratorImpl(__parent) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                    this.__parent = __parent;
                    this.i = 0;
                    this.last = 0;
                    this.i = 0;
                    this.last = -1;
                }
                IteratorImpl.prototype.forEachRemaining = function (consumer) {
                    javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                    while ((this.hasNext())) {
                        consumer(this.next());
                    }
                    ;
                };
                IteratorImpl.prototype.hasNext = function () {
                    return this.i < this.__parent.size();
                };
                IteratorImpl.prototype.next = function () {
                    javaemul.internal.InternalPreconditions.checkElement(this.hasNext());
                    return this.__parent.get(this.last = this.i++);
                };
                IteratorImpl.prototype.remove = function () {
                    javaemul.internal.InternalPreconditions.checkState(this.last !== -1);
                    this.__parent.remove(this.last);
                    this.i = this.last;
                    this.last = -1;
                };
                return IteratorImpl;
            }());
            AbstractList.IteratorImpl = IteratorImpl;
            /**
             * Implementation of <code>ListIterator</code> for abstract lists.
             */
            var ListIteratorImpl = (function (_super) {
                __extends(ListIteratorImpl, _super);
                function ListIteratorImpl(__parent, start) {
                    var _this = this;
                    if (((typeof start === 'number') || start === null)) {
                        _super.call(this, __parent);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator", "java.util.ListIterator"] });
                        this.__parent = __parent;
                        (function () {
                            javaemul.internal.InternalPreconditions.checkPositionIndex(start, _this.__parent.size());
                            _this.i = start;
                        })();
                    }
                    else if (start === undefined) {
                        _super.call(this, __parent);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator", "java.util.ListIterator"] });
                        this.__parent = __parent;
                        (function () {
                        })();
                    }
                    else
                        throw new Error('invalid overload');
                }
                ListIteratorImpl.prototype.forEachRemaining = function (consumer) {
                    javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                    while ((this.hasNext())) {
                        consumer(this.next());
                    }
                    ;
                };
                ListIteratorImpl.prototype.add = function (o) {
                    this.__parent.add(this.i, o);
                    this.i++;
                    this.last = -1;
                };
                ListIteratorImpl.prototype.hasPrevious = function () {
                    return this.i > 0;
                };
                ListIteratorImpl.prototype.nextIndex = function () {
                    return this.i;
                };
                ListIteratorImpl.prototype.previous = function () {
                    javaemul.internal.InternalPreconditions.checkElement(this.hasPrevious());
                    return this.__parent.get(this.last = --this.i);
                };
                ListIteratorImpl.prototype.previousIndex = function () {
                    return this.i - 1;
                };
                ListIteratorImpl.prototype.set = function (o) {
                    javaemul.internal.InternalPreconditions.checkState(this.last !== -1);
                    this.__parent.set(this.last, o);
                };
                return ListIteratorImpl;
            }(AbstractList.IteratorImpl));
            AbstractList.ListIteratorImpl = ListIteratorImpl;
            var SubList = (function (_super) {
                __extends(SubList, _super);
                function SubList(wrapped, fromIndex, toIndex) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.List", "java.util.Collection", "java.lang.Iterable"] });
                    this.fromIndex = 0;
                    this.__size = 0;
                    javaemul.internal.InternalPreconditions.checkCriticalPositionIndexes(fromIndex, toIndex, wrapped.size());
                    this.wrapped = wrapped;
                    this.fromIndex = fromIndex;
                    this.__size = toIndex - fromIndex;
                }
                SubList.prototype.add = function (index, element) {
                    var _this = this;
                    if (((typeof index === 'number') || index === null) && ((element != null) || element === null)) {
                        return (function () {
                            javaemul.internal.InternalPreconditions.checkPositionIndex(index, _this.__size);
                            _this.wrapped.add(_this.fromIndex + index, element);
                            _this.__size++;
                        })();
                    }
                    else if (((index != null) || index === null) && element === undefined) {
                        return this.add$java_lang_Object(index);
                    }
                    else
                        throw new Error('invalid overload');
                };
                SubList.prototype.get = function (index) {
                    javaemul.internal.InternalPreconditions.checkElementIndex(index, this.__size);
                    return this.wrapped.get(this.fromIndex + index);
                };
                SubList.prototype.remove = function (index) {
                    var _this = this;
                    if (((typeof index === 'number') || index === null)) {
                        return (function () {
                            javaemul.internal.InternalPreconditions.checkElementIndex(index, _this.__size);
                            var result = _this.wrapped.remove(_this.fromIndex + index);
                            _this.__size--;
                            return result;
                        })();
                    }
                    else if (((index != null) || index === null)) {
                        return this.remove$java_lang_Object(index);
                    }
                    else
                        throw new Error('invalid overload');
                };
                SubList.prototype.set = function (index, element) {
                    javaemul.internal.InternalPreconditions.checkElementIndex(index, this.__size);
                    return this.wrapped.set(this.fromIndex + index, element);
                };
                SubList.prototype.size = function () {
                    return this.__size;
                };
                return SubList;
            }(java.util.AbstractList));
            AbstractList.SubList = SubList;
        })(AbstractList = util.AbstractList || (util.AbstractList = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Skeletal implementation of the List interface. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractSequentialList.html">[Sun
         * docs]</a>
         *
         * @param <E> element type.
         */
        var AbstractSequentialList = (function (_super) {
            __extends(AbstractSequentialList, _super);
            function AbstractSequentialList() {
                _super.call(this);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.List", "java.util.Collection", "java.lang.Iterable"] });
            }
            AbstractSequentialList.prototype.add = function (index, element) {
                var _this = this;
                if (((typeof index === 'number') || index === null) && ((element != null) || element === null)) {
                    return (function () {
                        var iter = _this.listIterator(index);
                        iter.add(element);
                    })();
                }
                else if (((index != null) || index === null) && element === undefined) {
                    return this.add$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractSequentialList.prototype.addAll = function (index, c) {
                var _this = this;
                if (((typeof index === 'number') || index === null) && ((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0) || c === null)) {
                    return (function () {
                        javaemul.internal.InternalPreconditions.checkNotNull(c);
                        var modified = false;
                        var iter = _this.listIterator(index);
                        for (var index134 = c.iterator(); index134.hasNext();) {
                            var e = index134.next();
                            {
                                iter.add(e);
                                modified = true;
                            }
                        }
                        return modified;
                    })();
                }
                else if (((index != null && index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0) || index === null) && c === undefined) {
                    return this.addAll$java_util_Collection(index);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractSequentialList.prototype.get = function (index) {
                var iter = this.listIterator(index);
                try {
                    return iter.next();
                }
                catch (e) {
                    throw new java.lang.IndexOutOfBoundsException("Can\'t get element " + index);
                }
                ;
            };
            AbstractSequentialList.prototype.iterator = function () {
                return this.listIterator();
            };
            AbstractSequentialList.prototype.listIterator = function (index) {
                if (((typeof index === 'number') || index === null)) {
                    return null;
                }
                else if (index === undefined) {
                    return this.listIterator$();
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractSequentialList.prototype.remove = function (index) {
                var _this = this;
                if (((typeof index === 'number') || index === null)) {
                    return (function () {
                        var iter = _this.listIterator(index);
                        try {
                            var old = iter.next();
                            iter.remove();
                            return old;
                        }
                        catch (e) {
                            throw new java.lang.IndexOutOfBoundsException("Can\'t remove element " + index);
                        }
                        ;
                    })();
                }
                else if (((index != null) || index === null)) {
                    return this.remove$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractSequentialList.prototype.set = function (index, element) {
                var iter = this.listIterator(index);
                try {
                    var old = iter.next();
                    iter.set(element);
                    return old;
                }
                catch (e) {
                    throw new java.lang.IndexOutOfBoundsException("Can\'t set element " + index);
                }
                ;
            };
            return AbstractSequentialList;
        }(java.util.AbstractList));
        util.AbstractSequentialList = AbstractSequentialList;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Resizeable array implementation of the List interface. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/ArrayList.html">[Sun
         * docs]</a>
         *
         * <p>
         * This implementation differs from JDK 1.5 <code>ArrayList</code> in terms of
         * capacity management. There is no speed advantage to pre-allocating array
         * sizes in JavaScript, so this implementation does not include any of the
         * capacity and "growth increment" concepts in the standard ArrayList class.
         * Although <code>ArrayList(int)</code> accepts a value for the initial
         * capacity of the array, this constructor simply delegates to
         * <code>ArrayList()</code>. It is only present for compatibility with JDK
         * 1.5's API.
         * </p>
         *
         * @param <E> the element type.
         */
        var ArrayList = (function (_super) {
            __extends(ArrayList, _super);
            function ArrayList(c) {
                var _this = this;
                if (((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0) || c === null)) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess", "java.util.List", "java.lang.Cloneable", "java.util.Collection", "java.lang.Iterable", "java.io.Serializable"] });
                    (function () {
                        _this.array = new Array(0);
                        javaemul.internal.ArrayHelper.insertTo(_this.array, 0, c.toArray());
                    })();
                }
                else if (((typeof c === 'number') || c === null)) {
                    var initialCapacity = c;
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess", "java.util.List", "java.lang.Cloneable", "java.util.Collection", "java.lang.Iterable", "java.io.Serializable"] });
                    (function () {
                        javaemul.internal.InternalPreconditions.checkArgument(initialCapacity >= 0, "Initial capacity must not be negative");
                        _this.array = new Array(0);
                    })();
                }
                else if (c === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess", "java.util.List", "java.lang.Cloneable", "java.util.Collection", "java.lang.Iterable", "java.io.Serializable"] });
                    (function () {
                        _this.array = new Array(0);
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            ArrayList.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull(action);
                for (var index135 = this.iterator(); index135.hasNext();) {
                    var t = index135.next();
                    {
                        action(t);
                    }
                }
            };
            ArrayList.prototype.add$java_lang_Object = function (o) {
                this.array[this.array.length] = o;
                return true;
            };
            ArrayList.prototype.add = function (index, o) {
                var _this = this;
                if (((typeof index === 'number') || index === null) && ((o != null) || o === null)) {
                    return (function () {
                        javaemul.internal.InternalPreconditions.checkPositionIndex(index, _this.array.length);
                        javaemul.internal.ArrayHelper.insertTo(_this.array, index, o);
                    })();
                }
                else if (((index != null) || index === null) && o === undefined) {
                    return this.add$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            ArrayList.prototype.addAll$java_util_Collection = function (c) {
                var cArray = c.toArray();
                var len = cArray.length;
                if (len === 0) {
                    return false;
                }
                javaemul.internal.ArrayHelper.insertTo(this.array, this.array.length, cArray);
                return true;
            };
            ArrayList.prototype.addAll = function (index, c) {
                var _this = this;
                if (((typeof index === 'number') || index === null) && ((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0) || c === null)) {
                    return (function () {
                        javaemul.internal.InternalPreconditions.checkPositionIndex(index, _this.array.length);
                        var cArray = c.toArray();
                        var len = cArray.length;
                        if (len === 0) {
                            return false;
                        }
                        javaemul.internal.ArrayHelper.insertTo(_this.array, index, cArray);
                        return true;
                    })();
                }
                else if (((index != null && index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0) || index === null) && c === undefined) {
                    return this.addAll$java_util_Collection(index);
                }
                else
                    throw new Error('invalid overload');
            };
            ArrayList.prototype.clear = function () {
                this.array = new Array(0);
            };
            ArrayList.prototype.clone = function () {
                return new ArrayList(this);
            };
            ArrayList.prototype.contains = function (o) {
                return (this.indexOf(o) !== -1);
            };
            ArrayList.prototype.ensureCapacity = function (ignored) {
            };
            ArrayList.prototype.get = function (index) {
                javaemul.internal.InternalPreconditions.checkElementIndex(index, this.array.length);
                return this.array[index];
            };
            ArrayList.prototype.indexOf$java_lang_Object = function (o) {
                return this.indexOf(o, 0);
            };
            ArrayList.prototype.iterator = function () {
                return new ArrayList.ArrayList$0(this);
            };
            ArrayList.prototype.isEmpty = function () {
                return this.array.length === 0;
            };
            ArrayList.prototype.lastIndexOf$java_lang_Object = function (o) {
                return this.lastIndexOf(o, this.size() - 1);
            };
            ArrayList.prototype.remove = function (index) {
                var _this = this;
                if (((typeof index === 'number') || index === null)) {
                    return (function () {
                        var previous = _this.get(index);
                        javaemul.internal.ArrayHelper.removeFrom(_this.array, index, 1);
                        return previous;
                    })();
                }
                else if (((index != null) || index === null)) {
                    return this.remove$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            ArrayList.prototype.remove$java_lang_Object = function (o) {
                var i = this.indexOf(o);
                if (i === -1) {
                    return false;
                }
                this.remove(i);
                return true;
            };
            ArrayList.prototype.set = function (index, o) {
                var previous = this.get(index);
                this.array[index] = o;
                return previous;
            };
            ArrayList.prototype.size = function () {
                return this.array.length;
            };
            ArrayList.prototype.toArray$ = function () {
                return javaemul.internal.ArrayHelper.clone(this.array, 0, this.array.length);
            };
            ArrayList.prototype.toArray = function (out) {
                var _this = this;
                if (((out != null && out instanceof Array) || out === null)) {
                    return (function () {
                        var size = _this.array.length;
                        if (out.length < size) {
                            out = javaemul.internal.ArrayHelper.createFrom(out, size);
                        }
                        for (var i = 0; i < size; ++i) {
                            out[i] = _this.array[i];
                        }
                        if (out.length > size) {
                            out[size] = null;
                        }
                        return out;
                    })();
                }
                else if (out === undefined) {
                    return this.toArray$();
                }
                else
                    throw new Error('invalid overload');
            };
            ArrayList.prototype.trimToSize = function () {
            };
            ArrayList.prototype.removeRange = function (fromIndex, endIndex) {
                javaemul.internal.InternalPreconditions.checkPositionIndexes(fromIndex, endIndex, this.array.length);
                var count = endIndex - fromIndex;
                javaemul.internal.ArrayHelper.removeFrom(this.array, fromIndex, count);
            };
            /**
             * Used by Vector.
             */
            ArrayList.prototype.indexOf = function (o, index) {
                var _this = this;
                if (((o != null) || o === null) && ((typeof index === 'number') || index === null)) {
                    return (function () {
                        for (; index < _this.array.length; ++index) {
                            if (java.util.Objects.equals(o, _this.array[index])) {
                                return index;
                            }
                        }
                        return -1;
                    })();
                }
                else if (((o != null) || o === null) && index === undefined) {
                    return this.indexOf$java_lang_Object(o);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Used by Vector.
             */
            ArrayList.prototype.lastIndexOf = function (o, index) {
                var _this = this;
                if (((o != null) || o === null) && ((typeof index === 'number') || index === null)) {
                    return (function () {
                        for (; index >= 0; --index) {
                            if (java.util.Objects.equals(o, _this.array[index])) {
                                return index;
                            }
                        }
                        return -1;
                    })();
                }
                else if (((o != null) || o === null) && index === undefined) {
                    return this.lastIndexOf$java_lang_Object(o);
                }
                else
                    throw new Error('invalid overload');
            };
            ArrayList.prototype.setSize = function (newSize) {
                javaemul.internal.ArrayHelper.setLength(this.array, newSize);
            };
            return ArrayList;
        }(java.util.AbstractList));
        util.ArrayList = ArrayList;
        var ArrayList;
        (function (ArrayList) {
            var ArrayList$0 = (function () {
                function ArrayList$0(__parent) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                    this.__parent = __parent;
                    this.i = 0;
                    this.last = -1;
                }
                ArrayList$0.prototype.forEachRemaining = function (consumer) {
                    javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                    while ((this.hasNext())) {
                        consumer(this.next());
                    }
                    ;
                };
                ArrayList$0.prototype.hasNext = function () {
                    return this.i < this.__parent.array.length;
                };
                ArrayList$0.prototype.next = function () {
                    javaemul.internal.InternalPreconditions.checkElement(this.hasNext());
                    this.last = this.i++;
                    return this.__parent.array[this.last];
                };
                ArrayList$0.prototype.remove = function () {
                    javaemul.internal.InternalPreconditions.checkState(this.last !== -1);
                    this.__parent.remove(this.i = this.last);
                    this.last = -1;
                };
                return ArrayList$0;
            }());
            ArrayList.ArrayList$0 = ArrayList$0;
        })(ArrayList = util.ArrayList || (util.ArrayList = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Utility methods related to native arrays. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Arrays.html">[Sun
         * docs]</a>
         */
        var Arrays = (function () {
            function Arrays() {
            }
            Arrays.asList = function () {
                var array = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    array[_i - 0] = arguments[_i];
                }
                return new Arrays.ArrayList(array);
            };
            /**
             * Perform a binary search on a sorted byte array.
             *
             * @param sortedArray byte array to search
             * @param key value to search for
             * @return the index of an element with a matching value, or a negative number
             * which is the index of the next larger value (or just past the end
             * of the array if the searched value is larger than all elements in
             * the array) minus 1 (to ensure error returns are negative)
             */
            Arrays.binarySearch$byte_A$byte = function (sortedArray, key) {
                var low = 0;
                var high = sortedArray.length - 1;
                while ((low <= high)) {
                    var mid = low + ((high - low) >> 1);
                    var midVal = sortedArray[mid];
                    if (midVal < key) {
                        low = mid + 1;
                    }
                    else if (midVal > key) {
                        high = mid - 1;
                    }
                    else {
                        return mid;
                    }
                }
                ;
                return -low - 1;
            };
            /**
             * Perform a binary search on a sorted char array.
             *
             * @param a char array to search
             * @param key value to search for
             * @return the index of an element with a matching value, or a negative number
             * which is the index of the next larger value (or just past the end
             * of the array if the searched value is larger than all elements in
             * the array) minus 1 (to ensure error returns are negative)
             */
            Arrays.binarySearch$char_A$char = function (a, key) {
                var low = 0;
                var high = a.length - 1;
                while ((low <= high)) {
                    var mid = low + ((high - low) >> 1);
                    var midVal = a[mid];
                    if ((midVal).charCodeAt(0) < (key).charCodeAt(0)) {
                        low = mid + 1;
                    }
                    else if ((midVal).charCodeAt(0) > (key).charCodeAt(0)) {
                        high = mid - 1;
                    }
                    else {
                        return mid;
                    }
                }
                ;
                return -low - 1;
            };
            /**
             * Perform a binary search on a sorted double array.
             *
             * @param sortedArray double array to search
             * @param key value to search for
             * @return the index of an element with a matching value, or a negative number
             * which is the index of the next larger value (or just past the end
             * of the array if the searched value is larger than all elements in
             * the array) minus 1 (to ensure error returns are negative)
             */
            Arrays.binarySearch$double_A$double = function (sortedArray, key) {
                var low = 0;
                var high = sortedArray.length - 1;
                while ((low <= high)) {
                    var mid = low + ((high - low) >> 1);
                    var midVal = sortedArray[mid];
                    if (midVal < key) {
                        low = mid + 1;
                    }
                    else if (midVal > key) {
                        high = mid - 1;
                    }
                    else {
                        return mid;
                    }
                }
                ;
                return -low - 1;
            };
            /**
             * Perform a binary search on a sorted float array.
             *
             * Note that some underlying JavaScript interpreters do not actually implement
             * floats (using double instead), so you may get slightly different behavior
             * regarding values that are very close (or equal) since conversion errors
             * to/from double may change the values slightly.
             *
             * @param sortedArray float array to search
             * @param key value to search for
             * @return the index of an element with a matching value, or a negative number
             * which is the index of the next larger value (or just past the end
             * of the array if the searched value is larger than all elements in
             * the array) minus 1 (to ensure error returns are negative)
             */
            Arrays.binarySearch$float_A$float = function (sortedArray, key) {
                var low = 0;
                var high = sortedArray.length - 1;
                while ((low <= high)) {
                    var mid = low + ((high - low) >> 1);
                    var midVal = sortedArray[mid];
                    if (midVal < key) {
                        low = mid + 1;
                    }
                    else if (midVal > key) {
                        high = mid - 1;
                    }
                    else {
                        return mid;
                    }
                }
                ;
                return -low - 1;
            };
            /**
             * Perform a binary search on a sorted int array.
             *
             * @param sortedArray int array to search
             * @param key value to search for
             * @return the index of an element with a matching value, or a negative number
             * which is the index of the next larger value (or just past the end
             * of the array if the searched value is larger than all elements in
             * the array) minus 1 (to ensure error returns are negative)
             */
            Arrays.binarySearch$int_A$int = function (sortedArray, key) {
                var low = 0;
                var high = sortedArray.length - 1;
                while ((low <= high)) {
                    var mid = low + ((high - low) >> 1);
                    var midVal = sortedArray[mid];
                    if (midVal < key) {
                        low = mid + 1;
                    }
                    else if (midVal > key) {
                        high = mid - 1;
                    }
                    else {
                        return mid;
                    }
                }
                ;
                return -low - 1;
            };
            /**
             * Perform a binary search on a sorted long array.
             *
             * Note that most underlying JavaScript interpreters do not actually implement
             * longs, so the values must be stored in doubles instead. This means that
             * certain legal values cannot be represented, and comparison of two unequal
             * long values may result in unexpected results if they are not also
             * representable as doubles.
             *
             * @param sortedArray long array to search
             * @param key value to search for
             * @return the index of an element with a matching value, or a negative number
             * which is the index of the next larger value (or just past the end
             * of the array if the searched value is larger than all elements in
             * the array) minus 1 (to ensure error returns are negative)
             */
            Arrays.binarySearch$long_A$long = function (sortedArray, key) {
                var low = 0;
                var high = sortedArray.length - 1;
                while ((low <= high)) {
                    var mid = low + ((high - low) >> 1);
                    var midVal = sortedArray[mid];
                    if (midVal < key) {
                        low = mid + 1;
                    }
                    else if (midVal > key) {
                        high = mid - 1;
                    }
                    else {
                        return mid;
                    }
                }
                ;
                return -low - 1;
            };
            /**
             * Perform a binary search on a sorted object array, using natural ordering.
             *
             * @param sortedArray object array to search
             * @param key value to search for
             * @return the index of an element with a matching value, or a negative number
             * which is the index of the next larger value (or just past the end
             * of the array if the searched value is larger than all elements in
             * the array) minus 1 (to ensure error returns are negative)
             * @throws ClassCastException if <code>key</code> is not comparable to
             * <code>sortedArray</code>'s elements.
             */
            Arrays.binarySearch$java_lang_Object_A$java_lang_Object = function (sortedArray, key) {
                return Arrays.binarySearch(sortedArray, key, java.util.Comparators.natural());
            };
            /**
             * Perform a binary search on a sorted short array.
             *
             * @param sortedArray short array to search
             * @param key value to search for
             * @return the index of an element with a matching value, or a negative number
             * which is the index of the next larger value (or just past the end
             * of the array if the searched value is larger than all elements in
             * the array) minus 1 (to ensure error returns are negative)
             */
            Arrays.binarySearch$short_A$short = function (sortedArray, key) {
                var low = 0;
                var high = sortedArray.length - 1;
                while ((low <= high)) {
                    var mid = low + ((high - low) >> 1);
                    var midVal = sortedArray[mid];
                    if (midVal < key) {
                        low = mid + 1;
                    }
                    else if (midVal > key) {
                        high = mid - 1;
                    }
                    else {
                        return mid;
                    }
                }
                ;
                return -low - 1;
            };
            /**
             * Perform a binary search on a sorted object array, using a user-specified
             * comparison function.
             *
             * @param sortedArray object array to search
             * @param key value to search for
             * @param comparator comparision function, <code>null</code> indicates
             * <i>natural ordering</i> should be used.
             * @return the index of an element with a matching value, or a negative number
             * which is the index of the next larger value (or just past the end
             * of the array if the searched value is larger than all elements in
             * the array) minus 1 (to ensure error returns are negative)
             * @throws ClassCastException if <code>key</code> and
             * <code>sortedArray</code>'s elements cannot be compared by
             * <code>comparator</code>.
             */
            Arrays.binarySearch = function (sortedArray, key, comparator) {
                if (((sortedArray != null && sortedArray instanceof Array) || sortedArray === null) && ((key != null) || key === null) && ((comparator != null && comparator["__interfaces"] != null && comparator["__interfaces"].indexOf("java.util.Comparator") >= 0) || comparator === null)) {
                    return (function () {
                        if (comparator == null) {
                            comparator = java.util.Comparators.natural();
                        }
                        var low = 0;
                        var high = sortedArray.length - 1;
                        while ((low <= high)) {
                            var mid = low + ((high - low) >> 1);
                            var midVal = sortedArray[mid];
                            var compareResult = comparator.compare(midVal, key);
                            if (compareResult < 0) {
                                low = mid + 1;
                            }
                            else if (compareResult > 0) {
                                high = mid - 1;
                            }
                            else {
                                return mid;
                            }
                        }
                        ;
                        return -low - 1;
                    })();
                }
                else if (((sortedArray != null && sortedArray instanceof Array) || sortedArray === null) && ((typeof key === 'number') || key === null) && comparator === undefined) {
                    return java.util.Arrays.binarySearch$byte_A$byte(sortedArray, key);
                }
                else if (((sortedArray != null && sortedArray instanceof Array) || sortedArray === null) && ((typeof key === 'string') || key === null) && comparator === undefined) {
                    return java.util.Arrays.binarySearch$char_A$char(sortedArray, key);
                }
                else if (((sortedArray != null && sortedArray instanceof Array) || sortedArray === null) && ((typeof key === 'number') || key === null) && comparator === undefined) {
                    return java.util.Arrays.binarySearch$short_A$short(sortedArray, key);
                }
                else if (((sortedArray != null && sortedArray instanceof Array) || sortedArray === null) && ((typeof key === 'number') || key === null) && comparator === undefined) {
                    return java.util.Arrays.binarySearch$int_A$int(sortedArray, key);
                }
                else if (((sortedArray != null && sortedArray instanceof Array) || sortedArray === null) && ((typeof key === 'number') || key === null) && comparator === undefined) {
                    return java.util.Arrays.binarySearch$long_A$long(sortedArray, key);
                }
                else if (((sortedArray != null && sortedArray instanceof Array) || sortedArray === null) && ((typeof key === 'number') || key === null) && comparator === undefined) {
                    return java.util.Arrays.binarySearch$float_A$float(sortedArray, key);
                }
                else if (((sortedArray != null && sortedArray instanceof Array) || sortedArray === null) && ((typeof key === 'number') || key === null) && comparator === undefined) {
                    return java.util.Arrays.binarySearch$double_A$double(sortedArray, key);
                }
                else if (((sortedArray != null && sortedArray instanceof Array) || sortedArray === null) && ((key != null) || key === null) && comparator === undefined) {
                    return java.util.Arrays.binarySearch$java_lang_Object_A$java_lang_Object(sortedArray, key);
                }
                else
                    throw new Error('invalid overload');
            };
            Arrays.copyOf = function (original, newLength) {
                if (((original != null && original instanceof Array) || original === null) && ((typeof newLength === 'number') || newLength === null)) {
                    return (function () {
                        javaemul.internal.InternalPreconditions.checkArraySize(newLength);
                        return Arrays.copyOfRange(original, 0, newLength);
                    })();
                }
                else if (((original != null && original instanceof Array) || original === null) && ((typeof newLength === 'number') || newLength === null)) {
                    return java.util.Arrays.copyOf$byte_A$int(original, newLength);
                }
                else if (((original != null && original instanceof Array) || original === null) && ((typeof newLength === 'number') || newLength === null)) {
                    return java.util.Arrays.copyOf$char_A$int(original, newLength);
                }
                else if (((original != null && original instanceof Array) || original === null) && ((typeof newLength === 'number') || newLength === null)) {
                    return java.util.Arrays.copyOf$double_A$int(original, newLength);
                }
                else if (((original != null && original instanceof Array) || original === null) && ((typeof newLength === 'number') || newLength === null)) {
                    return java.util.Arrays.copyOf$float_A$int(original, newLength);
                }
                else if (((original != null && original instanceof Array) || original === null) && ((typeof newLength === 'number') || newLength === null)) {
                    return java.util.Arrays.copyOf$int_A$int(original, newLength);
                }
                else if (((original != null && original instanceof Array) || original === null) && ((typeof newLength === 'number') || newLength === null)) {
                    return java.util.Arrays.copyOf$long_A$int(original, newLength);
                }
                else if (((original != null && original instanceof Array) || original === null) && ((typeof newLength === 'number') || newLength === null)) {
                    return java.util.Arrays.copyOf$short_A$int(original, newLength);
                }
                else if (((original != null && original instanceof Array) || original === null) && ((typeof newLength === 'number') || newLength === null)) {
                    return java.util.Arrays.copyOf$java_lang_Object_A$int(original, newLength);
                }
                else
                    throw new Error('invalid overload');
            };
            Arrays.copyOf$byte_A$int = function (original, newLength) {
                javaemul.internal.InternalPreconditions.checkArraySize(newLength);
                return Arrays.copyOfRange(original, 0, newLength);
            };
            Arrays.copyOf$char_A$int = function (original, newLength) {
                javaemul.internal.InternalPreconditions.checkArraySize(newLength);
                return Arrays.copyOfRange(original, 0, newLength);
            };
            Arrays.copyOf$double_A$int = function (original, newLength) {
                javaemul.internal.InternalPreconditions.checkArraySize(newLength);
                return Arrays.copyOfRange(original, 0, newLength);
            };
            Arrays.copyOf$float_A$int = function (original, newLength) {
                javaemul.internal.InternalPreconditions.checkArraySize(newLength);
                return Arrays.copyOfRange(original, 0, newLength);
            };
            Arrays.copyOf$int_A$int = function (original, newLength) {
                javaemul.internal.InternalPreconditions.checkArraySize(newLength);
                return Arrays.copyOfRange(original, 0, newLength);
            };
            Arrays.copyOf$long_A$int = function (original, newLength) {
                javaemul.internal.InternalPreconditions.checkArraySize(newLength);
                return Arrays.copyOfRange(original, 0, newLength);
            };
            Arrays.copyOf$short_A$int = function (original, newLength) {
                javaemul.internal.InternalPreconditions.checkArraySize(newLength);
                return Arrays.copyOfRange(original, 0, newLength);
            };
            Arrays.copyOf$java_lang_Object_A$int = function (original, newLength) {
                javaemul.internal.InternalPreconditions.checkArraySize(newLength);
                javaemul.internal.InternalPreconditions.checkNotNull(original, "original");
                var clone = javaemul.internal.ArrayHelper.clone(original, 0, newLength);
                javaemul.internal.ArrayHelper.setLength(clone, newLength);
                return clone;
            };
            Arrays.copyOfRange = function (original, from, to) {
                if (((original != null && original instanceof Array) || original === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null)) {
                    return (function () {
                        var len = Arrays.getCopyLength(original, from, to);
                        var copy = new Array(to - from);
                        javaemul.internal.ArrayHelper.copy(original, from, copy, 0, len);
                        return copy;
                    })();
                }
                else if (((original != null && original instanceof Array) || original === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null)) {
                    return java.util.Arrays.copyOfRange$byte_A$int$int(original, from, to);
                }
                else if (((original != null && original instanceof Array) || original === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null)) {
                    return java.util.Arrays.copyOfRange$char_A$int$int(original, from, to);
                }
                else if (((original != null && original instanceof Array) || original === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null)) {
                    return java.util.Arrays.copyOfRange$double_A$int$int(original, from, to);
                }
                else if (((original != null && original instanceof Array) || original === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null)) {
                    return java.util.Arrays.copyOfRange$float_A$int$int(original, from, to);
                }
                else if (((original != null && original instanceof Array) || original === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null)) {
                    return java.util.Arrays.copyOfRange$int_A$int$int(original, from, to);
                }
                else if (((original != null && original instanceof Array) || original === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null)) {
                    return java.util.Arrays.copyOfRange$long_A$int$int(original, from, to);
                }
                else if (((original != null && original instanceof Array) || original === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null)) {
                    return java.util.Arrays.copyOfRange$short_A$int$int(original, from, to);
                }
                else if (((original != null && original instanceof Array) || original === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null)) {
                    return java.util.Arrays.copyOfRange$java_lang_Object_A$int$int(original, from, to);
                }
                else
                    throw new Error('invalid overload');
            };
            Arrays.copyOfRange$byte_A$int$int = function (original, from, to) {
                var len = Arrays.getCopyLength(original, from, to);
                var copy = new Array(to - from);
                javaemul.internal.ArrayHelper.copy(original, from, copy, 0, len);
                return copy;
            };
            Arrays.copyOfRange$char_A$int$int = function (original, from, to) {
                var len = Arrays.getCopyLength(original, from, to);
                var copy = new Array(to - from);
                javaemul.internal.ArrayHelper.copy(original, from, copy, 0, len);
                return copy;
            };
            Arrays.copyOfRange$double_A$int$int = function (original, from, to) {
                var len = Arrays.getCopyLength(original, from, to);
                var copy = new Array(to - from);
                javaemul.internal.ArrayHelper.copy(original, from, copy, 0, len);
                return copy;
            };
            Arrays.copyOfRange$float_A$int$int = function (original, from, to) {
                var len = Arrays.getCopyLength(original, from, to);
                var copy = new Array(to - from);
                javaemul.internal.ArrayHelper.copy(original, from, copy, 0, len);
                return copy;
            };
            Arrays.copyOfRange$int_A$int$int = function (original, from, to) {
                var len = Arrays.getCopyLength(original, from, to);
                var copy = new Array(to - from);
                javaemul.internal.ArrayHelper.copy(original, from, copy, 0, len);
                return copy;
            };
            Arrays.copyOfRange$long_A$int$int = function (original, from, to) {
                var len = Arrays.getCopyLength(original, from, to);
                var copy = new Array(to - from);
                javaemul.internal.ArrayHelper.copy(original, from, copy, 0, len);
                return copy;
            };
            Arrays.copyOfRange$short_A$int$int = function (original, from, to) {
                var len = Arrays.getCopyLength(original, from, to);
                var copy = new Array(to - from);
                javaemul.internal.ArrayHelper.copy(original, from, copy, 0, len);
                return copy;
            };
            Arrays.copyOfRange$java_lang_Object_A$int$int = function (original, from, to) {
                var len = Arrays.getCopyLength(original, from, to);
                var copy = javaemul.internal.ArrayHelper.createFrom(original, to - from);
                javaemul.internal.ArrayHelper.copy(original, from, copy, 0, len);
                return copy;
            };
            Arrays.deepEquals = function (a1, a2) {
                if (a1 === a2) {
                    return true;
                }
                if (a1 == null || a2 == null) {
                    return false;
                }
                if (a1.length !== a2.length) {
                    return false;
                }
                for (var i = 0, n = a1.length; i < n; ++i) {
                    if (!java.util.Objects.deepEquals(a1[i], a2[i])) {
                        return false;
                    }
                }
                return true;
            };
            Arrays.deepHashCode = function (a) {
                if (a == null) {
                    return 0;
                }
                var hashCode = 1;
                for (var index136 = 0; index136 < a.length; index136++) {
                    var obj = a[index136];
                    {
                        var hash;
                        if (obj != null && obj instanceof Array) {
                            hash = Arrays.deepHashCode(obj);
                        }
                        else if (obj != null && obj instanceof Array) {
                            hash = Arrays.hashCode(obj);
                        }
                        else if (obj != null && obj instanceof Array) {
                            hash = Arrays.hashCode(obj);
                        }
                        else if (obj != null && obj instanceof Array) {
                            hash = Arrays.hashCode(obj);
                        }
                        else if (obj != null && obj instanceof Array) {
                            hash = Arrays.hashCode(obj);
                        }
                        else if (obj != null && obj instanceof Array) {
                            hash = Arrays.hashCode(obj);
                        }
                        else if (obj != null && obj instanceof Array) {
                            hash = Arrays.hashCode(obj);
                        }
                        else if (obj != null && obj instanceof Array) {
                            hash = Arrays.hashCode(obj);
                        }
                        else if (obj != null && obj instanceof Array) {
                            hash = Arrays.hashCode(obj);
                        }
                        else {
                            hash = java.util.Objects.hashCode(obj);
                        }
                        hashCode = 31 * hashCode + hash;
                        hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                    }
                }
                return hashCode;
            };
            Arrays.deepToString$java_lang_Object_A = function (a) {
                return Arrays.deepToString(a, new java.util.HashSet());
            };
            Arrays.equals = function (array1, array2) {
                if (((array1 != null && array1 instanceof Array) || array1 === null) && ((array2 != null && array2 instanceof Array) || array2 === null)) {
                    return (function () {
                        if (array1 === array2) {
                            return true;
                        }
                        if (array1 == null || array2 == null) {
                            return false;
                        }
                        if (array1.length !== array2.length) {
                            return false;
                        }
                        for (var i = 0; i < array1.length; ++i) {
                            if (array1[i] !== array2[i]) {
                                return false;
                            }
                        }
                        return true;
                    })();
                }
                else if (((array1 != null && array1 instanceof Array) || array1 === null) && ((array2 != null && array2 instanceof Array) || array2 === null)) {
                    return java.util.Arrays.equals$byte_A$byte_A(array1, array2);
                }
                else if (((array1 != null && array1 instanceof Array) || array1 === null) && ((array2 != null && array2 instanceof Array) || array2 === null)) {
                    return java.util.Arrays.equals$char_A$char_A(array1, array2);
                }
                else if (((array1 != null && array1 instanceof Array) || array1 === null) && ((array2 != null && array2 instanceof Array) || array2 === null)) {
                    return java.util.Arrays.equals$double_A$double_A(array1, array2);
                }
                else if (((array1 != null && array1 instanceof Array) || array1 === null) && ((array2 != null && array2 instanceof Array) || array2 === null)) {
                    return java.util.Arrays.equals$float_A$float_A(array1, array2);
                }
                else if (((array1 != null && array1 instanceof Array) || array1 === null) && ((array2 != null && array2 instanceof Array) || array2 === null)) {
                    return java.util.Arrays.equals$int_A$int_A(array1, array2);
                }
                else if (((array1 != null && array1 instanceof Array) || array1 === null) && ((array2 != null && array2 instanceof Array) || array2 === null)) {
                    return java.util.Arrays.equals$long_A$long_A(array1, array2);
                }
                else if (((array1 != null && array1 instanceof Array) || array1 === null) && ((array2 != null && array2 instanceof Array) || array2 === null)) {
                    return java.util.Arrays.equals$java_lang_Object_A$java_lang_Object_A(array1, array2);
                }
                else if (((array1 != null && array1 instanceof Array) || array1 === null) && ((array2 != null && array2 instanceof Array) || array2 === null)) {
                    return java.util.Arrays.equals$short_A$short_A(array1, array2);
                }
                else
                    throw new Error('invalid overload');
            };
            Arrays.equals$byte_A$byte_A = function (array1, array2) {
                if (array1 === array2) {
                    return true;
                }
                if (array1 == null || array2 == null) {
                    return false;
                }
                if (array1.length !== array2.length) {
                    return false;
                }
                for (var i = 0; i < array1.length; ++i) {
                    if (array1[i] !== array2[i]) {
                        return false;
                    }
                }
                return true;
            };
            Arrays.equals$char_A$char_A = function (array1, array2) {
                if (array1 === array2) {
                    return true;
                }
                if (array1 == null || array2 == null) {
                    return false;
                }
                if (array1.length !== array2.length) {
                    return false;
                }
                for (var i = 0; i < array1.length; ++i) {
                    if (array1[i] !== array2[i]) {
                        return false;
                    }
                }
                return true;
            };
            Arrays.equals$double_A$double_A = function (array1, array2) {
                if (array1 === array2) {
                    return true;
                }
                if (array1 == null || array2 == null) {
                    return false;
                }
                if (array1.length !== array2.length) {
                    return false;
                }
                for (var i = 0; i < array1.length; ++i) {
                    if (array1[i] !== array2[i]) {
                        return false;
                    }
                }
                return true;
            };
            Arrays.equals$float_A$float_A = function (array1, array2) {
                if (array1 === array2) {
                    return true;
                }
                if (array1 == null || array2 == null) {
                    return false;
                }
                if (array1.length !== array2.length) {
                    return false;
                }
                for (var i = 0; i < array1.length; ++i) {
                    if (array1[i] !== array2[i]) {
                        return false;
                    }
                }
                return true;
            };
            Arrays.equals$int_A$int_A = function (array1, array2) {
                if (array1 === array2) {
                    return true;
                }
                if (array1 == null || array2 == null) {
                    return false;
                }
                if (array1.length !== array2.length) {
                    return false;
                }
                for (var i = 0; i < array1.length; ++i) {
                    if (array1[i] !== array2[i]) {
                        return false;
                    }
                }
                return true;
            };
            Arrays.equals$long_A$long_A = function (array1, array2) {
                if (array1 === array2) {
                    return true;
                }
                if (array1 == null || array2 == null) {
                    return false;
                }
                if (array1.length !== array2.length) {
                    return false;
                }
                for (var i = 0; i < array1.length; ++i) {
                    if (array1[i] !== array2[i]) {
                        return false;
                    }
                }
                return true;
            };
            Arrays.equals$java_lang_Object_A$java_lang_Object_A = function (array1, array2) {
                if (array1 === array2) {
                    return true;
                }
                if (array1 == null || array2 == null) {
                    return false;
                }
                if (array1.length !== array2.length) {
                    return false;
                }
                for (var i = 0; i < array1.length; ++i) {
                    var val1 = array1[i];
                    var val2 = array2[i];
                    if (!java.util.Objects.equals(val1, val2)) {
                        return false;
                    }
                }
                return true;
            };
            Arrays.equals$short_A$short_A = function (array1, array2) {
                if (array1 === array2) {
                    return true;
                }
                if (array1 == null || array2 == null) {
                    return false;
                }
                if (array1.length !== array2.length) {
                    return false;
                }
                for (var i = 0; i < array1.length; ++i) {
                    if (array1[i] !== array2[i]) {
                        return false;
                    }
                }
                return true;
            };
            Arrays.fill$boolean_A$boolean = function (a, val) {
                Arrays.fill(a, 0, a.length, val);
            };
            Arrays.fill = function (a, fromIndex, toIndex, val) {
                if (((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && ((typeof val === 'boolean') || val === null)) {
                    return (function () {
                        for (var i = fromIndex; i < toIndex; ++i) {
                            a[i] = val;
                        }
                    })();
                }
                else if (((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && ((typeof val === 'number') || val === null)) {
                    return java.util.Arrays.fill$byte_A$int$int$byte(a, fromIndex, toIndex, val);
                }
                else if (((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && ((typeof val === 'string') || val === null)) {
                    return java.util.Arrays.fill$char_A$int$int$char(a, fromIndex, toIndex, val);
                }
                else if (((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && ((typeof val === 'number') || val === null)) {
                    return java.util.Arrays.fill$short_A$int$int$short(a, fromIndex, toIndex, val);
                }
                else if (((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && ((typeof val === 'number') || val === null)) {
                    return java.util.Arrays.fill$int_A$int$int$int(a, fromIndex, toIndex, val);
                }
                else if (((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && ((typeof val === 'number') || val === null)) {
                    return java.util.Arrays.fill$long_A$int$int$long(a, fromIndex, toIndex, val);
                }
                else if (((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && ((typeof val === 'number') || val === null)) {
                    return java.util.Arrays.fill$float_A$int$int$float(a, fromIndex, toIndex, val);
                }
                else if (((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && ((typeof val === 'number') || val === null)) {
                    return java.util.Arrays.fill$double_A$int$int$double(a, fromIndex, toIndex, val);
                }
                else if (((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && ((val != null) || val === null)) {
                    return java.util.Arrays.fill$java_lang_Object_A$int$int$java_lang_Object(a, fromIndex, toIndex, val);
                }
                else if (((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'boolean') || fromIndex === null) && toIndex === undefined && val === undefined) {
                    return java.util.Arrays.fill$boolean_A$boolean(a, fromIndex);
                }
                else if (((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && toIndex === undefined && val === undefined) {
                    return java.util.Arrays.fill$byte_A$byte(a, fromIndex);
                }
                else if (((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'string') || fromIndex === null) && toIndex === undefined && val === undefined) {
                    return java.util.Arrays.fill$char_A$char(a, fromIndex);
                }
                else if (((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && toIndex === undefined && val === undefined) {
                    return java.util.Arrays.fill$short_A$short(a, fromIndex);
                }
                else if (((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && toIndex === undefined && val === undefined) {
                    return java.util.Arrays.fill$int_A$int(a, fromIndex);
                }
                else if (((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && toIndex === undefined && val === undefined) {
                    return java.util.Arrays.fill$long_A$long(a, fromIndex);
                }
                else if (((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && toIndex === undefined && val === undefined) {
                    return java.util.Arrays.fill$float_A$float(a, fromIndex);
                }
                else if (((a != null && a instanceof Array) || a === null) && ((typeof fromIndex === 'number') || fromIndex === null) && toIndex === undefined && val === undefined) {
                    return java.util.Arrays.fill$double_A$double(a, fromIndex);
                }
                else if (((a != null && a instanceof Array) || a === null) && ((fromIndex != null) || fromIndex === null) && toIndex === undefined && val === undefined) {
                    return java.util.Arrays.fill$java_lang_Object_A$java_lang_Object(a, fromIndex);
                }
                else
                    throw new Error('invalid overload');
            };
            Arrays.fill$byte_A$byte = function (a, val) {
                Arrays.fill(a, 0, a.length, val);
            };
            Arrays.fill$byte_A$int$int$byte = function (a, fromIndex, toIndex, val) {
                for (var i = fromIndex; i < toIndex; ++i) {
                    a[i] = val;
                }
            };
            Arrays.fill$char_A$char = function (a, val) {
                Arrays.fill(a, 0, a.length, val);
            };
            Arrays.fill$char_A$int$int$char = function (a, fromIndex, toIndex, val) {
                for (var i = fromIndex; i < toIndex; ++i) {
                    a[i] = val;
                }
            };
            Arrays.fill$double_A$double = function (a, val) {
                Arrays.fill(a, 0, a.length, val);
            };
            Arrays.fill$double_A$int$int$double = function (a, fromIndex, toIndex, val) {
                for (var i = fromIndex; i < toIndex; ++i) {
                    a[i] = val;
                }
            };
            Arrays.fill$float_A$float = function (a, val) {
                Arrays.fill(a, 0, a.length, val);
            };
            Arrays.fill$float_A$int$int$float = function (a, fromIndex, toIndex, val) {
                for (var i = fromIndex; i < toIndex; ++i) {
                    a[i] = val;
                }
            };
            Arrays.fill$int_A$int = function (a, val) {
                Arrays.fill(a, 0, a.length, val);
            };
            Arrays.fill$int_A$int$int$int = function (a, fromIndex, toIndex, val) {
                for (var i = fromIndex; i < toIndex; ++i) {
                    a[i] = val;
                }
            };
            Arrays.fill$long_A$int$int$long = function (a, fromIndex, toIndex, val) {
                for (var i = fromIndex; i < toIndex; ++i) {
                    a[i] = val;
                }
            };
            Arrays.fill$long_A$long = function (a, val) {
                Arrays.fill(a, 0, a.length, val);
            };
            Arrays.fill$java_lang_Object_A$int$int$java_lang_Object = function (a, fromIndex, toIndex, val) {
                for (var i = fromIndex; i < toIndex; ++i) {
                    a[i] = val;
                }
            };
            Arrays.fill$java_lang_Object_A$java_lang_Object = function (a, val) {
                Arrays.fill(a, 0, a.length, val);
            };
            Arrays.fill$short_A$int$int$short = function (a, fromIndex, toIndex, val) {
                for (var i = fromIndex; i < toIndex; ++i) {
                    a[i] = val;
                }
            };
            Arrays.fill$short_A$short = function (a, val) {
                Arrays.fill(a, 0, a.length, val);
            };
            Arrays.hashCode = function (a) {
                if (((a != null && a instanceof Array) || a === null)) {
                    return (function () {
                        if (a == null) {
                            return 0;
                        }
                        var hashCode = 1;
                        for (var index137 = 0; index137 < a.length; index137++) {
                            var e = a[index137];
                            {
                                hashCode = 31 * hashCode + javaemul.internal.BooleanHelper.hashCode(e);
                                hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                            }
                        }
                        return hashCode;
                    })();
                }
                else if (((a != null && a instanceof Array) || a === null)) {
                    return java.util.Arrays.hashCode$byte_A(a);
                }
                else if (((a != null && a instanceof Array) || a === null)) {
                    return java.util.Arrays.hashCode$char_A(a);
                }
                else if (((a != null && a instanceof Array) || a === null)) {
                    return java.util.Arrays.hashCode$double_A(a);
                }
                else if (((a != null && a instanceof Array) || a === null)) {
                    return java.util.Arrays.hashCode$float_A(a);
                }
                else if (((a != null && a instanceof Array) || a === null)) {
                    return java.util.Arrays.hashCode$int_A(a);
                }
                else if (((a != null && a instanceof Array) || a === null)) {
                    return java.util.Arrays.hashCode$long_A(a);
                }
                else if (((a != null && a instanceof Array) || a === null)) {
                    return java.util.Arrays.hashCode$java_lang_Object_A(a);
                }
                else if (((a != null && a instanceof Array) || a === null)) {
                    return java.util.Arrays.hashCode$short_A(a);
                }
                else
                    throw new Error('invalid overload');
            };
            Arrays.hashCode$byte_A = function (a) {
                if (a == null) {
                    return 0;
                }
                var hashCode = 1;
                for (var index138 = 0; index138 < a.length; index138++) {
                    var e = a[index138];
                    {
                        hashCode = 31 * hashCode + javaemul.internal.ByteHelper.hashCode(e);
                        hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                    }
                }
                return hashCode;
            };
            Arrays.hashCode$char_A = function (a) {
                if (a == null) {
                    return 0;
                }
                var hashCode = 1;
                for (var index139 = 0; index139 < a.length; index139++) {
                    var e = a[index139];
                    {
                        hashCode = 31 * hashCode + javaemul.internal.CharacterHelper.hashCode(e);
                        hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                    }
                }
                return hashCode;
            };
            Arrays.hashCode$double_A = function (a) {
                if (a == null) {
                    return 0;
                }
                var hashCode = 1;
                for (var index140 = 0; index140 < a.length; index140++) {
                    var e = a[index140];
                    {
                        hashCode = 31 * hashCode + javaemul.internal.DoubleHelper.hashCode(e);
                        hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                    }
                }
                return hashCode;
            };
            Arrays.hashCode$float_A = function (a) {
                if (a == null) {
                    return 0;
                }
                var hashCode = 1;
                for (var index141 = 0; index141 < a.length; index141++) {
                    var e = a[index141];
                    {
                        hashCode = 31 * hashCode + javaemul.internal.FloatHelper.hashCode(e);
                        hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                    }
                }
                return hashCode;
            };
            Arrays.hashCode$int_A = function (a) {
                if (a == null) {
                    return 0;
                }
                var hashCode = 1;
                for (var index142 = 0; index142 < a.length; index142++) {
                    var e = a[index142];
                    {
                        hashCode = 31 * hashCode + javaemul.internal.IntegerHelper.hashCode(e);
                        hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                    }
                }
                return hashCode;
            };
            Arrays.hashCode$long_A = function (a) {
                if (a == null) {
                    return 0;
                }
                var hashCode = 1;
                for (var index143 = 0; index143 < a.length; index143++) {
                    var e = a[index143];
                    {
                        hashCode = 31 * hashCode + javaemul.internal.LongHelper.hashCode(e);
                        hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                    }
                }
                return hashCode;
            };
            Arrays.hashCode$java_lang_Object_A = function (a) {
                if (a == null) {
                    return 0;
                }
                var hashCode = 1;
                for (var index144 = 0; index144 < a.length; index144++) {
                    var e = a[index144];
                    {
                        hashCode = 31 * hashCode + java.util.Objects.hashCode(e);
                        hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                    }
                }
                return hashCode;
            };
            Arrays.hashCode$short_A = function (a) {
                if (a == null) {
                    return 0;
                }
                var hashCode = 1;
                for (var index145 = 0; index145 < a.length; index145++) {
                    var e = a[index145];
                    {
                        hashCode = 31 * hashCode + javaemul.internal.ShortHelper.hashCode(e);
                        hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                    }
                }
                return hashCode;
            };
            Arrays.sort$byte_A = function (array) {
                Arrays.nativeNumberSort(array);
            };
            Arrays.sort$byte_A$int$int = function (array, fromIndex, toIndex) {
                javaemul.internal.InternalPreconditions.checkPositionIndexes(fromIndex, toIndex, array.length);
                Arrays.nativeNumberSort(array, fromIndex, toIndex);
            };
            Arrays.sort$char_A = function (array) {
                Arrays.nativeNumberSort(array);
            };
            Arrays.sort$char_A$int$int = function (array, fromIndex, toIndex) {
                javaemul.internal.InternalPreconditions.checkPositionIndexes(fromIndex, toIndex, array.length);
                Arrays.nativeNumberSort(array, fromIndex, toIndex);
            };
            Arrays.sort$double_A = function (array) {
                Arrays.nativeNumberSort(array);
            };
            Arrays.sort$double_A$int$int = function (array, fromIndex, toIndex) {
                javaemul.internal.InternalPreconditions.checkPositionIndexes(fromIndex, toIndex, array.length);
                Arrays.nativeNumberSort(array, fromIndex, toIndex);
            };
            Arrays.sort$float_A = function (array) {
                Arrays.nativeNumberSort(array);
            };
            Arrays.sort$float_A$int$int = function (array, fromIndex, toIndex) {
                javaemul.internal.InternalPreconditions.checkPositionIndexes(fromIndex, toIndex, array.length);
                Arrays.nativeNumberSort(array, fromIndex, toIndex);
            };
            Arrays.sort$int_A = function (array) {
                Arrays.nativeNumberSort(array);
            };
            Arrays.sort$int_A$int$int = function (array, fromIndex, toIndex) {
                javaemul.internal.InternalPreconditions.checkPositionIndexes(fromIndex, toIndex, array.length);
                Arrays.nativeNumberSort(array, fromIndex, toIndex);
            };
            Arrays.sort$long_A = function (array) {
                Arrays.nativeLongSort(array, javaemul.internal.LongCompareHolder.getLongComparator());
            };
            Arrays.sort$long_A$int$int = function (array, fromIndex, toIndex) {
                javaemul.internal.InternalPreconditions.checkPositionIndexes(fromIndex, toIndex, array.length);
                Arrays.nativeLongSort(array, fromIndex, toIndex);
            };
            Arrays.sort$java_lang_Object_A = function (array) {
                Arrays.mergeSort(array, 0, array.length, java.util.Comparators.natural());
            };
            Arrays.sort$java_lang_Object_A$int$int = function (x, fromIndex, toIndex) {
                Arrays.mergeSort(x, fromIndex, toIndex, java.util.Comparators.natural());
            };
            Arrays.sort$short_A = function (array) {
                Arrays.nativeNumberSort(array);
            };
            Arrays.sort$short_A$int$int = function (array, fromIndex, toIndex) {
                javaemul.internal.InternalPreconditions.checkPositionIndexes(fromIndex, toIndex, array.length);
                Arrays.nativeNumberSort(array, fromIndex, toIndex);
            };
            Arrays.sort$java_lang_Object_A$java_util_Comparator = function (x, c) {
                Arrays.mergeSort(x, 0, x.length, c);
            };
            Arrays.sort = function (x, fromIndex, toIndex, c) {
                if (((x != null && x instanceof Array) || x === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && ((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Comparator") >= 0) || c === null)) {
                    return (function () {
                        javaemul.internal.InternalPreconditions.checkPositionIndexes(fromIndex, toIndex, x.length);
                        Arrays.mergeSort(x, fromIndex, toIndex, c);
                    })();
                }
                else if (((x != null && x instanceof Array) || x === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && c === undefined) {
                    return java.util.Arrays.sort$byte_A$int$int(x, fromIndex, toIndex);
                }
                else if (((x != null && x instanceof Array) || x === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && c === undefined) {
                    return java.util.Arrays.sort$char_A$int$int(x, fromIndex, toIndex);
                }
                else if (((x != null && x instanceof Array) || x === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && c === undefined) {
                    return java.util.Arrays.sort$double_A$int$int(x, fromIndex, toIndex);
                }
                else if (((x != null && x instanceof Array) || x === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && c === undefined) {
                    return java.util.Arrays.sort$float_A$int$int(x, fromIndex, toIndex);
                }
                else if (((x != null && x instanceof Array) || x === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && c === undefined) {
                    return java.util.Arrays.sort$int_A$int$int(x, fromIndex, toIndex);
                }
                else if (((x != null && x instanceof Array) || x === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && c === undefined) {
                    return java.util.Arrays.sort$long_A$int$int(x, fromIndex, toIndex);
                }
                else if (((x != null && x instanceof Array) || x === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && c === undefined) {
                    return java.util.Arrays.sort$java_lang_Object_A$int$int(x, fromIndex, toIndex);
                }
                else if (((x != null && x instanceof Array) || x === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null) && c === undefined) {
                    return java.util.Arrays.sort$short_A$int$int(x, fromIndex, toIndex);
                }
                else if (((x != null && x instanceof Array) || x === null) && ((fromIndex != null && fromIndex["__interfaces"] != null && fromIndex["__interfaces"].indexOf("java.util.Comparator") >= 0) || fromIndex === null) && toIndex === undefined && c === undefined) {
                    return java.util.Arrays.sort$java_lang_Object_A$java_util_Comparator(x, fromIndex);
                }
                else if (((x != null && x instanceof Array) || x === null) && fromIndex === undefined && toIndex === undefined && c === undefined) {
                    return java.util.Arrays.sort$byte_A(x);
                }
                else if (((x != null && x instanceof Array) || x === null) && fromIndex === undefined && toIndex === undefined && c === undefined) {
                    return java.util.Arrays.sort$char_A(x);
                }
                else if (((x != null && x instanceof Array) || x === null) && fromIndex === undefined && toIndex === undefined && c === undefined) {
                    return java.util.Arrays.sort$double_A(x);
                }
                else if (((x != null && x instanceof Array) || x === null) && fromIndex === undefined && toIndex === undefined && c === undefined) {
                    return java.util.Arrays.sort$float_A(x);
                }
                else if (((x != null && x instanceof Array) || x === null) && fromIndex === undefined && toIndex === undefined && c === undefined) {
                    return java.util.Arrays.sort$int_A(x);
                }
                else if (((x != null && x instanceof Array) || x === null) && fromIndex === undefined && toIndex === undefined && c === undefined) {
                    return java.util.Arrays.sort$long_A(x);
                }
                else if (((x != null && x instanceof Array) || x === null) && fromIndex === undefined && toIndex === undefined && c === undefined) {
                    return java.util.Arrays.sort$java_lang_Object_A(x);
                }
                else if (((x != null && x instanceof Array) || x === null) && fromIndex === undefined && toIndex === undefined && c === undefined) {
                    return java.util.Arrays.sort$short_A(x);
                }
                else
                    throw new Error('invalid overload');
            };
            Arrays.toString = function (a) {
                if (((a != null && a instanceof Array) || a === null)) {
                    return (function () {
                        if (a == null) {
                            return "null";
                        }
                        var joiner = new java.util.StringJoiner(", ", "[", "]");
                        for (var index146 = 0; index146 < a.length; index146++) {
                            var element = a[index146];
                            {
                                joiner.add(/* valueOf */ new String(element).toString());
                            }
                        }
                        return joiner.toString();
                    })();
                }
                else if (((a != null && a instanceof Array) || a === null)) {
                    return java.util.Arrays.toString$byte_A(a);
                }
                else if (((a != null && a instanceof Array) || a === null)) {
                    return java.util.Arrays.toString$char_A(a);
                }
                else if (((a != null && a instanceof Array) || a === null)) {
                    return java.util.Arrays.toString$double_A(a);
                }
                else if (((a != null && a instanceof Array) || a === null)) {
                    return java.util.Arrays.toString$float_A(a);
                }
                else if (((a != null && a instanceof Array) || a === null)) {
                    return java.util.Arrays.toString$int_A(a);
                }
                else if (((a != null && a instanceof Array) || a === null)) {
                    return java.util.Arrays.toString$long_A(a);
                }
                else if (((a != null && a instanceof Array) || a === null)) {
                    return java.util.Arrays.toString$java_lang_Object_A(a);
                }
                else if (((a != null && a instanceof Array) || a === null)) {
                    return java.util.Arrays.toString$short_A(a);
                }
                else
                    throw new Error('invalid overload');
            };
            Arrays.toString$byte_A = function (a) {
                if (a == null) {
                    return "null";
                }
                var joiner = new java.util.StringJoiner(", ", "[", "]");
                for (var index147 = 0; index147 < a.length; index147++) {
                    var element = a[index147];
                    {
                        joiner.add(/* valueOf */ new String(element).toString());
                    }
                }
                return joiner.toString();
            };
            Arrays.toString$char_A = function (a) {
                if (a == null) {
                    return "null";
                }
                var joiner = new java.util.StringJoiner(", ", "[", "]");
                for (var index148 = 0; index148 < a.length; index148++) {
                    var element = a[index148];
                    {
                        joiner.add(/* valueOf */ new String(element).toString());
                    }
                }
                return joiner.toString();
            };
            Arrays.toString$double_A = function (a) {
                if (a == null) {
                    return "null";
                }
                var joiner = new java.util.StringJoiner(", ", "[", "]");
                for (var index149 = 0; index149 < a.length; index149++) {
                    var element = a[index149];
                    {
                        joiner.add(/* valueOf */ new String(element).toString());
                    }
                }
                return joiner.toString();
            };
            Arrays.toString$float_A = function (a) {
                if (a == null) {
                    return "null";
                }
                var joiner = new java.util.StringJoiner(", ", "[", "]");
                for (var index150 = 0; index150 < a.length; index150++) {
                    var element = a[index150];
                    {
                        joiner.add(/* valueOf */ new String(element).toString());
                    }
                }
                return joiner.toString();
            };
            Arrays.toString$int_A = function (a) {
                if (a == null) {
                    return "null";
                }
                var joiner = new java.util.StringJoiner(", ", "[", "]");
                for (var index151 = 0; index151 < a.length; index151++) {
                    var element = a[index151];
                    {
                        joiner.add(/* valueOf */ new String(element).toString());
                    }
                }
                return joiner.toString();
            };
            Arrays.toString$long_A = function (a) {
                if (a == null) {
                    return "null";
                }
                var joiner = new java.util.StringJoiner(", ", "[", "]");
                for (var index152 = 0; index152 < a.length; index152++) {
                    var element = a[index152];
                    {
                        joiner.add(/* valueOf */ new String(element).toString());
                    }
                }
                return joiner.toString();
            };
            Arrays.toString$java_lang_Object_A = function (x) {
                if (x == null) {
                    return "null";
                }
                return Arrays.asList(x).toString();
            };
            Arrays.toString$short_A = function (a) {
                if (a == null) {
                    return "null";
                }
                var joiner = new java.util.StringJoiner(", ", "[", "]");
                for (var index153 = 0; index153 < a.length; index153++) {
                    var element = a[index153];
                    {
                        joiner.add(/* valueOf */ new String(element).toString());
                    }
                }
                return joiner.toString();
            };
            /**
             * Recursive helper function for {@link Arrays#deepToString(Object[])}.
             */
            Arrays.deepToString = function (a, arraysIveSeen) {
                if (((a != null && a instanceof Array) || a === null) && ((arraysIveSeen != null && arraysIveSeen["__interfaces"] != null && arraysIveSeen["__interfaces"].indexOf("java.util.Set") >= 0) || arraysIveSeen === null)) {
                    return (function () {
                        if (a == null) {
                            return "null";
                        }
                        if (!arraysIveSeen.add(a)) {
                            return "[...]";
                        }
                        var joiner = new java.util.StringJoiner(", ", "[", "]");
                        for (var index154 = 0; index154 < a.length; index154++) {
                            var obj = a[index154];
                            {
                                if (obj != null && obj.getClass().isArray()) {
                                    if (obj != null && obj instanceof Array) {
                                        if (arraysIveSeen.contains(obj)) {
                                            joiner.add("[...]");
                                        }
                                        else {
                                            var objArray = obj;
                                            var tempSet = new java.util.HashSet(arraysIveSeen);
                                            joiner.add(Arrays.deepToString(objArray, tempSet));
                                        }
                                    }
                                    else if (obj != null && obj instanceof Array) {
                                        joiner.add(Arrays.toString(obj));
                                    }
                                    else if (obj != null && obj instanceof Array) {
                                        joiner.add(Arrays.toString(obj));
                                    }
                                    else if (obj != null && obj instanceof Array) {
                                        joiner.add(Arrays.toString(obj));
                                    }
                                    else if (obj != null && obj instanceof Array) {
                                        joiner.add(Arrays.toString(obj));
                                    }
                                    else if (obj != null && obj instanceof Array) {
                                        joiner.add(Arrays.toString(obj));
                                    }
                                    else if (obj != null && obj instanceof Array) {
                                        joiner.add(Arrays.toString(obj));
                                    }
                                    else if (obj != null && obj instanceof Array) {
                                        joiner.add(Arrays.toString(obj));
                                    }
                                    else if (obj != null && obj instanceof Array) {
                                        joiner.add(Arrays.toString(obj));
                                    }
                                    else {
                                    }
                                }
                                else {
                                    joiner.add(/* valueOf */ new String(obj).toString());
                                }
                            }
                        }
                        return joiner.toString();
                    })();
                }
                else if (((a != null && a instanceof Array) || a === null) && arraysIveSeen === undefined) {
                    return java.util.Arrays.deepToString$java_lang_Object_A(a);
                }
                else
                    throw new Error('invalid overload');
            };
            Arrays.getCopyLength = function (array, from, to) {
                javaemul.internal.InternalPreconditions.checkArgument(from <= to, "%s > %s", from, to);
                var len = javaemul.internal.ArrayHelper.getLength(array);
                to = Math.min(to, len);
                javaemul.internal.InternalPreconditions.checkCriticalPositionIndexes(from, to, len);
                return to - from;
            };
            /**
             * Sort a small subsection of an array by insertion sort.
             *
             * @param array array to sort
             * @param low lower bound of range to sort
             * @param high upper bound of range to sort
             * @param comp comparator to use
             */
            Arrays.insertionSort = function (array, low, high, comp) {
                for (var i = low + 1; i < high; ++i) {
                    for (var j = i; j > low && comp.compare(array[j - 1], array[j]) > 0; --j) {
                        var t = array[j];
                        array[j] = array[j - 1];
                        array[j - 1] = t;
                    }
                }
            };
            /**
             * Merge the two sorted subarrays (srcLow,srcMid] and (srcMid,srcHigh] into
             * dest.
             *
             * @param src source array for merge
             * @param srcLow lower bound of bottom sorted half
             * @param srcMid upper bound of bottom sorted half & lower bound of top sorted
             * half
             * @param srcHigh upper bound of top sorted half
             * @param dest destination array for merge
             * @param destLow lower bound of destination
             * @param destHigh upper bound of destination
             * @param comp comparator to use
             */
            Arrays.merge = function (src, srcLow, srcMid, srcHigh, dest, destLow, destHigh, comp) {
                var topIdx = srcMid;
                while ((destLow < destHigh)) {
                    if (topIdx >= srcHigh || (srcLow < srcMid && comp.compare(src[srcLow], src[topIdx]) <= 0)) {
                        dest[destLow++] = src[srcLow++];
                    }
                    else {
                        dest[destLow++] = src[topIdx++];
                    }
                }
                ;
            };
            /**
             * Performs a merge sort on the specified portion of an object array.
             *
             * Uses O(n) temporary space to perform the merge, but is stable.
             */
            Arrays.mergeSort$java_lang_Object_A$int$int$java_util_Comparator = function (x, fromIndex, toIndex, comp) {
                if (comp == null) {
                    comp = java.util.Comparators.natural();
                }
                var temp = Arrays.copyOfRange(x, fromIndex, toIndex);
                Arrays.mergeSort(temp, x, fromIndex, toIndex, -fromIndex, comp);
            };
            /**
             * Recursive helper function for
             * {@link Arrays#mergeSort(Object[], int, int, Comparator)}.
             *
             * @param temp temporary space, as large as the range of elements being
             * sorted. On entry, temp should contain a copy of the sort range
             * from array.
             * @param array array to sort
             * @param low lower bound of range to sort
             * @param high upper bound of range to sort
             * @param ofs offset to convert an array index into a temp index
             * @param comp comparison function
             */
            Arrays.mergeSort = function (temp, array, low, high, ofs, comp) {
                if (((temp != null && temp instanceof Array) || temp === null) && ((array != null && array instanceof Array) || array === null) && ((typeof low === 'number') || low === null) && ((typeof high === 'number') || high === null) && ((typeof ofs === 'number') || ofs === null) && ((comp != null && comp["__interfaces"] != null && comp["__interfaces"].indexOf("java.util.Comparator") >= 0) || comp === null)) {
                    return (function () {
                        var length = high - low;
                        if (length < 7) {
                            Arrays.insertionSort(array, low, high, comp);
                            return;
                        }
                        var tempLow = low + ofs;
                        var tempHigh = high + ofs;
                        var tempMid = tempLow + ((tempHigh - tempLow) >> 1);
                        Arrays.mergeSort(array, temp, tempLow, tempMid, -ofs, comp);
                        Arrays.mergeSort(array, temp, tempMid, tempHigh, -ofs, comp);
                        if (comp.compare(temp[tempMid - 1], temp[tempMid]) <= 0) {
                            while ((low < high)) {
                                array[low++] = temp[tempLow++];
                            }
                            ;
                            return;
                        }
                        Arrays.merge(temp, tempLow, tempMid, tempHigh, array, low, high, comp);
                    })();
                }
                else if (((temp != null && temp instanceof Array) || temp === null) && ((typeof array === 'number') || array === null) && ((typeof low === 'number') || low === null) && ((high != null && high["__interfaces"] != null && high["__interfaces"].indexOf("java.util.Comparator") >= 0) || high === null) && ofs === undefined && comp === undefined) {
                    return java.util.Arrays.mergeSort$java_lang_Object_A$int$int$java_util_Comparator(temp, array, low, high);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Sort an entire array of number primitives.
             */
            Arrays.nativeLongSort$java_lang_Object$java_lang_Object = function (array, compareFunction) {
                array.sort(compareFunction);
            };
            /**
             * Sort a subset of an array of number primitives.
             */
            Arrays.nativeLongSort = function (array, fromIndex, toIndex) {
                if (((array != null) || array === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null)) {
                    return (function () {
                        var temp = javaemul.internal.ArrayHelper.unsafeClone(array, fromIndex, toIndex);
                        Arrays.nativeLongSort(temp, javaemul.internal.LongCompareHolder.getLongComparator());
                        javaemul.internal.ArrayHelper.copy(temp, 0, array, fromIndex, toIndex - fromIndex);
                    })();
                }
                else if (((array != null) || array === null) && ((fromIndex != null) || fromIndex === null) && toIndex === undefined) {
                    return java.util.Arrays.nativeLongSort$java_lang_Object$java_lang_Object(array, fromIndex);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Sort an entire array of number primitives.
             */
            Arrays.nativeNumberSort$java_lang_Object = function (array) {
                array.sort(function (a, b) {
                    return a - b;
                });
            };
            /**
             * Sort a subset of an array of number primitives.
             */
            Arrays.nativeNumberSort = function (array, fromIndex, toIndex) {
                if (((array != null) || array === null) && ((typeof fromIndex === 'number') || fromIndex === null) && ((typeof toIndex === 'number') || toIndex === null)) {
                    return (function () {
                        var temp = javaemul.internal.ArrayHelper.unsafeClone(array, fromIndex, toIndex);
                        Arrays.nativeNumberSort(temp);
                        javaemul.internal.ArrayHelper.copy(temp, 0, array, fromIndex, toIndex - fromIndex);
                    })();
                }
                else if (((array != null) || array === null) && fromIndex === undefined && toIndex === undefined) {
                    return java.util.Arrays.nativeNumberSort$java_lang_Object(array);
                }
                else
                    throw new Error('invalid overload');
            };
            return Arrays;
        }());
        util.Arrays = Arrays;
        var Arrays;
        (function (Arrays) {
            var ArrayList = (function (_super) {
                __extends(ArrayList, _super);
                function ArrayList(array) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess", "java.util.List", "java.util.Collection", "java.lang.Iterable", "java.io.Serializable"] });
                    this.array = array;
                }
                ArrayList.prototype.contains = function (o) {
                    return (this.indexOf(o) !== -1);
                };
                ArrayList.prototype.get = function (index) {
                    javaemul.internal.InternalPreconditions.checkElementIndex(index, this.size());
                    return this.array[index];
                };
                ArrayList.prototype.set = function (index, value) {
                    var was = this.get(index);
                    this.array[index] = value;
                    return was;
                };
                ArrayList.prototype.size = function () {
                    return this.array.length;
                };
                ArrayList.prototype.toArray$ = function () {
                    return this.toArray(new Array(this.array.length));
                };
                ArrayList.prototype.toArray = function (out) {
                    var _this = this;
                    if (((out != null && out instanceof Array) || out === null)) {
                        return (function () {
                            var size = _this.size();
                            if (out.length < size) {
                                out = javaemul.internal.ArrayHelper.createFrom(out, size);
                            }
                            for (var i = 0; i < size; ++i) {
                                out[i] = _this.array[i];
                            }
                            if (out.length > size) {
                                out[size] = null;
                            }
                            return out;
                        })();
                    }
                    else if (out === undefined) {
                        return this.toArray$();
                    }
                    else
                        throw new Error('invalid overload');
                };
                return ArrayList;
            }(java.util.AbstractList));
            Arrays.ArrayList = ArrayList;
        })(Arrays = util.Arrays || (util.Arrays = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * To keep performance characteristics in line with Java community expectations,
         * <code>Vector</code> is a wrapper around <code>ArrayList</code>. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Vector.html">[Sun
         * docs]</a>
         *
         * @param <E> element type.
         */
        var Vector = (function (_super) {
            __extends(Vector, _super);
            /**
             * Capacity increment is ignored.
             */
            function Vector(initialCapacity, ignoredCapacityIncrement) {
                var _this = this;
                if (((typeof initialCapacity === 'number') || initialCapacity === null) && ((typeof ignoredCapacityIncrement === 'number') || ignoredCapacityIncrement === null)) {
                    {
                        _super.call(this);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess", "java.util.List", "java.lang.Cloneable", "java.util.Collection", "java.lang.Iterable", "java.io.Serializable"] });
                        (function () {
                            _this.arrayList = new java.util.ArrayList(initialCapacity);
                        })();
                    }
                    (function () {
                    })();
                }
                else if (((initialCapacity != null && initialCapacity["__interfaces"] != null && initialCapacity["__interfaces"].indexOf("java.util.Collection") >= 0) || initialCapacity === null) && ignoredCapacityIncrement === undefined) {
                    var c = initialCapacity;
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess", "java.util.List", "java.lang.Cloneable", "java.util.Collection", "java.lang.Iterable", "java.io.Serializable"] });
                    (function () {
                        _this.arrayList = new java.util.ArrayList();
                        _this.addAll(c);
                    })();
                }
                else if (((typeof initialCapacity === 'number') || initialCapacity === null) && ignoredCapacityIncrement === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess", "java.util.List", "java.lang.Cloneable", "java.util.Collection", "java.lang.Iterable", "java.io.Serializable"] });
                    (function () {
                        _this.arrayList = new java.util.ArrayList(initialCapacity);
                    })();
                }
                else if (initialCapacity === undefined && ignoredCapacityIncrement === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess", "java.util.List", "java.lang.Cloneable", "java.util.Collection", "java.lang.Iterable", "java.io.Serializable"] });
                    (function () {
                        _this.arrayList = new java.util.ArrayList();
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            Vector.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull(action);
                for (var index155 = this.iterator(); index155.hasNext();) {
                    var t = index155.next();
                    {
                        action(t);
                    }
                }
            };
            Vector.prototype.add$java_lang_Object = function (o) {
                return this.arrayList.add(o);
            };
            Vector.prototype.add = function (index, o) {
                var _this = this;
                if (((typeof index === 'number') || index === null) && ((o != null) || o === null)) {
                    return (function () {
                        Vector.checkArrayElementIndex(index, _this.size() + 1);
                        _this.arrayList.add(index, o);
                    })();
                }
                else if (((index != null) || index === null) && o === undefined) {
                    return this.add$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            Vector.prototype.addAll$java_util_Collection = function (c) {
                return this.arrayList.addAll(c);
            };
            Vector.prototype.addAll = function (index, c) {
                var _this = this;
                if (((typeof index === 'number') || index === null) && ((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0) || c === null)) {
                    return (function () {
                        return _this.arrayList.addAll(index, c);
                    })();
                }
                else if (((index != null && index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0) || index === null) && c === undefined) {
                    return this.addAll$java_util_Collection(index);
                }
                else
                    throw new Error('invalid overload');
            };
            Vector.prototype.addElement = function (o) {
                this.add(o);
            };
            Vector.prototype.capacity = function () {
                return this.arrayList.size();
            };
            Vector.prototype.clear = function () {
                this.arrayList.clear();
            };
            Vector.prototype.clone = function () {
                return new Vector(this);
            };
            Vector.prototype.contains = function (elem) {
                return this.arrayList.contains(elem);
            };
            Vector.prototype.containsAll = function (c) {
                return this.arrayList.containsAll(c);
            };
            Vector.prototype.copyInto = function (objs) {
                var i = -1;
                var n = this.size();
                while ((++i < n)) {
                    objs[i] = this.get(i);
                }
                ;
            };
            Vector.prototype.elementAt = function (index) {
                return this.get(index);
            };
            Vector.prototype.elements = function () {
                return java.util.Collections.enumeration(this.arrayList);
            };
            Vector.prototype.ensureCapacity = function (capacity) {
                this.arrayList.ensureCapacity(capacity);
            };
            Vector.prototype.firstElement = function () {
                javaemul.internal.InternalPreconditions.checkElement(!this.isEmpty());
                return this.get(0);
            };
            Vector.prototype.get = function (index) {
                Vector.checkArrayElementIndex(index, this.size());
                return this.arrayList.get(index);
            };
            Vector.prototype.indexOf$java_lang_Object = function (elem) {
                return this.arrayList.indexOf(elem);
            };
            Vector.prototype.indexOf = function (elem, index) {
                var _this = this;
                if (((elem != null) || elem === null) && ((typeof index === 'number') || index === null)) {
                    return (function () {
                        Vector.checkArrayIndexOutOfBounds(index >= 0, index);
                        return _this.arrayList.indexOf(elem, index);
                    })();
                }
                else if (((elem != null) || elem === null) && index === undefined) {
                    return this.indexOf$java_lang_Object(elem);
                }
                else
                    throw new Error('invalid overload');
            };
            Vector.prototype.insertElementAt = function (o, index) {
                this.add(index, o);
            };
            Vector.prototype.isEmpty = function () {
                return (this.arrayList.size() === 0);
            };
            Vector.prototype.iterator = function () {
                return this.arrayList.iterator();
            };
            Vector.prototype.lastElement = function () {
                javaemul.internal.InternalPreconditions.checkElement(!this.isEmpty());
                return this.get(this.size() - 1);
            };
            Vector.prototype.lastIndexOf$java_lang_Object = function (o) {
                return this.arrayList.lastIndexOf(o);
            };
            Vector.prototype.lastIndexOf = function (o, index) {
                var _this = this;
                if (((o != null) || o === null) && ((typeof index === 'number') || index === null)) {
                    return (function () {
                        Vector.checkArrayIndexOutOfBounds(index < _this.size(), index);
                        return _this.arrayList.lastIndexOf(o, index);
                    })();
                }
                else if (((o != null) || o === null) && index === undefined) {
                    return this.lastIndexOf$java_lang_Object(o);
                }
                else
                    throw new Error('invalid overload');
            };
            Vector.prototype.remove = function (index) {
                var _this = this;
                if (((typeof index === 'number') || index === null)) {
                    return (function () {
                        Vector.checkArrayElementIndex(index, _this.size());
                        return _this.arrayList.remove(index);
                    })();
                }
                else if (((index != null) || index === null)) {
                    return this.remove$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            Vector.prototype.removeAll = function (c) {
                return this.arrayList.removeAll(c);
            };
            Vector.prototype.removeAllElements = function () {
                this.clear();
            };
            Vector.prototype.removeElement = function (o) {
                return this.remove(o);
            };
            Vector.prototype.removeElementAt = function (index) {
                this.remove(index);
            };
            Vector.prototype.set = function (index, elem) {
                Vector.checkArrayElementIndex(index, this.size());
                return this.arrayList.set(index, elem);
            };
            Vector.prototype.setElementAt = function (o, index) {
                this.set(index, o);
            };
            Vector.prototype.setSize = function (size) {
                Vector.checkArrayIndexOutOfBounds(size >= 0, size);
                this.arrayList.setSize(size);
            };
            Vector.prototype.size = function () {
                return this.arrayList.size();
            };
            Vector.prototype.subList = function (fromIndex, toIndex) {
                return this.arrayList.subList(fromIndex, toIndex);
            };
            Vector.prototype.toArray$ = function () {
                return this.arrayList.toArray();
            };
            Vector.prototype.toArray = function (a) {
                var _this = this;
                if (((a != null && a instanceof Array) || a === null)) {
                    return (function () {
                        return _this.arrayList.toArray(a);
                    })();
                }
                else if (a === undefined) {
                    return this.toArray$();
                }
                else
                    throw new Error('invalid overload');
            };
            Vector.prototype.toString = function () {
                return this.arrayList.toString();
            };
            Vector.prototype.trimToSize = function () {
                this.arrayList.trimToSize();
            };
            Vector.prototype.removeRange = function (fromIndex, endIndex) {
                this.arrayList.removeRange(fromIndex, endIndex);
            };
            Vector.checkArrayElementIndex = function (index, size) {
                if (index < 0 || index >= size) {
                    throw new java.lang.ArrayIndexOutOfBoundsException();
                }
            };
            Vector.checkArrayIndexOutOfBounds = function (expression, index) {
                if (!expression) {
                    throw new java.lang.ArrayIndexOutOfBoundsException(/* valueOf */ new String(index).toString());
                }
            };
            return Vector;
        }(java.util.AbstractList));
        util.Vector = Vector;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Maintains a last-in, first-out collection of objects. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Stack.html">[Sun
         * docs]</a>
         *
         * @param <E> element type.
         */
        var Stack = (function (_super) {
            __extends(Stack, _super);
            function Stack() {
                _super.call(this);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess", "java.util.List", "java.lang.Cloneable", "java.util.Collection", "java.lang.Iterable", "java.io.Serializable"] });
            }
            Stack.prototype.clone = function () {
                var s = new Stack();
                s.addAll(this);
                return s;
            };
            Stack.prototype.empty = function () {
                return this.isEmpty();
            };
            Stack.prototype.peek = function () {
                var sz = this.size();
                if (sz > 0) {
                    return this.get(sz - 1);
                }
                else {
                    throw new java.util.EmptyStackException();
                }
            };
            Stack.prototype.pop = function () {
                var sz = this.size();
                if (sz > 0) {
                    return this.remove(sz - 1);
                }
                else {
                    throw new java.util.EmptyStackException();
                }
            };
            Stack.prototype.push = function (o) {
                this.add(o);
                return o;
            };
            Stack.prototype.search = function (o) {
                var pos = this.lastIndexOf(o);
                if (pos >= 0) {
                    return this.size() - pos;
                }
                return -1;
            };
            return Stack;
        }(java.util.Vector));
        util.Stack = Stack;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * An unbounded priority queue based on a priority heap. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/PriorityQueue.html">[Sun
         * docs]</a>
         *
         * @param <E> element type.
         */
        var PriorityQueue = (function (_super) {
            __extends(PriorityQueue, _super);
            function PriorityQueue(initialCapacity, cmp) {
                var _this = this;
                if (((typeof initialCapacity === 'number') || initialCapacity === null) && ((cmp != null && cmp["__interfaces"] != null && cmp["__interfaces"].indexOf("java.util.Comparator") >= 0) || cmp === null)) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Queue", "java.lang.Iterable"] });
                    (function () {
                        _this.heap = new java.util.ArrayList(initialCapacity);
                        if (cmp == null) {
                            cmp = java.util.Comparators.natural();
                        }
                        _this.cmp = cmp;
                    })();
                }
                else if (((initialCapacity != null && initialCapacity instanceof java.util.PriorityQueue) || initialCapacity === null) && cmp === undefined) {
                    var c = initialCapacity;
                    {
                        var initialCapacity = c.size();
                        var cmp = c.comparator();
                        _super.call(this);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Queue", "java.lang.Iterable"] });
                        (function () {
                            _this.heap = new java.util.ArrayList(initialCapacity);
                            if (cmp == null) {
                                cmp = java.util.Comparators.natural();
                            }
                            _this.cmp = cmp;
                        })();
                    }
                    (function () {
                        _this.addAll(c);
                    })();
                }
                else if (((initialCapacity != null && initialCapacity["__interfaces"] != null && initialCapacity["__interfaces"].indexOf("java.util.SortedSet") >= 0) || initialCapacity === null) && cmp === undefined) {
                    var c = initialCapacity;
                    {
                        var initialCapacity = c.size();
                        var cmp = c.comparator();
                        _super.call(this);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Queue", "java.lang.Iterable"] });
                        (function () {
                            _this.heap = new java.util.ArrayList(initialCapacity);
                            if (cmp == null) {
                                cmp = java.util.Comparators.natural();
                            }
                            _this.cmp = cmp;
                        })();
                    }
                    (function () {
                        _this.addAll(c);
                    })();
                }
                else if (((initialCapacity != null && initialCapacity["__interfaces"] != null && initialCapacity["__interfaces"].indexOf("java.util.Collection") >= 0) || initialCapacity === null) && cmp === undefined) {
                    var c = initialCapacity;
                    {
                        var initialCapacity = c.size();
                        {
                            var cmp = null;
                            _super.call(this);
                            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Queue", "java.lang.Iterable"] });
                            (function () {
                                _this.heap = new java.util.ArrayList(initialCapacity);
                                if (cmp == null) {
                                    cmp = java.util.Comparators.natural();
                                }
                                _this.cmp = cmp;
                            })();
                        }
                        (function () {
                        })();
                    }
                    (function () {
                        _this.addAll(c);
                    })();
                }
                else if (((typeof initialCapacity === 'number') || initialCapacity === null) && cmp === undefined) {
                    {
                        var cmp = null;
                        _super.call(this);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Queue", "java.lang.Iterable"] });
                        (function () {
                            _this.heap = new java.util.ArrayList(initialCapacity);
                            if (cmp == null) {
                                cmp = java.util.Comparators.natural();
                            }
                            _this.cmp = cmp;
                        })();
                    }
                    (function () {
                    })();
                }
                else if (initialCapacity === undefined && cmp === undefined) {
                    {
                        var initialCapacity = 11;
                        {
                            var cmp = null;
                            _super.call(this);
                            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Queue", "java.lang.Iterable"] });
                            (function () {
                                _this.heap = new java.util.ArrayList(initialCapacity);
                                if (cmp == null) {
                                    cmp = java.util.Comparators.natural();
                                }
                                _this.cmp = cmp;
                            })();
                        }
                        (function () {
                        })();
                    }
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            PriorityQueue.getLeftChild = function (node) {
                return 2 * node + 1;
            };
            PriorityQueue.getParent = function (node) {
                return ((node - 1) / 2 | 0);
            };
            PriorityQueue.getRightChild = function (node) {
                return 2 * node + 2;
            };
            PriorityQueue.isLeaf = function (node, size) {
                return node * 2 + 1 >= size;
            };
            PriorityQueue.prototype.addAll = function (index, c) {
                if (((index != null && index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0) || index === null) && c === undefined) {
                    return this.addAll$java_util_Collection(index);
                }
                else
                    throw new Error('invalid overload');
            };
            PriorityQueue.prototype.addAll$java_util_Collection = function (c) {
                if (this.heap.addAll(c)) {
                    this.makeHeap(0);
                    return true;
                }
                return false;
            };
            PriorityQueue.prototype.clear = function () {
                this.heap.clear();
            };
            PriorityQueue.prototype.comparator = function () {
                return this.cmp === java.util.Comparators.natural() ? null : this.cmp;
            };
            PriorityQueue.prototype.contains = function (o) {
                return this.heap.contains(o);
            };
            PriorityQueue.prototype.containsAll = function (c) {
                return this.heap.containsAll(c);
            };
            PriorityQueue.prototype.isEmpty = function () {
                return this.heap.isEmpty();
            };
            PriorityQueue.prototype.iterator = function () {
                return java.util.Collections.unmodifiableList(this.heap).iterator();
            };
            PriorityQueue.prototype.offer = function (e) {
                var node = this.heap.size();
                this.heap.add(e);
                while ((node > 0)) {
                    var childNode = node;
                    node = PriorityQueue.getParent(node);
                    if (this.cmp.compare(this.heap.get(node), e) <= 0) {
                        this.heap.set(childNode, e);
                        return true;
                    }
                    this.heap.set(childNode, this.heap.get(node));
                }
                ;
                this.heap.set(node, e);
                return true;
            };
            PriorityQueue.prototype.peek = function () {
                if (this.heap.size() === 0) {
                    return null;
                }
                return this.heap.get(0);
            };
            PriorityQueue.prototype.poll = function () {
                if (this.heap.size() === 0) {
                    return null;
                }
                var value = this.heap.get(0);
                this.removeAtIndex(0);
                return value;
            };
            PriorityQueue.prototype.remove = function (index) {
                if (((index != null) || index === null)) {
                    return this.remove$java_lang_Object(index);
                }
                else if (index === undefined) {
                    return this.remove$();
                }
                else
                    throw new Error('invalid overload');
            };
            PriorityQueue.prototype.remove$java_lang_Object = function (o) {
                var index = this.heap.indexOf(o);
                if (index < 0) {
                    return false;
                }
                this.removeAtIndex(index);
                return true;
            };
            PriorityQueue.prototype.removeAll = function (c) {
                if (this.heap.removeAll(c)) {
                    this.makeHeap(0);
                    return true;
                }
                return false;
            };
            PriorityQueue.prototype.retainAll = function (c) {
                if (this.heap.retainAll(c)) {
                    this.makeHeap(0);
                    return true;
                }
                return false;
            };
            PriorityQueue.prototype.size = function () {
                return this.heap.size();
            };
            PriorityQueue.prototype.toArray$ = function () {
                return this.heap.toArray();
            };
            PriorityQueue.prototype.toArray = function (a) {
                var _this = this;
                if (((a != null && a instanceof Array) || a === null)) {
                    return (function () {
                        return _this.heap.toArray(a);
                    })();
                }
                else if (a === undefined) {
                    return this.toArray$();
                }
                else
                    throw new Error('invalid overload');
            };
            PriorityQueue.prototype.toString = function () {
                return this.heap.toString();
            };
            /**
             * Make the subtree rooted at <code>node</code> a valid heap. O(n) time
             *
             * @param node
             */
            PriorityQueue.prototype.makeHeap = function (node) {
                if (this.isLeaf(node)) {
                    return;
                }
                this.makeHeap(PriorityQueue.getLeftChild(node));
                var rightChild = PriorityQueue.getRightChild(node);
                if (rightChild < this.heap.size()) {
                    this.makeHeap(rightChild);
                }
                this.mergeHeaps(node);
            };
            /**
             * Merge two subheaps into a single heap. O(log n) time
             *
             * PRECONDITION: both children of <code>node</code> are heaps
             *
             * @param node the parent of the two subtrees to merge
             */
            PriorityQueue.prototype.mergeHeaps = function (node) {
                var heapSize = this.heap.size();
                var value = this.heap.get(node);
                while ((!PriorityQueue.isLeaf(node, heapSize))) {
                    var smallestChild = this.getSmallestChild(node, heapSize);
                    if (this.cmp.compare(value, this.heap.get(smallestChild)) < 0) {
                        break;
                    }
                    this.heap.set(node, this.heap.get(smallestChild));
                    node = smallestChild;
                }
                ;
                this.heap.set(node, value);
            };
            PriorityQueue.prototype.getSmallestChild = function (node, heapSize) {
                var smallestChild;
                var leftChild = PriorityQueue.getLeftChild(node);
                var rightChild = leftChild + 1;
                smallestChild = leftChild;
                if ((rightChild < heapSize) && (this.cmp.compare(this.heap.get(rightChild), this.heap.get(leftChild)) < 0)) {
                    smallestChild = rightChild;
                }
                return smallestChild;
            };
            PriorityQueue.prototype.isLeaf = function (node) {
                return PriorityQueue.isLeaf(node, this.heap.size());
            };
            PriorityQueue.prototype.removeAtIndex = function (index) {
                var lastValue = this.heap.remove(this.heap.size() - 1);
                if (index < this.heap.size()) {
                    this.heap.set(index, lastValue);
                    this.mergeHeaps(index);
                }
            };
            return PriorityQueue;
        }(java.util.AbstractQueue));
        util.PriorityQueue = PriorityQueue;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * See <a
         * href="http://docs.oracle.com/javase/7/docs/api/java/util/Objects.html">the
         * official Java API doc</a> for details.
         */
        var Objects = (function () {
            function Objects() {
            }
            Objects.compare = function (a, b, c) {
                return a === b ? 0 : c.compare(a, b);
            };
            Objects.deepEquals = function (a, b) {
                if (a === b) {
                    return true;
                }
                if (a == null || b == null) {
                    return false;
                }
                if ((a === b)) {
                    return true;
                }
                var class1 = a.getClass();
                var class2 = b.getClass();
                if (!class1.isArray() || !class1.equals(class2)) {
                    return false;
                }
                if (a != null && a instanceof Array) {
                    return java.util.Arrays.deepEquals(a, b);
                }
                if (a != null && a instanceof Array) {
                    return java.util.Arrays.equals(a, b);
                }
                if (a != null && a instanceof Array) {
                    return java.util.Arrays.equals(a, b);
                }
                if (a != null && a instanceof Array) {
                    return java.util.Arrays.equals(a, b);
                }
                if (a != null && a instanceof Array) {
                    return java.util.Arrays.equals(a, b);
                }
                if (a != null && a instanceof Array) {
                    return java.util.Arrays.equals(a, b);
                }
                if (a != null && a instanceof Array) {
                    return java.util.Arrays.equals(a, b);
                }
                if (a != null && a instanceof Array) {
                    return java.util.Arrays.equals(a, b);
                }
                if (a != null && a instanceof Array) {
                    return java.util.Arrays.equals(a, b);
                }
                return true;
            };
            Objects.equals = function (a, b) {
                return (a === b) || (a != null && (a === b));
            };
            Objects.hashCode = function (o) {
                return o != null ? o.toString() : 0;
            };
            Objects.hash = function () {
                var values = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    values[_i - 0] = arguments[_i];
                }
                return java.util.Arrays.hashCode(values);
            };
            Objects.isNull = function (obj) {
                return obj == null;
            };
            Objects.nonNull = function (obj) {
                return obj != null;
            };
            Objects.requireNonNull$java_lang_Object = function (obj) {
                if (obj == null) {
                    throw new java.lang.NullPointerException();
                }
                return obj;
            };
            Objects.requireNonNull = function (obj, message) {
                if (((obj != null) || obj === null) && ((typeof message === 'string') || message === null)) {
                    return (function () {
                        if (obj == null) {
                            throw new java.lang.NullPointerException(message);
                        }
                        return obj;
                    })();
                }
                else if (((obj != null) || obj === null) && ((message != null && message["__interfaces"] != null && message["__interfaces"].indexOf("java.util.function.Supplier") >= 0) || message === null)) {
                    return java.util.Objects.requireNonNull$java_lang_Object$java_util_function_Supplier(obj, message);
                }
                else if (((obj != null) || obj === null) && message === undefined) {
                    return java.util.Objects.requireNonNull$java_lang_Object(obj);
                }
                else
                    throw new Error('invalid overload');
            };
            Objects.requireNonNull$java_lang_Object$java_util_function_Supplier = function (obj, messageSupplier) {
                if (obj == null) {
                    throw new java.lang.NullPointerException(messageSupplier());
                }
                return obj;
            };
            Objects.toString$java_lang_Object = function (o) {
                return new String(o).toString();
            };
            Objects.toString = function (o, nullDefault) {
                if (((o != null) || o === null) && ((typeof nullDefault === 'string') || nullDefault === null)) {
                    return (function () {
                        return o != null ? o.toString() : nullDefault;
                    })();
                }
                else if (((o != null) || o === null) && nullDefault === undefined) {
                    return java.util.Objects.toString$java_lang_Object(o);
                }
                else
                    throw new Error('invalid overload');
            };
            return Objects;
        }());
        util.Objects = Objects;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * Generally unsupported. This class is provided so that the GWT compiler can
         * choke down class literal references.
         * <p>
         * NOTE: The code in this class is very sensitive and should keep its
         * dependencies upon other classes to a minimum.
         *
         * @param <T>
         * the type of the object
         */
        var Class = (function () {
            /**
             * Not publicly instantiable.
             *
             * @skip
             */
            function Class() {
                this.sequentialId = Class.nextSequentialId++;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.reflect.Type"] });
                this.modifiers = 0;
                this.typeName = null;
                this.simpleName = null;
                this.packageName = null;
                this.compoundName = null;
                this.canonicalName = null;
                this.typeId = null;
                this.arrayLiterals = null;
            }
            Class.constructors_$LI$ = function () { if (Class.constructors == null)
                Class.constructors = new Array(); return Class.constructors; };
            ;
            Class.classes_$LI$ = function () { if (Class.classes == null)
                Class.classes = new Array(); return Class.classes; };
            ;
            Class.getConstructorForClass = function (clazz) {
                var index = (Class.classes_$LI$().indexOf(clazz) | 0);
                return index === -1 ? null : Class.constructors_$LI$()[index];
            };
            Class.getClassForConstructor = function (constructor) {
                var index = (Class.constructors_$LI$().indexOf(constructor) | 0);
                return index === -1 ? null : Class.classes_$LI$()[index];
            };
            Class.mapConstructorToClass = function (constructor, clazz) {
                Class.constructors_$LI$().push(constructor);
                Class.classes_$LI$().push(clazz);
            };
            /**
             * Create a Class object for an array.
             * <p>
             *
             * Arrays are not registered in the prototype table and get the class
             * literal explicitly at construction.
             * <p>
             */
            Class.getClassLiteralForArray = function (leafClass, dimensions) {
                var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals == null ? new Array(0) : leafClass.arrayLiterals;
                return arrayLiterals[dimensions] != null ? arrayLiterals[dimensions] : (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
            };
            Class.prototype.createClassLiteralForArray = function (dimensions) {
                var clazz = new java.lang.Class();
                clazz.modifiers = Class.ARRAY;
                clazz.superclass = Object;
                if (dimensions > 1) {
                    clazz.componentType = Class.getClassLiteralForArray(this, dimensions - 1);
                }
                else {
                    clazz.componentType = this;
                }
                return clazz;
            };
            /**
             * Create a Class object for a class.
             *
             * @skip
             */
            Class.createForClass = function (packageName, compoundClassName, typeId, superclass) {
                var clazz = Class.createClassObject(packageName, compoundClassName, typeId);
                clazz.superclass = superclass;
                return clazz;
            };
            /**
             * Create a Class object for an enum.
             *
             * @skip
             */
            Class.createForEnum = function (packageName, compoundClassName, typeId, superclass, enumConstantsFunc, enumValueOfFunc) {
                var clazz = Class.createClassObject(packageName, compoundClassName, typeId);
                clazz.modifiers = (enumConstantsFunc != null) ? Class.ENUM : 0;
                clazz.superclass = clazz.enumSuperclass = superclass;
                clazz.enumConstantsFunc = enumConstantsFunc;
                clazz.enumValueOfFunc = enumValueOfFunc;
                return clazz;
            };
            /**
             * Create a Class object for an interface.
             *
             * @skip
             */
            Class.createForInterface = function (packageName, compoundClassName) {
                var clazz = Class.createClassObject(packageName, compoundClassName, null);
                clazz.modifiers = Class.INTERFACE;
                return clazz;
            };
            /**
             * Create a Class object for a primitive.
             *
             * @skip
             */
            Class.createForPrimitive = function (className, primitiveTypeId) {
                var clazz = Class.createClassObject("", className, primitiveTypeId);
                clazz.modifiers = Class.PRIMITIVE;
                return clazz;
            };
            /**
             * Used by {@link WebModePayloadSink} to create uninitialized instances.
             */
            Class.getPrototypeForClass = function (clazz) {
                if (clazz.isPrimitive()) {
                    return null;
                }
                return Class.getConstructorForClass(clazz).prototype;
            };
            /**
             * Creates the class object for a type and initiliazes its fields.
             */
            Class.createClassObject = function (packageName, compoundClassName, typeId) {
                var clazz = new java.lang.Class();
                clazz.packageName = packageName;
                clazz.compoundName = compoundClassName;
                return clazz;
            };
            /**
             * Initiliazes {@code clazz} names from metadata.
             * <p>
             * Written in JSNI to minimize dependencies (on String.+).
             */
            Class.initializeNames = function (clazz) {
                if (clazz.isArray()) {
                    var componentType = clazz.componentType;
                    if (componentType.isPrimitive()) {
                        clazz.typeName = "[" + componentType.typeId;
                    }
                    else if (!componentType.isArray()) {
                        clazz.typeName = "[L" + componentType.getName() + ";";
                    }
                    else {
                        clazz.typeName = "[" + componentType.getName();
                    }
                    clazz.canonicalName = componentType.getCanonicalName() + "[]";
                    clazz.simpleName = componentType.getSimpleName() + "[]";
                    return;
                }
                var packageName = clazz.packageName;
                var compoundName = clazz.compoundName.split("/");
                clazz.typeName = ([packageName, (compoundName).join("$")]).join(".");
                clazz.canonicalName = ([packageName, (compoundName).join(".")]).join(".");
                clazz.simpleName = compoundName[compoundName.length - 1];
            };
            /**
             * Sets the class object for primitives.
             * <p>
             * Written in JSNI to minimize dependencies (on (String)+).
             */
            Class.synthesizePrimitiveNamesFromTypeId = function (clazz, primitiveTypeId) {
                clazz.typeName = "Class$" + primitiveTypeId;
                clazz.canonicalName = clazz.typeName;
                clazz.simpleName = clazz.typeName;
            };
            Class.prototype.desiredAssertionStatus = function () {
                return false;
            };
            Class.prototype.ensureNamesAreInitialized = function () {
                if (this.typeName != null) {
                    return;
                }
                Class.initializeNames(this);
            };
            Class.prototype.getCanonicalName = function () {
                this.ensureNamesAreInitialized();
                return this.canonicalName;
            };
            Class.prototype.getComponentType = function () {
                return this.componentType;
            };
            Class.prototype.getEnumConstants = function () {
                return this.enumConstantsFunc
                    && (this.enumConstantsFunc)();
            };
            Class.prototype.getName = function () {
                this.ensureNamesAreInitialized();
                return this.typeName;
            };
            Class.prototype.getSimpleName = function () {
                this.ensureNamesAreInitialized();
                return this.simpleName;
            };
            Class.prototype.getSuperclass = function () {
                return this.superclass;
            };
            Class.prototype.isArray = function () {
                return (this.modifiers & Class.ARRAY) !== 0;
            };
            Class.prototype.isEnum = function () {
                return (this.modifiers & Class.ENUM) !== 0;
            };
            Class.prototype.isInterface = function () {
                return (this.modifiers & Class.INTERFACE) !== 0;
            };
            Class.prototype.isPrimitive = function () {
                return (this.modifiers & Class.PRIMITIVE) !== 0;
            };
            Class.prototype.toString = function () {
                return (this.isInterface() ? "interface " : (this.isPrimitive() ? "" : "class ")) + this.getName();
            };
            /**
             * Used by Enum to allow getSuperclass() to be pruned.
             */
            Class.prototype.getEnumSuperclass = function () {
                return this.enumSuperclass;
            };
            Class.PRIMITIVE = 1;
            Class.INTERFACE = 2;
            Class.ARRAY = 4;
            Class.ENUM = 8;
            Class.nextSequentialId = 1;
            return Class;
        }());
        lang.Class = Class;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var security;
    (function (security) {
        /**
         * Message Digest Service Provider Interface - <a
         * href="http://java.sun.com/j2se/1.4.2/docs/api/java/security/MessageDigestSpi.html">[Sun's
         * docs]</a>.
         */
        var MessageDigestSpi = (function () {
            function MessageDigestSpi() {
            }
            MessageDigestSpi.prototype.engineDigest$ = function () { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); };
            MessageDigestSpi.prototype.engineDigest = function (buf, offset, len) {
                var _this = this;
                if (((buf != null && buf instanceof Array) || buf === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                    return (function () {
                        var digest = _this.engineDigest();
                        if (buf.length < digest.length + offset) {
                            throw new java.security.DigestException("Insufficient buffer space for digest");
                        }
                        if (len < digest.length) {
                            throw new java.security.DigestException("Length not large enough to hold digest");
                        }
                        java.lang.System.arraycopy(digest, 0, buf, offset, digest.length);
                        return digest.length;
                    })();
                }
                else if (buf === undefined && offset === undefined && len === undefined) {
                    return this.engineDigest$();
                }
                else
                    throw new Error('invalid overload');
            };
            MessageDigestSpi.prototype.engineGetDigestLength = function () {
                return 0;
            };
            MessageDigestSpi.prototype.engineUpdate$byte = function (input) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); };
            MessageDigestSpi.prototype.engineUpdate = function (input, offset, len) {
                if (((input != null && input instanceof Array) || input === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                }
                else if (((typeof input === 'number') || input === null) && offset === undefined && len === undefined) {
                    return this.engineUpdate$byte(input);
                }
                else
                    throw new Error('invalid overload');
            };
            return MessageDigestSpi;
        }());
        security.MessageDigestSpi = MessageDigestSpi;
    })(security = java.security || (java.security = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * See <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Exception.html">the
         * official Java API doc</a> for details.
         */
        var Exception = (function (_super) {
            __extends(Exception, _super);
            function Exception(message, cause, enableSuppression, writableStackTrace) {
                if (((typeof message === 'string') || message === null) && ((cause != null && cause instanceof Error) || cause === null) && ((typeof enableSuppression === 'boolean') || enableSuppression === null) && ((typeof writableStackTrace === 'boolean') || writableStackTrace === null)) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((typeof message === 'string') || message === null) && ((cause != null && cause instanceof Error) || cause === null) && enableSuppression === undefined && writableStackTrace === undefined) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((typeof message === 'string') || message === null) && cause === undefined && enableSuppression === undefined && writableStackTrace === undefined) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((message != null && message instanceof Error) || message === null) && cause === undefined && enableSuppression === undefined && writableStackTrace === undefined) {
                    var cause = message;
                    _super.call(this, cause);
                    this.message = cause;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (message === undefined && cause === undefined && enableSuppression === undefined && writableStackTrace === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return Exception;
        }(Error));
        lang.Exception = Exception;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var security;
    (function (security) {
        /**
         * A generic security exception type - <a
         * href="http://java.sun.com/j2se/1.4.2/docs/api/java/security/GeneralSecurityException.html">[Sun's
         * docs]</a>.
         */
        var GeneralSecurityException = (function (_super) {
            __extends(GeneralSecurityException, _super);
            function GeneralSecurityException(msg) {
                if (((typeof msg === 'string') || msg === null)) {
                    _super.call(this, msg);
                    this.message = msg;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (msg === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return GeneralSecurityException;
        }(Error));
        security.GeneralSecurityException = GeneralSecurityException;
    })(security = java.security || (java.security = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var security;
    (function (security) {
        /**
         * A generic security exception type - <a
         * href="http://java.sun.com/j2se/1.4.2/docs/api/java/security/DigestException.html">[Sun's
         * docs]</a>.
         */
        var DigestException = (function (_super) {
            __extends(DigestException, _super);
            function DigestException(msg) {
                if (((typeof msg === 'string') || msg === null)) {
                    _super.call(this, msg);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (msg === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return DigestException;
        }(java.security.GeneralSecurityException));
        security.DigestException = DigestException;
    })(security = java.security || (java.security = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * See <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/RuntimeException.html">the
         * official Java API doc</a> for details.
         */
        var RuntimeException = (function (_super) {
            __extends(RuntimeException, _super);
            function RuntimeException(message, cause, enableSuppression, writableStackTrace) {
                if (((typeof message === 'string') || message === null) && ((cause != null && cause instanceof Error) || cause === null) && ((typeof enableSuppression === 'boolean') || enableSuppression === null) && ((typeof writableStackTrace === 'boolean') || writableStackTrace === null)) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((typeof message === 'string') || message === null) && ((cause != null && cause instanceof Error) || cause === null) && enableSuppression === undefined && writableStackTrace === undefined) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((typeof message === 'string') || message === null) && cause === undefined && enableSuppression === undefined && writableStackTrace === undefined) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((message != null && message instanceof Error) || message === null) && cause === undefined && enableSuppression === undefined && writableStackTrace === undefined) {
                    var cause = message;
                    _super.call(this, cause);
                    this.message = cause;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (message === undefined && cause === undefined && enableSuppression === undefined && writableStackTrace === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return RuntimeException;
        }(Error));
        lang.RuntimeException = RuntimeException;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * See <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ArrayStoreException.html">the
         * official Java API doc</a> for details.
         */
        var ArrayStoreException = (function (_super) {
            __extends(ArrayStoreException, _super);
            function ArrayStoreException(message) {
                if (((typeof message === 'string') || message === null)) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (message === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return ArrayStoreException;
        }(Error));
        lang.ArrayStoreException = ArrayStoreException;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * Indicates that an objet was in an invalid state during an attempted
         * operation.
         */
        var IllegalStateException = (function (_super) {
            __extends(IllegalStateException, _super);
            function IllegalStateException(message, cause) {
                if (((typeof message === 'string') || message === null) && ((cause != null && cause instanceof Error) || cause === null)) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((typeof message === 'string') || message === null) && cause === undefined) {
                    var s = message;
                    _super.call(this, s);
                    this.message = s;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((message != null && message instanceof Error) || message === null) && cause === undefined) {
                    var cause = message;
                    _super.call(this, cause);
                    this.message = cause;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (message === undefined && cause === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return IllegalStateException;
        }(Error));
        lang.IllegalStateException = IllegalStateException;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        var annotation;
        (function (annotation) {
            /**
             * Indicates an attempt to access an element of an annotation that was added
             * since it was compiled or serialized <a
             * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/annotation/IncompleteAnnotationException.html">[Sun
             * docs]</a>.
             */
            var IncompleteAnnotationException = (function (_super) {
                __extends(IncompleteAnnotationException, _super);
                function IncompleteAnnotationException(annotationType, elementName) {
                    _super.call(this, "Incomplete annotation: trying to access " + elementName + " on " + annotationType);
                    this.message = "Incomplete annotation: trying to access " + elementName + " on " + annotationType;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    this.__annotationType = annotationType;
                    this.__elementName = elementName;
                }
                IncompleteAnnotationException.prototype.annotationType = function () {
                    return this.__annotationType;
                };
                IncompleteAnnotationException.prototype.elementName = function () {
                    return this.__elementName;
                };
                return IncompleteAnnotationException;
            }(Error));
            annotation.IncompleteAnnotationException = IncompleteAnnotationException;
        })(annotation = lang.annotation || (lang.annotation = {}));
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * See <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/NoSuchElementException.html">the
         * official Java API doc</a> for details.
         */
        var NoSuchElementException = (function (_super) {
            __extends(NoSuchElementException, _super);
            function NoSuchElementException(s) {
                if (((typeof s === 'string') || s === null)) {
                    _super.call(this, s);
                    this.message = s;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (s === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return NoSuchElementException;
        }(Error));
        util.NoSuchElementException = NoSuchElementException;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * See <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/NegativeArraySizeException.html">the
         * official Java API doc</a> for details.
         */
        var NegativeArraySizeException = (function (_super) {
            __extends(NegativeArraySizeException, _super);
            function NegativeArraySizeException(message) {
                if (((typeof message === 'string') || message === null)) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (message === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return NegativeArraySizeException;
        }(Error));
        lang.NegativeArraySizeException = NegativeArraySizeException;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * See <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/UnsupportedOperationException.html">the
         * official Java API doc</a> for details.
         */
        var UnsupportedOperationException = (function (_super) {
            __extends(UnsupportedOperationException, _super);
            function UnsupportedOperationException(message, cause) {
                if (((typeof message === 'string') || message === null) && ((cause != null && cause instanceof Error) || cause === null)) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((typeof message === 'string') || message === null) && cause === undefined) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((message != null && message instanceof Error) || message === null) && cause === undefined) {
                    var cause = message;
                    _super.call(this, cause);
                    this.message = cause;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (message === undefined && cause === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return UnsupportedOperationException;
        }(Error));
        lang.UnsupportedOperationException = UnsupportedOperationException;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        var annotation;
        (function (annotation) {
            /**
             * Indicates an attempt to access an element of an annotation that has changed
             * since it was compiled or serialized <a
             * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/annotation/AnnotationTypeMismatchException.html">[Sun
             * docs]</a>.
             */
            var AnnotationTypeMismatchException = (function (_super) {
                __extends(AnnotationTypeMismatchException, _super);
                function AnnotationTypeMismatchException() {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                }
                return AnnotationTypeMismatchException;
            }(Error));
            annotation.AnnotationTypeMismatchException = AnnotationTypeMismatchException;
        })(annotation = lang.annotation || (lang.annotation = {}));
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * NOTE: in GWT this is only thrown for division by zero on longs and
         * BigInteger/BigDecimal.
         * <p>
         * See <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ArithmeticException.html">the
         * official Java API doc</a> for details.
         */
        var ArithmeticException = (function (_super) {
            __extends(ArithmeticException, _super);
            function ArithmeticException(explanation) {
                if (((typeof explanation === 'string') || explanation === null)) {
                    _super.call(this, explanation);
                    this.message = explanation;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (explanation === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return ArithmeticException;
        }(Error));
        lang.ArithmeticException = ArithmeticException;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * See <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/NullPointerException.html">the
         * official Java API doc</a> for details.
         */
        var NullPointerException = (function (_super) {
            __extends(NullPointerException, _super);
            function NullPointerException(message) {
                if (((typeof message === 'string') || message === null)) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (message === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            NullPointerException.prototype.createError = function (msg) {
                return new TypeError(msg);
            };
            return NullPointerException;
        }(Error));
        lang.NullPointerException = NullPointerException;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * See <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/ConcurrentModificationException.html">the
         * official Java API doc</a> for details.
         */
        var ConcurrentModificationException = (function (_super) {
            __extends(ConcurrentModificationException, _super);
            function ConcurrentModificationException(message) {
                if (((typeof message === 'string') || message === null)) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (message === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return ConcurrentModificationException;
        }(Error));
        util.ConcurrentModificationException = ConcurrentModificationException;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var security;
    (function (security) {
        /**
         * A generic security exception type - <a
         * href="http://java.sun.com/j2se/1.4.2/docs/api/java/security/NoSuchAlgorithmException.html">[Sun's
         * docs]</a>.
         */
        var NoSuchAlgorithmException = (function (_super) {
            __extends(NoSuchAlgorithmException, _super);
            function NoSuchAlgorithmException(msg) {
                if (((typeof msg === 'string') || msg === null)) {
                    _super.call(this, msg);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (msg === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return NoSuchAlgorithmException;
        }(java.security.GeneralSecurityException));
        security.NoSuchAlgorithmException = NoSuchAlgorithmException;
    })(security = java.security || (java.security = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * See <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/NoSuchMethodException.html">the
         * official Java API doc</a> for details.
         *
         * This exception is never thrown by GWT or GWT's libraries, as GWT does not support reflection. It
         * is provided in GWT only for compatibility with user code that explicitly throws or catches it for
         * non-reflection purposes.
         */
        var NoSuchMethodException = (function (_super) {
            __extends(NoSuchMethodException, _super);
            function NoSuchMethodException(message) {
                if (((typeof message === 'string') || message === null)) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (message === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return NoSuchMethodException;
        }(Error));
        lang.NoSuchMethodException = NoSuchMethodException;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * See <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/MissingResourceException.html">the
         * official Java API doc</a> for details.
         */
        var MissingResourceException = (function (_super) {
            __extends(MissingResourceException, _super);
            function MissingResourceException(s, className, key) {
                _super.call(this, s);
                this.message = s;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                this.key = key;
                this.className = className;
            }
            MissingResourceException.prototype.getClassName = function () {
                return this.className;
            };
            MissingResourceException.prototype.getKey = function () {
                return this.key;
            };
            return MissingResourceException;
        }(Error));
        util.MissingResourceException = MissingResourceException;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * See <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/IllegalArgumentException.html">the
         * official Java API doc</a> for details.
         */
        var IllegalArgumentException = (function (_super) {
            __extends(IllegalArgumentException, _super);
            function IllegalArgumentException(message, cause) {
                if (((typeof message === 'string') || message === null) && ((cause != null && cause instanceof Error) || cause === null)) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((typeof message === 'string') || message === null) && cause === undefined) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((message != null && message instanceof Error) || message === null) && cause === undefined) {
                    var cause = message;
                    _super.call(this, cause);
                    this.message = cause;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (message === undefined && cause === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return IllegalArgumentException;
        }(Error));
        lang.IllegalArgumentException = IllegalArgumentException;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var nio;
    (function (nio) {
        var charset;
        (function (charset) {
            /**
             * GWT emulation of {@link IllegalCharsetNameException}.
             */
            var IllegalCharsetNameException = (function (_super) {
                __extends(IllegalCharsetNameException, _super);
                function IllegalCharsetNameException(charsetName) {
                    _super.call(this, /* valueOf */ new String(charsetName).toString());
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    this.charsetName = charsetName;
                }
                IllegalCharsetNameException.prototype.getCharsetName = function () {
                    return this.charsetName;
                };
                return IllegalCharsetNameException;
            }(java.lang.IllegalArgumentException));
            charset.IllegalCharsetNameException = IllegalCharsetNameException;
        })(charset = nio.charset || (nio.charset = {}));
    })(nio = java.nio || (java.nio = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var nio;
    (function (nio) {
        var charset;
        (function (charset) {
            /**
             * GWT emulation of {@link UnsupportedCharsetException}.
             */
            var UnsupportedCharsetException = (function (_super) {
                __extends(UnsupportedCharsetException, _super);
                function UnsupportedCharsetException(charsetName) {
                    _super.call(this, /* valueOf */ new String(charsetName).toString());
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    this.charsetName = charsetName;
                }
                UnsupportedCharsetException.prototype.getCharsetName = function () {
                    return this.charsetName;
                };
                return UnsupportedCharsetException;
            }(java.lang.IllegalArgumentException));
            charset.UnsupportedCharsetException = UnsupportedCharsetException;
        })(charset = nio.charset || (nio.charset = {}));
    })(nio = java.nio || (java.nio = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * See <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/NumberFormatException.html">the
         * official Java API doc</a> for details.
         */
        var NumberFormatException = (function (_super) {
            __extends(NumberFormatException, _super);
            function NumberFormatException(message) {
                if (((typeof message === 'string') || message === null)) {
                    _super.call(this, message);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (message === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            NumberFormatException.forInputString = function (s) {
                return new java.lang.NumberFormatException("For input string: \"" + s + "\"");
            };
            NumberFormatException.forNullInputString = function () {
                return new java.lang.NumberFormatException("null");
            };
            NumberFormatException.forRadix = function (radix) {
                return new java.lang.NumberFormatException("radix " + radix + " out of range");
            };
            return NumberFormatException;
        }(java.lang.IllegalArgumentException));
        lang.NumberFormatException = NumberFormatException;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * A very simple emulation of Locale for shared-code patterns like
         * {@code String.toUpperCase(Locale.US)}.
         * <p>
         * Note: Any changes to this class should put into account the assumption that
         * was made in rest of the JRE emulation.
         */
        var Locale = (function () {
            function Locale() {
            }
            Locale.ROOT_$LI$ = function () { if (Locale.ROOT == null)
                Locale.ROOT = new Locale.RootLocale(); return Locale.ROOT; };
            ;
            Locale.ENGLISH_$LI$ = function () { if (Locale.ENGLISH == null)
                Locale.ENGLISH = new Locale.EnglishLocale(); return Locale.ENGLISH; };
            ;
            Locale.US_$LI$ = function () { if (Locale.US == null)
                Locale.US = new Locale.USLocale(); return Locale.US; };
            ;
            Locale.defaultLocale_$LI$ = function () { if (Locale.defaultLocale == null)
                Locale.defaultLocale = new Locale.DefaultLocale(); return Locale.defaultLocale; };
            ;
            /**
             * Returns an instance that represents the browser's default locale (not
             * necessarily the one defined by 'gwt.locale').
             */
            Locale.getDefault = function () {
                return Locale.defaultLocale_$LI$();
            };
            return Locale;
        }());
        util.Locale = Locale;
        var Locale;
        (function (Locale) {
            var RootLocale = (function (_super) {
                __extends(RootLocale, _super);
                function RootLocale() {
                    _super.apply(this, arguments);
                }
                RootLocale.prototype.toString = function () {
                    return "";
                };
                return RootLocale;
            }(java.util.Locale));
            Locale.RootLocale = RootLocale;
            var EnglishLocale = (function (_super) {
                __extends(EnglishLocale, _super);
                function EnglishLocale() {
                    _super.apply(this, arguments);
                }
                EnglishLocale.prototype.toString = function () {
                    return "en";
                };
                return EnglishLocale;
            }(java.util.Locale));
            Locale.EnglishLocale = EnglishLocale;
            var USLocale = (function (_super) {
                __extends(USLocale, _super);
                function USLocale() {
                    _super.apply(this, arguments);
                }
                USLocale.prototype.toString = function () {
                    return "en_US";
                };
                return USLocale;
            }(java.util.Locale));
            Locale.USLocale = USLocale;
            var DefaultLocale = (function (_super) {
                __extends(DefaultLocale, _super);
                function DefaultLocale() {
                    _super.apply(this, arguments);
                }
                DefaultLocale.prototype.toString = function () {
                    return "unknown";
                };
                return DefaultLocale;
            }(java.util.Locale));
            Locale.DefaultLocale = DefaultLocale;
        })(Locale = util.Locale || (util.Locale = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        var logging;
        (function (logging) {
            /**
             * An emulation of the java.util.logging.LogRecord class. See
             * <a href="http://java.sun.com/j2se/1.4.2/docs/api/java/util/logging/LogRecord.html">
             * The Java API doc for details</a>
             */
            var LogRecord = (function () {
                function LogRecord(level, msg) {
                    var _this = this;
                    this.loggerName = "";
                    this.thrown = null;
                    if (((level != null && level instanceof java.util.logging.Level) || level === null) && ((typeof msg === 'string') || msg === null)) {
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                        this.millis = 0;
                        (function () {
                            _this.level = level;
                            _this.msg = msg;
                            _this.millis = java.lang.System.currentTimeMillis();
                        })();
                    }
                    else if (level === undefined && msg === undefined) {
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                        this.millis = 0;
                        (function () {
                        })();
                    }
                    else
                        throw new Error('invalid overload');
                }
                LogRecord.prototype.getLevel = function () {
                    return this.level;
                };
                LogRecord.prototype.getLoggerName = function () {
                    return this.loggerName;
                };
                LogRecord.prototype.getMessage = function () {
                    return this.msg;
                };
                LogRecord.prototype.getMillis = function () {
                    return this.millis;
                };
                LogRecord.prototype.getThrown = function () {
                    return this.thrown;
                };
                LogRecord.prototype.setLevel = function (newLevel) {
                    this.level = newLevel;
                };
                LogRecord.prototype.setLoggerName = function (newName) {
                    this.loggerName = newName;
                };
                LogRecord.prototype.setMessage = function (newMessage) {
                    this.msg = newMessage;
                };
                LogRecord.prototype.setMillis = function (newMillis) {
                    this.millis = newMillis;
                };
                LogRecord.prototype.setThrown = function (newThrown) {
                    this.thrown = newThrown;
                };
                return LogRecord;
            }());
            logging.LogRecord = LogRecord;
        })(logging = util.logging || (util.logging = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var javaemul;
(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Provides Charset implementations.
         */
        var EmulatedCharset = (function (_super) {
            __extends(EmulatedCharset, _super);
            function EmulatedCharset(name) {
                _super.call(this, name, null);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable"] });
            }
            EmulatedCharset.UTF_8_$LI$ = function () { if (EmulatedCharset.UTF_8 == null)
                EmulatedCharset.UTF_8 = new EmulatedCharset.UtfCharset("UTF-8"); return EmulatedCharset.UTF_8; };
            ;
            EmulatedCharset.ISO_LATIN_1_$LI$ = function () { if (EmulatedCharset.ISO_LATIN_1 == null)
                EmulatedCharset.ISO_LATIN_1 = new EmulatedCharset.LatinCharset("ISO-LATIN-1"); return EmulatedCharset.ISO_LATIN_1; };
            ;
            EmulatedCharset.ISO_8859_1_$LI$ = function () { if (EmulatedCharset.ISO_8859_1 == null)
                EmulatedCharset.ISO_8859_1 = new EmulatedCharset.LatinCharset("ISO-8859-1"); return EmulatedCharset.ISO_8859_1; };
            ;
            return EmulatedCharset;
        }(java.nio.charset.Charset));
        internal.EmulatedCharset = EmulatedCharset;
        var EmulatedCharset;
        (function (EmulatedCharset) {
            var LatinCharset = (function (_super) {
                __extends(LatinCharset, _super);
                function LatinCharset(name) {
                    _super.call(this, name);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable"] });
                }
                LatinCharset.prototype.getBytes = function (str) {
                    var n = str.length;
                    var bytes = new Array(n);
                    for (var i = 0; i < n; ++i) {
                        bytes[i] = (((str.charAt(i)).charCodeAt(0) & 255) | 0);
                    }
                    return bytes;
                };
                LatinCharset.prototype.decodeString = function (bytes, ofs, len) {
                    var chars = new Array(len);
                    for (var i = 0; i < len; ++i) {
                        chars[i] = String.fromCharCode((bytes[ofs + i] & 255));
                    }
                    return chars;
                };
                return LatinCharset;
            }(javaemul.internal.EmulatedCharset));
            EmulatedCharset.LatinCharset = LatinCharset;
            var UtfCharset = (function (_super) {
                __extends(UtfCharset, _super);
                function UtfCharset(name) {
                    _super.call(this, name);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable"] });
                }
                UtfCharset.prototype.decodeString = function (bytes, ofs, len) {
                    var charCount = 0;
                    for (var i = 0; i < len;) {
                        ++charCount;
                        var ch = bytes[ofs + i];
                        if ((ch & 192) === 128) {
                            throw new java.lang.IllegalArgumentException("Invalid UTF8 sequence");
                        }
                        else if ((ch & 128) === 0) {
                            ++i;
                        }
                        else if ((ch & 224) === 192) {
                            i += 2;
                        }
                        else if ((ch & 240) === 224) {
                            i += 3;
                        }
                        else if ((ch & 248) === 240) {
                            i += 4;
                        }
                        else {
                            throw new java.lang.IllegalArgumentException("Invalid UTF8 sequence");
                        }
                        if (i > len) {
                            throw new java.lang.IndexOutOfBoundsException("Invalid UTF8 sequence");
                        }
                    }
                    var chars = new Array(charCount);
                    var outIdx = 0;
                    var count = 0;
                    for (var i = 0; i < len;) {
                        var ch = bytes[ofs + i++];
                        if ((ch & 128) === 0) {
                            count = 1;
                            ch &= 127;
                        }
                        else if ((ch & 224) === 192) {
                            count = 2;
                            ch &= 31;
                        }
                        else if ((ch & 240) === 224) {
                            count = 3;
                            ch &= 15;
                        }
                        else if ((ch & 248) === 240) {
                            count = 4;
                            ch &= 7;
                        }
                        else if ((ch & 252) === 248) {
                            count = 5;
                            ch &= 3;
                        }
                        while ((--count > 0)) {
                            var b = bytes[ofs + i++];
                            if ((b & 192) !== 128) {
                                throw new java.lang.IllegalArgumentException("Invalid UTF8 sequence at " + (ofs + i - 1) + ", byte=" + javaemul.internal.IntegerHelper.toHexString(b));
                            }
                            ch = (ch << 6) | (b & 63);
                        }
                        ;
                        outIdx += javaemul.internal.CharacterHelper.toChars(ch, chars, outIdx);
                    }
                    return chars;
                };
                UtfCharset.prototype.getBytes = function (str) {
                    var n = str.length;
                    var byteCount = 0;
                    for (var i = 0; i < n;) {
                        var ch = str.charCodeAt(i);
                        i += javaemul.internal.CharacterHelper.charCount(ch);
                        if (ch < (1 << 7)) {
                            byteCount++;
                        }
                        else if (ch < (1 << 11)) {
                            byteCount += 2;
                        }
                        else if (ch < (1 << 16)) {
                            byteCount += 3;
                        }
                        else if (ch < (1 << 21)) {
                            byteCount += 4;
                        }
                        else if (ch < (1 << 26)) {
                            byteCount += 5;
                        }
                    }
                    var bytes = new Array(byteCount);
                    var out = 0;
                    for (var i = 0; i < n;) {
                        var ch = str.charCodeAt(i);
                        i += javaemul.internal.CharacterHelper.charCount(ch);
                        out += this.encodeUtf8(bytes, out, ch);
                    }
                    return bytes;
                };
                /**
                 * Encode a single character in UTF8.
                 *
                 * @param bytes byte array to store character in
                 * @param ofs offset into byte array to store first byte
                 * @param codePoint character to encode
                 * @return number of bytes consumed by encoding the character
                 * @throws IllegalArgumentException if codepoint >= 2^26
                 */
                UtfCharset.prototype.encodeUtf8 = function (bytes, ofs, codePoint) {
                    if (codePoint < (1 << 7)) {
                        bytes[ofs] = ((codePoint & 127) | 0);
                        return 1;
                    }
                    else if (codePoint < (1 << 11)) {
                        bytes[ofs++] = ((((codePoint >> 6) & 31) | 192) | 0);
                        bytes[ofs] = (((codePoint & 63) | 128) | 0);
                        return 2;
                    }
                    else if (codePoint < (1 << 16)) {
                        bytes[ofs++] = ((((codePoint >> 12) & 15) | 224) | 0);
                        bytes[ofs++] = ((((codePoint >> 6) & 63) | 128) | 0);
                        bytes[ofs] = (((codePoint & 63) | 128) | 0);
                        return 3;
                    }
                    else if (codePoint < (1 << 21)) {
                        bytes[ofs++] = ((((codePoint >> 18) & 7) | 240) | 0);
                        bytes[ofs++] = ((((codePoint >> 12) & 63) | 128) | 0);
                        bytes[ofs++] = ((((codePoint >> 6) & 63) | 128) | 0);
                        bytes[ofs] = (((codePoint & 63) | 128) | 0);
                        return 4;
                    }
                    else if (codePoint < (1 << 26)) {
                        bytes[ofs++] = ((((codePoint >> 24) & 3) | 248) | 0);
                        bytes[ofs++] = ((((codePoint >> 18) & 63) | 128) | 0);
                        bytes[ofs++] = ((((codePoint >> 12) & 63) | 128) | 0);
                        bytes[ofs++] = ((((codePoint >> 6) & 63) | 128) | 0);
                        bytes[ofs] = (((codePoint & 63) | 128) | 0);
                        return 5;
                    }
                    throw new java.lang.IllegalArgumentException("Character out of range: " + codePoint);
                };
                return UtfCharset;
            }(javaemul.internal.EmulatedCharset));
            EmulatedCharset.UtfCharset = UtfCharset;
        })(EmulatedCharset = internal.EmulatedCharset || (internal.EmulatedCharset = {}));
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var nio;
    (function (nio) {
        var charset;
        (function (charset) {
            /**
             * Constant definitions for the standard Charsets.
             */
            var StandardCharsets = (function () {
                function StandardCharsets() {
                }
                StandardCharsets.ISO_8859_1_$LI$ = function () { if (StandardCharsets.ISO_8859_1 == null)
                    StandardCharsets.ISO_8859_1 = javaemul.internal.EmulatedCharset.ISO_8859_1_$LI$(); return StandardCharsets.ISO_8859_1; };
                ;
                StandardCharsets.UTF_8_$LI$ = function () { if (StandardCharsets.UTF_8 == null)
                    StandardCharsets.UTF_8 = javaemul.internal.EmulatedCharset.UTF_8_$LI$(); return StandardCharsets.UTF_8; };
                ;
                return StandardCharsets;
            }());
            charset.StandardCharsets = StandardCharsets;
        })(charset = nio.charset || (nio.charset = {}));
    })(nio = java.nio || (java.nio = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * See <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/EmptyStackException.html">the
         * official Java API doc</a> for details.
         */
        var EmptyStackException = (function (_super) {
            __extends(EmptyStackException, _super);
            function EmptyStackException() {
                _super.call(this);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
            }
            return EmptyStackException;
        }(Error));
        util.EmptyStackException = EmptyStackException;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * See <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/CloneNotSupportedException.html">
         * the official Java API doc</a> for details.
         */
        var CloneNotSupportedException = (function (_super) {
            __extends(CloneNotSupportedException, _super);
            function CloneNotSupportedException(msg) {
                if (((typeof msg === 'string') || msg === null)) {
                    _super.call(this, msg);
                    this.message = msg;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (msg === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return CloneNotSupportedException;
        }(Error));
        lang.CloneNotSupportedException = CloneNotSupportedException;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var io;
    (function (io) {
        /**
         * Wraps an existing {@link OutputStream} and performs some transformation on
         * the output data while it is being written. Transformations can be anything
         * from a simple byte-wise filtering output data to an on-the-fly compression or
         * decompression of the underlying stream. Output streams that wrap another
         * output stream and provide some additional functionality on top of it usually
         * inherit from this class.
         *
         * @see FilterOutputStream
         */
        var FilterOutputStream = (function (_super) {
            __extends(FilterOutputStream, _super);
            /**
             * Constructs a new {@code FilterOutputStream} with {@code out} as its
             * target stream.
             *
             * @param out
             * the target stream that this stream writes to.
             */
            function FilterOutputStream(out) {
                _super.call(this);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Closeable", "java.lang.AutoCloseable", "java.io.Flushable"] });
                this.out = out;
            }
            /**
             * Closes this stream. This implementation closes the target stream.
             *
             * @throws IOException
             * if an error occurs attempting to close this stream.
             */
            FilterOutputStream.prototype.close = function () {
                var thrown = null;
                try {
                    this.flush();
                }
                catch (e) {
                    thrown = e;
                }
                ;
                try {
                    this.out.close();
                }
                catch (e) {
                    if (thrown == null) {
                        thrown = e;
                    }
                }
                ;
                if (thrown != null) {
                    throw new java.io.IOException(thrown);
                }
            };
            /**
             * Ensures that all pending data is sent out to the target stream. This
             * implementation flushes the target stream.
             *
             * @throws IOException
             * if an error occurs attempting to flush this stream.
             */
            FilterOutputStream.prototype.flush = function () {
                this.out.flush();
            };
            /**
             * Writes {@code count} bytes from the byte array {@code buffer} starting at
             * {@code offset} to the target stream.
             *
             * @param buffer
             * the buffer to write.
             * @param offset
             * the index of the first byte in {@code buffer} to write.
             * @param length
             * the number of bytes in {@code buffer} to write.
             * @throws IndexOutOfBoundsException
             * if {@code offset < 0} or {@code count < 0}, or if
             * {@code offset + count} is bigger than the length of
             * {@code buffer}.
             * @throws IOException
             * if an I/O error occurs while writing to this stream.
             */
            FilterOutputStream.prototype.write = function (buffer, offset, length) {
                var _this = this;
                if (((buffer != null && buffer instanceof Array) || buffer === null) && ((typeof offset === 'number') || offset === null) && ((typeof length === 'number') || length === null)) {
                    return (function () {
                        java.io.IOUtils.checkOffsetAndCount(buffer, offset, length);
                        for (var i = 0; i < length; i++) {
                            _this.write(buffer[offset + i]);
                        }
                    })();
                }
                else if (((buffer != null && buffer instanceof Array) || buffer === null) && offset === undefined && length === undefined) {
                    return this.write$byte_A(buffer);
                }
                else if (((typeof buffer === 'number') || buffer === null) && offset === undefined && length === undefined) {
                    return this.write$int(buffer);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Writes one byte to the target stream. Only the low order byte of the
             * integer {@code oneByte} is written.
             *
             * @param oneByte
             * the byte to be written.
             * @throws IOException
             * if an I/O error occurs while writing to this stream.
             */
            FilterOutputStream.prototype.write$int = function (oneByte) {
                this.out.write(oneByte);
            };
            return FilterOutputStream;
        }(java.io.OutputStream));
        io.FilterOutputStream = FilterOutputStream;
    })(io = java.io || (java.io = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var io;
    (function (io) {
        /**
         * @skip
         */
        var PrintStream = (function (_super) {
            __extends(PrintStream, _super);
            function PrintStream(out) {
                _super.call(this, out);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Closeable", "java.lang.AutoCloseable", "java.io.Flushable"] });
            }
            PrintStream.prototype.print$boolean = function (x) {
            };
            PrintStream.prototype.print$char = function (x) {
            };
            PrintStream.prototype.print = function (x) {
                if (((x != null && x instanceof Array) || x === null)) {
                    return (function () {
                    })();
                }
                else if (((typeof x === 'string') || x === null)) {
                    return this.print$java_lang_String(x);
                }
                else if (((typeof x === 'boolean') || x === null)) {
                    return this.print$boolean(x);
                }
                else if (((typeof x === 'string') || x === null)) {
                    return this.print$char(x);
                }
                else if (((typeof x === 'number') || x === null)) {
                    return this.print$int(x);
                }
                else if (((typeof x === 'number') || x === null)) {
                    return this.print$long(x);
                }
                else if (((typeof x === 'number') || x === null)) {
                    return this.print$float(x);
                }
                else if (((typeof x === 'number') || x === null)) {
                    return this.print$double(x);
                }
                else if (((x != null) || x === null)) {
                    return this.print$java_lang_Object(x);
                }
                else
                    throw new Error('invalid overload');
            };
            PrintStream.prototype.print$double = function (x) {
            };
            PrintStream.prototype.print$float = function (x) {
            };
            PrintStream.prototype.print$int = function (x) {
            };
            PrintStream.prototype.print$long = function (x) {
            };
            PrintStream.prototype.print$java_lang_Object = function (x) {
            };
            PrintStream.prototype.print$java_lang_String = function (s) {
            };
            PrintStream.prototype.println$ = function () {
            };
            PrintStream.prototype.println$boolean = function (x) {
            };
            PrintStream.prototype.println$char = function (x) {
            };
            PrintStream.prototype.println = function (x) {
                if (((x != null && x instanceof Array) || x === null)) {
                    return (function () {
                    })();
                }
                else if (((typeof x === 'string') || x === null)) {
                    return this.println$java_lang_String(x);
                }
                else if (((typeof x === 'boolean') || x === null)) {
                    return this.println$boolean(x);
                }
                else if (((typeof x === 'string') || x === null)) {
                    return this.println$char(x);
                }
                else if (((typeof x === 'number') || x === null)) {
                    return this.println$int(x);
                }
                else if (((typeof x === 'number') || x === null)) {
                    return this.println$long(x);
                }
                else if (((typeof x === 'number') || x === null)) {
                    return this.println$float(x);
                }
                else if (((typeof x === 'number') || x === null)) {
                    return this.println$double(x);
                }
                else if (((x != null) || x === null)) {
                    return this.println$java_lang_Object(x);
                }
                else if (x === undefined) {
                    return this.println$();
                }
                else
                    throw new Error('invalid overload');
            };
            PrintStream.prototype.println$double = function (x) {
            };
            PrintStream.prototype.println$float = function (x) {
            };
            PrintStream.prototype.println$int = function (x) {
            };
            PrintStream.prototype.println$long = function (x) {
            };
            PrintStream.prototype.println$java_lang_Object = function (x) {
            };
            PrintStream.prototype.println$java_lang_String = function (s) {
            };
            return PrintStream;
        }(java.io.FilterOutputStream));
        io.PrintStream = PrintStream;
    })(io = java.io || (java.io = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        var annotation;
        (function (annotation) {
            /**
             * Indicates the annotation parser determined the annotation was malformed when
             * reading from the class file <a
             * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/annotation/AnnotationFormatError.html">[Sun
             * docs]</a>.
             */
            var AnnotationFormatError = (function (_super) {
                __extends(AnnotationFormatError, _super);
                function AnnotationFormatError() {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                }
                return AnnotationFormatError;
            }(Error));
            annotation.AnnotationFormatError = AnnotationFormatError;
        })(annotation = lang.annotation || (lang.annotation = {}));
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Basic {@link Map.Entry} implementation that implements hashCode, equals, and
         * toString.
         */
        var AbstractMapEntry = (function () {
            function AbstractMapEntry() {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
            }
            AbstractMapEntry.prototype.equals = function (other) {
                if (!(other != null && other["__interfaces"] != null && other["__interfaces"].indexOf("java.util.Map.Entry") >= 0)) {
                    return false;
                }
                var entry = other;
                return java.util.Objects.equals(this.getKey(), entry.getKey()) && java.util.Objects.equals(this.getValue(), entry.getValue());
            };
            /**
             * Calculate the hash code using Sun's specified algorithm.
             */
            AbstractMapEntry.prototype.hashCode = function () {
                return java.util.Objects.hashCode(this.getKey()) ^ java.util.Objects.hashCode(this.getValue());
            };
            AbstractMapEntry.prototype.toString = function () {
                return this.getKey() + "=" + this.getValue();
            };
            return AbstractMapEntry;
        }());
        util.AbstractMapEntry = AbstractMapEntry;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * A simple wrapper around JavaScript Map for key type is string.
         */
        var InternalStringMap = (function () {
            function InternalStringMap(host) {
                this.backingMap = java.util.InternalJsMapFactory.newJsMap();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Iterable"] });
                this.size = 0;
                this.valueMod = 0;
                this.host = host;
            }
            InternalStringMap.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull(action);
                for (var index156 = this.iterator(); index156.hasNext();) {
                    var t = index156.next();
                    {
                        action(t);
                    }
                }
            };
            InternalStringMap.prototype.contains = function (key) {
                return !javaemul.internal.JsUtils.isUndefined(this.backingMap.get(key));
            };
            InternalStringMap.prototype.get = function (key) {
                return this.backingMap.get(key);
            };
            InternalStringMap.prototype.put = function (key, value) {
                var oldValue = this.backingMap.get(key);
                this.backingMap.set(key, InternalStringMap.toNullIfUndefined(value));
                if (javaemul.internal.JsUtils.isUndefined(oldValue)) {
                    this.size++;
                    java.util.ConcurrentModificationDetector.structureChanged(this.host);
                }
                else {
                    this.valueMod++;
                }
                return oldValue;
            };
            InternalStringMap.prototype.remove = function (key) {
                var value = this.backingMap.get(key);
                if (!javaemul.internal.JsUtils.isUndefined(value)) {
                    this.backingMap.delete(key);
                    this.size--;
                    java.util.ConcurrentModificationDetector.structureChanged(this.host);
                }
                else {
                    this.valueMod++;
                }
                return value;
            };
            InternalStringMap.prototype.getSize = function () {
                return this.size;
            };
            InternalStringMap.prototype.iterator = function () {
                return new InternalStringMap.InternalStringMap$0(this);
            };
            InternalStringMap.prototype.newMapEntry = function (entry, lastValueMod) {
                return new InternalStringMap.InternalStringMap$1(this, entry, lastValueMod);
            };
            InternalStringMap.toNullIfUndefined = function (value) {
                return javaemul.internal.JsUtils.isUndefined(value) ? null : value;
            };
            return InternalStringMap;
        }());
        util.InternalStringMap = InternalStringMap;
        var InternalStringMap;
        (function (InternalStringMap) {
            var InternalStringMap$0 = (function () {
                function InternalStringMap$0(__parent) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                    this.__parent = __parent;
                    this.entries = this.__parent.backingMap.entries();
                    this.current = this.entries.next();
                }
                InternalStringMap$0.prototype.forEachRemaining = function (consumer) {
                    javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                    while ((this.hasNext())) {
                        consumer(this.next());
                    }
                    ;
                };
                InternalStringMap$0.prototype.hasNext = function () {
                    return !this.current.done;
                };
                InternalStringMap$0.prototype.next = function () {
                    this.last = this.current;
                    this.current = this.entries.next();
                    return this.__parent.newMapEntry(this.last, this.__parent.valueMod);
                };
                InternalStringMap$0.prototype.remove = function () {
                    this.__parent.remove(this.last.value[0]);
                };
                return InternalStringMap$0;
            }());
            InternalStringMap.InternalStringMap$0 = InternalStringMap$0;
            var InternalStringMap$1 = (function (_super) {
                __extends(InternalStringMap$1, _super);
                function InternalStringMap$1(__parent, entry, lastValueMod) {
                    _super.call(this);
                    this.entry = entry;
                    this.lastValueMod = lastValueMod;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
                    this.__parent = __parent;
                }
                InternalStringMap$1.prototype.getKey = function () {
                    return this.entry.value[0];
                };
                InternalStringMap$1.prototype.getValue = function () {
                    if (this.__parent.valueMod !== this.lastValueMod) {
                        return this.__parent.get(this.entry.value[0]);
                    }
                    return this.entry.value[1];
                };
                InternalStringMap$1.prototype.setValue = function (object) {
                    return this.__parent.put(this.entry.value[0], object);
                };
                return InternalStringMap$1;
            }(java.util.AbstractMapEntry));
            InternalStringMap.InternalStringMap$1 = InternalStringMap$1;
        })(InternalStringMap = util.InternalStringMap || (util.InternalStringMap = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * See <a href="https://docs.oracle.com/javase/8/docs/api/java/util/OptionalDouble.html">
         * the official Java API doc</a> for details.
         */
        var OptionalDouble = (function () {
            function OptionalDouble(value) {
                var _this = this;
                if (((typeof value === 'number') || value === null)) {
                    this.ref = 0;
                    this.present = false;
                    (function () {
                        _this.ref = value;
                        _this.present = true;
                    })();
                }
                else if (value === undefined) {
                    this.ref = 0;
                    this.present = false;
                    (function () {
                        _this.ref = 0;
                        _this.present = false;
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            OptionalDouble.empty = function () {
                return OptionalDouble.EMPTY_$LI$();
            };
            OptionalDouble.of = function (value) {
                return new OptionalDouble(value);
            };
            OptionalDouble.EMPTY_$LI$ = function () { if (OptionalDouble.EMPTY == null)
                OptionalDouble.EMPTY = new OptionalDouble(); return OptionalDouble.EMPTY; };
            ;
            OptionalDouble.prototype.isPresent = function () {
                return this.present;
            };
            OptionalDouble.prototype.getAsDouble = function () {
                javaemul.internal.InternalPreconditions.checkCriticalElement(this.present);
                return this.ref;
            };
            OptionalDouble.prototype.ifPresent = function (consumer) {
                if (this.present) {
                    consumer(this.ref);
                }
            };
            OptionalDouble.prototype.orElse = function (other) {
                return this.present ? this.ref : other;
            };
            OptionalDouble.prototype.orElseGet = function (other) {
                return this.present ? this.ref : other();
            };
            OptionalDouble.prototype.orElseThrow = function (exceptionSupplier) {
                if (this.present) {
                    return this.ref;
                }
                throw exceptionSupplier();
            };
            OptionalDouble.prototype.equals = function (obj) {
                if (obj === this) {
                    return true;
                }
                if (!(obj != null && obj instanceof java.util.OptionalDouble)) {
                    return false;
                }
                var other = obj;
                return this.present === other.present && javaemul.internal.DoubleHelper.compare(this.ref, other.ref) === 0;
            };
            OptionalDouble.prototype.hashCode = function () {
                return this.present ? javaemul.internal.DoubleHelper.hashCode(this.ref) : 0;
            };
            OptionalDouble.prototype.toString = function () {
                return this.present ? "OptionalDouble.of(" + ('' + this.ref) + ")" : "OptionalDouble.empty()";
            };
            return OptionalDouble;
        }());
        util.OptionalDouble = OptionalDouble;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Implements a set using a TreeMap. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/TreeSet.html">[Sun
         * docs]</a>
         *
         * @param <E> element type.
         */
        var TreeSet = (function (_super) {
            __extends(TreeSet, _super);
            function TreeSet(c) {
                var _this = this;
                if (((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0) || c === null)) {
                    {
                        _super.call(this);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.SortedSet", "java.util.Collection", "java.util.Set", "java.util.NavigableSet", "java.lang.Iterable", "java.io.Serializable"] });
                        (function () {
                            _this.map = new java.util.TreeMap();
                        })();
                    }
                    (function () {
                        _this.addAll(c);
                    })();
                }
                else if (((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Comparator") >= 0) || c === null)) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.SortedSet", "java.util.Collection", "java.util.Set", "java.util.NavigableSet", "java.lang.Iterable", "java.io.Serializable"] });
                    (function () {
                        _this.map = new java.util.TreeMap(c);
                    })();
                }
                else if (((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.SortedSet") >= 0) || c === null)) {
                    var s = c;
                    {
                        var c = javaemul.internal.InternalPreconditions.checkNotNull(s).comparator();
                        _super.call(this);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.SortedSet", "java.util.Collection", "java.util.Set", "java.util.NavigableSet", "java.lang.Iterable", "java.io.Serializable"] });
                        (function () {
                            _this.map = new java.util.TreeMap(c);
                        })();
                    }
                    (function () {
                        _this.addAll(s);
                    })();
                }
                else if (((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.NavigableMap") >= 0) || c === null)) {
                    var map = c;
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.SortedSet", "java.util.Collection", "java.util.Set", "java.util.NavigableSet", "java.lang.Iterable", "java.io.Serializable"] });
                    (function () {
                        _this.map = map;
                    })();
                }
                else if (c === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.SortedSet", "java.util.Collection", "java.util.Set", "java.util.NavigableSet", "java.lang.Iterable", "java.io.Serializable"] });
                    (function () {
                        _this.map = new java.util.TreeMap();
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            TreeSet.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull(action);
                for (var index157 = this.iterator(); index157.hasNext();) {
                    var t = index157.next();
                    {
                        action(t);
                    }
                }
            };
            TreeSet.prototype.add = function (index, element) {
                if (((index != null) || index === null) && element === undefined) {
                    return this.add$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            TreeSet.prototype.add$java_lang_Object = function (o) {
                return this.map.put(o, javaemul.internal.BooleanHelper.FALSE) == null;
            };
            TreeSet.prototype.ceiling = function (e) {
                return this.map.ceilingKey(e);
            };
            TreeSet.prototype.clear = function () {
                this.map.clear();
            };
            TreeSet.prototype.comparator = function () {
                return this.map.comparator();
            };
            TreeSet.prototype.contains = function (o) {
                return this.map.containsKey(o);
            };
            TreeSet.prototype.descendingIterator = function () {
                return this.descendingSet().iterator();
            };
            TreeSet.prototype.descendingSet = function () {
                return new TreeSet(this.map.descendingMap());
            };
            TreeSet.prototype.first = function () {
                return this.map.firstKey();
            };
            TreeSet.prototype.floor = function (e) {
                return this.map.floorKey(e);
            };
            TreeSet.prototype.headSet$java_lang_Object = function (toElement) {
                return this.headSet(toElement, false);
            };
            TreeSet.prototype.headSet = function (toElement, inclusive) {
                var _this = this;
                if (((toElement != null) || toElement === null) && ((typeof inclusive === 'boolean') || inclusive === null)) {
                    return (function () {
                        return new TreeSet(_this.map.headMap(toElement, inclusive));
                    })();
                }
                else if (((toElement != null) || toElement === null) && inclusive === undefined) {
                    return this.headSet$java_lang_Object(toElement);
                }
                else
                    throw new Error('invalid overload');
            };
            TreeSet.prototype.higher = function (e) {
                return this.map.higherKey(e);
            };
            TreeSet.prototype.iterator = function () {
                return this.map.keySet().iterator();
            };
            TreeSet.prototype.last = function () {
                return this.map.lastKey();
            };
            TreeSet.prototype.lower = function (e) {
                return this.map.lowerKey(e);
            };
            TreeSet.prototype.pollFirst = function () {
                return java.util.AbstractMap.getEntryKeyOrNull(this.map.pollFirstEntry());
            };
            TreeSet.prototype.pollLast = function () {
                return java.util.AbstractMap.getEntryKeyOrNull(this.map.pollLastEntry());
            };
            TreeSet.prototype.remove = function (index) {
                if (((index != null) || index === null)) {
                    return this.remove$java_lang_Object(index);
                }
                else
                    throw new Error('invalid overload');
            };
            TreeSet.prototype.remove$java_lang_Object = function (o) {
                return this.map.remove(o) != null;
            };
            TreeSet.prototype.size = function () {
                return this.map.size();
            };
            TreeSet.prototype.subSet = function (fromElement, fromInclusive, toElement, toInclusive) {
                var _this = this;
                if (((fromElement != null) || fromElement === null) && ((typeof fromInclusive === 'boolean') || fromInclusive === null) && ((toElement != null) || toElement === null) && ((typeof toInclusive === 'boolean') || toInclusive === null)) {
                    return (function () {
                        return new TreeSet(_this.map.subMap(fromElement, fromInclusive, toElement, toInclusive));
                    })();
                }
                else if (((fromElement != null) || fromElement === null) && ((fromInclusive != null) || fromInclusive === null) && toElement === undefined && toInclusive === undefined) {
                    return this.subSet$java_lang_Object$java_lang_Object(fromElement, fromInclusive);
                }
                else
                    throw new Error('invalid overload');
            };
            TreeSet.prototype.subSet$java_lang_Object$java_lang_Object = function (fromElement, toElement) {
                return this.subSet(fromElement, true, toElement, false);
            };
            TreeSet.prototype.tailSet$java_lang_Object = function (fromElement) {
                return this.tailSet(fromElement, true);
            };
            TreeSet.prototype.tailSet = function (fromElement, inclusive) {
                var _this = this;
                if (((fromElement != null) || fromElement === null) && ((typeof inclusive === 'boolean') || inclusive === null)) {
                    return (function () {
                        return new TreeSet(_this.map.tailMap(fromElement, inclusive));
                    })();
                }
                else if (((fromElement != null) || fromElement === null) && inclusive === undefined) {
                    return this.tailSet$java_lang_Object(fromElement);
                }
                else
                    throw new Error('invalid overload');
            };
            return TreeSet;
        }(java.util.AbstractSet));
        util.TreeSet = TreeSet;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var security;
    (function (security) {
        /**
         * Message Digest algorithm - <a href=
         * "http://java.sun.com/j2se/1.4.2/docs/api/java/security/MessageDigest.html"
         * >[Sun's docs]</a>.
         */
        var MessageDigest = (function (_super) {
            __extends(MessageDigest, _super);
            function MessageDigest(algorithm) {
                _super.call(this);
                this.algorithm = algorithm;
            }
            MessageDigest.getInstance = function (algorithm) {
                if (("MD5" === algorithm)) {
                    return new MessageDigest.Md5Digest();
                }
                throw new java.security.NoSuchAlgorithmException(algorithm + " not supported");
            };
            MessageDigest.isEqual = function (digestA, digestB) {
                var n = digestA.length;
                if (n !== digestB.length) {
                    return false;
                }
                for (var i = 0; i < n; ++i) {
                    if (digestA[i] !== digestB[i]) {
                        return false;
                    }
                }
                return true;
            };
            MessageDigest.prototype.digest$ = function () {
                return this.engineDigest();
            };
            MessageDigest.prototype.digest$byte_A = function (input) {
                this.update(input);
                return this.digest();
            };
            MessageDigest.prototype.digest = function (buf, offset, len) {
                var _this = this;
                if (((buf != null && buf instanceof Array) || buf === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                    return (function () {
                        return _this.engineDigest(buf, offset, len);
                    })();
                }
                else if (((buf != null && buf instanceof Array) || buf === null) && offset === undefined && len === undefined) {
                    return this.digest$byte_A(buf);
                }
                else if (buf === undefined && offset === undefined && len === undefined) {
                    return this.digest$();
                }
                else
                    throw new Error('invalid overload');
            };
            MessageDigest.prototype.getAlgorithm = function () {
                return this.algorithm;
            };
            MessageDigest.prototype.getDigestLength = function () {
                return this.engineGetDigestLength();
            };
            MessageDigest.prototype.reset = function () {
                this.engineReset();
            };
            MessageDigest.prototype.update$byte = function (input) {
                this.engineUpdate(input);
            };
            MessageDigest.prototype.update$byte_A = function (input) {
                this.engineUpdate(input, 0, input.length);
            };
            MessageDigest.prototype.update = function (input, offset, len) {
                var _this = this;
                if (((input != null && input instanceof Array) || input === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                    return (function () {
                        _this.engineUpdate(input, offset, len);
                    })();
                }
                else if (((input != null && input instanceof Array) || input === null) && offset === undefined && len === undefined) {
                    return this.update$byte_A(input);
                }
                else if (((typeof input === 'number') || input === null) && offset === undefined && len === undefined) {
                    return this.update$byte(input);
                }
                else
                    throw new Error('invalid overload');
            };
            return MessageDigest;
        }(java.security.MessageDigestSpi));
        security.MessageDigest = MessageDigest;
        var MessageDigest;
        (function (MessageDigest) {
            var Md5Digest = (function (_super) {
                __extends(Md5Digest, _super);
                function Md5Digest() {
                    _super.call(this, "MD5");
                    this.oneByte = new Array(1);
                    this.counter = 0;
                    this.remainder = 0;
                    this.engineReset();
                }
                Md5Digest.padding_$LI$ = function () { if (Md5Digest.padding == null)
                    Md5Digest.padding = [(128 | 0), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; return Md5Digest.padding; };
                ;
                /**
                 * Converts a long to a 8-byte array using low order first.
                 *
                 * @param n A long.
                 * @return A byte[].
                 */
                Md5Digest.toBytes = function (n) {
                    var b = new Array(8);
                    b[0] = ((n) | 0);
                    n >>>= 8;
                    b[1] = ((n) | 0);
                    n >>>= 8;
                    b[2] = ((n) | 0);
                    n >>>= 8;
                    b[3] = ((n) | 0);
                    n >>>= 8;
                    b[4] = ((n) | 0);
                    n >>>= 8;
                    b[5] = ((n) | 0);
                    n >>>= 8;
                    b[6] = ((n) | 0);
                    n >>>= 8;
                    b[7] = ((n) | 0);
                    return b;
                };
                /**
                 * Converts a 64-byte array into a 16-int array.
                 *
                 * @param in A byte[].
                 * @param out An int[].
                 */
                Md5Digest.byte2int = function (__in, out) {
                    for (var inpos = 0, outpos = 0; outpos < 16; outpos++) {
                        out[outpos] = ((__in[inpos++] & 255) | ((__in[inpos++] & 255) << 8) | ((__in[inpos++] & 255) << 16) | ((__in[inpos++] & 255) << 24));
                    }
                };
                Md5Digest.f = function (x, y, z) {
                    return (z ^ (x & (y ^ z)));
                };
                Md5Digest.ff = function (a, b, c, d, x, s, ac) {
                    a += x + ac + Md5Digest.f(b, c, d);
                    a = (a << s | a >>> -s);
                    return a + b;
                };
                Md5Digest.g = function (x, y, z) {
                    return (y ^ (z & (x ^ y)));
                };
                Md5Digest.gg = function (a, b, c, d, x, s, ac) {
                    a += x + ac + Md5Digest.g(b, c, d);
                    a = (a << s | a >>> -s);
                    return a + b;
                };
                Md5Digest.h = function (x, y, z) {
                    return (x ^ y ^ z);
                };
                Md5Digest.hh = function (a, b, c, d, x, s, ac) {
                    a += x + ac + Md5Digest.h(b, c, d);
                    a = (a << s | a >>> -s);
                    return a + b;
                };
                Md5Digest.i = function (x, y, z) {
                    return (y ^ (x | ~z));
                };
                Md5Digest.ii = function (a, b, c, d, x, s, ac) {
                    a += x + ac + Md5Digest.i(b, c, d);
                    a = (a << s | a >>> -s);
                    return a + b;
                };
                /**
                 * Converts a 4-int array into a 16-byte array.
                 *
                 * @param in An int[].
                 * @param out A byte[].
                 */
                Md5Digest.int2byte = function (__in, out) {
                    for (var inpos = 0, outpos = 0; inpos < 4; inpos++) {
                        out[outpos++] = ((__in[inpos] & 255) | 0);
                        out[outpos++] = (((__in[inpos] >>> 8) & 255) | 0);
                        out[outpos++] = (((__in[inpos] >>> 16) & 255) | 0);
                        out[outpos++] = (((__in[inpos] >>> 24) & 255) | 0);
                    }
                };
                Md5Digest.prototype.engineDigest$ = function () {
                    var bits = Md5Digest.toBytes(this.counter << 3);
                    var digest = new Array(16);
                    if (this.remainder > 8) {
                        this.engineUpdate(Md5Digest.padding_$LI$(), 0, this.remainder - 8);
                    }
                    else {
                        this.engineUpdate(Md5Digest.padding_$LI$(), 0, 64 + (this.remainder - 8));
                    }
                    this.engineUpdate(bits, 0, 8);
                    Md5Digest.int2byte(this.state, digest);
                    this.reset();
                    return digest;
                };
                Md5Digest.prototype.engineGetDigestLength = function () {
                    return 16;
                };
                Md5Digest.prototype.engineReset = function () {
                    this.buffer = new Array(64);
                    this.state = new Array(4);
                    this.x = new Array(16);
                    this.state[0] = 1732584193;
                    this.state[1] = -271733879;
                    this.state[2] = -1732584194;
                    this.state[3] = 271733878;
                    this.counter = 0;
                    this.remainder = 64;
                };
                Md5Digest.prototype.engineUpdate$byte = function (input) {
                    this.oneByte[0] = input;
                    this.engineUpdate(this.oneByte, 0, 1);
                };
                Md5Digest.prototype.engineUpdate = function (input, offset, len) {
                    var _this = this;
                    if (((input != null && input instanceof Array) || input === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                        return (function () {
                            while ((true)) {
                                if (len >= _this.remainder) {
                                    java.lang.System.arraycopy(input, offset, _this.buffer, ((_this.counter & 63) | 0), _this.remainder);
                                    _this.transform(_this.buffer);
                                    _this.counter += _this.remainder;
                                    offset += _this.remainder;
                                    len -= _this.remainder;
                                    _this.remainder = 64;
                                }
                                else {
                                    java.lang.System.arraycopy(input, offset, _this.buffer, ((_this.counter & 63) | 0), len);
                                    _this.counter += len;
                                    _this.remainder -= len;
                                    break;
                                }
                            }
                            ;
                        })();
                    }
                    else if (((typeof input === 'number') || input === null) && offset === undefined && len === undefined) {
                        return this.engineUpdate$byte(input);
                    }
                    else
                        throw new Error('invalid overload');
                };
                Md5Digest.prototype.transform = function (buffer) {
                    var a;
                    var b;
                    var c;
                    var d;
                    Md5Digest.byte2int(buffer, this.x);
                    a = this.state[0];
                    b = this.state[1];
                    c = this.state[2];
                    d = this.state[3];
                    a = Md5Digest.ff(a, b, c, d, this.x[0], 7, -680876936);
                    d = Md5Digest.ff(d, a, b, c, this.x[1], 12, -389564586);
                    c = Md5Digest.ff(c, d, a, b, this.x[2], 17, 606105819);
                    b = Md5Digest.ff(b, c, d, a, this.x[3], 22, -1044525330);
                    a = Md5Digest.ff(a, b, c, d, this.x[4], 7, -176418897);
                    d = Md5Digest.ff(d, a, b, c, this.x[5], 12, 1200080426);
                    c = Md5Digest.ff(c, d, a, b, this.x[6], 17, -1473231341);
                    b = Md5Digest.ff(b, c, d, a, this.x[7], 22, -45705983);
                    a = Md5Digest.ff(a, b, c, d, this.x[8], 7, 1770035416);
                    d = Md5Digest.ff(d, a, b, c, this.x[9], 12, -1958414417);
                    c = Md5Digest.ff(c, d, a, b, this.x[10], 17, -42063);
                    b = Md5Digest.ff(b, c, d, a, this.x[11], 22, -1990404162);
                    a = Md5Digest.ff(a, b, c, d, this.x[12], 7, 1804603682);
                    d = Md5Digest.ff(d, a, b, c, this.x[13], 12, -40341101);
                    c = Md5Digest.ff(c, d, a, b, this.x[14], 17, -1502002290);
                    b = Md5Digest.ff(b, c, d, a, this.x[15], 22, 1236535329);
                    a = Md5Digest.gg(a, b, c, d, this.x[1], 5, -165796510);
                    d = Md5Digest.gg(d, a, b, c, this.x[6], 9, -1069501632);
                    c = Md5Digest.gg(c, d, a, b, this.x[11], 14, 643717713);
                    b = Md5Digest.gg(b, c, d, a, this.x[0], 20, -373897302);
                    a = Md5Digest.gg(a, b, c, d, this.x[5], 5, -701558691);
                    d = Md5Digest.gg(d, a, b, c, this.x[10], 9, 38016083);
                    c = Md5Digest.gg(c, d, a, b, this.x[15], 14, -660478335);
                    b = Md5Digest.gg(b, c, d, a, this.x[4], 20, -405537848);
                    a = Md5Digest.gg(a, b, c, d, this.x[9], 5, 568446438);
                    d = Md5Digest.gg(d, a, b, c, this.x[14], 9, -1019803690);
                    c = Md5Digest.gg(c, d, a, b, this.x[3], 14, -187363961);
                    b = Md5Digest.gg(b, c, d, a, this.x[8], 20, 1163531501);
                    a = Md5Digest.gg(a, b, c, d, this.x[13], 5, -1444681467);
                    d = Md5Digest.gg(d, a, b, c, this.x[2], 9, -51403784);
                    c = Md5Digest.gg(c, d, a, b, this.x[7], 14, 1735328473);
                    b = Md5Digest.gg(b, c, d, a, this.x[12], 20, -1926607734);
                    a = Md5Digest.hh(a, b, c, d, this.x[5], 4, -378558);
                    d = Md5Digest.hh(d, a, b, c, this.x[8], 11, -2022574463);
                    c = Md5Digest.hh(c, d, a, b, this.x[11], 16, 1839030562);
                    b = Md5Digest.hh(b, c, d, a, this.x[14], 23, -35309556);
                    a = Md5Digest.hh(a, b, c, d, this.x[1], 4, -1530992060);
                    d = Md5Digest.hh(d, a, b, c, this.x[4], 11, 1272893353);
                    c = Md5Digest.hh(c, d, a, b, this.x[7], 16, -155497632);
                    b = Md5Digest.hh(b, c, d, a, this.x[10], 23, -1094730640);
                    a = Md5Digest.hh(a, b, c, d, this.x[13], 4, 681279174);
                    d = Md5Digest.hh(d, a, b, c, this.x[0], 11, -358537222);
                    c = Md5Digest.hh(c, d, a, b, this.x[3], 16, -722521979);
                    b = Md5Digest.hh(b, c, d, a, this.x[6], 23, 76029189);
                    a = Md5Digest.hh(a, b, c, d, this.x[9], 4, -640364487);
                    d = Md5Digest.hh(d, a, b, c, this.x[12], 11, -421815835);
                    c = Md5Digest.hh(c, d, a, b, this.x[15], 16, 530742520);
                    b = Md5Digest.hh(b, c, d, a, this.x[2], 23, -995338651);
                    a = Md5Digest.ii(a, b, c, d, this.x[0], 6, -198630844);
                    d = Md5Digest.ii(d, a, b, c, this.x[7], 10, 1126891415);
                    c = Md5Digest.ii(c, d, a, b, this.x[14], 15, -1416354905);
                    b = Md5Digest.ii(b, c, d, a, this.x[5], 21, -57434055);
                    a = Md5Digest.ii(a, b, c, d, this.x[12], 6, 1700485571);
                    d = Md5Digest.ii(d, a, b, c, this.x[3], 10, -1894986606);
                    c = Md5Digest.ii(c, d, a, b, this.x[10], 15, -1051523);
                    b = Md5Digest.ii(b, c, d, a, this.x[1], 21, -2054922799);
                    a = Md5Digest.ii(a, b, c, d, this.x[8], 6, 1873313359);
                    d = Md5Digest.ii(d, a, b, c, this.x[15], 10, -30611744);
                    c = Md5Digest.ii(c, d, a, b, this.x[6], 15, -1560198380);
                    b = Md5Digest.ii(b, c, d, a, this.x[13], 21, 1309151649);
                    a = Md5Digest.ii(a, b, c, d, this.x[4], 6, -145523070);
                    d = Md5Digest.ii(d, a, b, c, this.x[11], 10, -1120210379);
                    c = Md5Digest.ii(c, d, a, b, this.x[2], 15, 718787259);
                    b = Md5Digest.ii(b, c, d, a, this.x[9], 21, -343485551);
                    this.state[0] = javaemul.internal.Coercions.ensureInt(this.state[0] + a);
                    this.state[1] = javaemul.internal.Coercions.ensureInt(this.state[1] + b);
                    this.state[2] = javaemul.internal.Coercions.ensureInt(this.state[2] + c);
                    this.state[3] = javaemul.internal.Coercions.ensureInt(this.state[3] + d);
                };
                return Md5Digest;
            }(java.security.MessageDigest));
            MessageDigest.Md5Digest = Md5Digest;
        })(MessageDigest = security.MessageDigest || (security.MessageDigest = {}));
    })(security = java.security || (java.security = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        var annotation;
        (function (annotation) {
            /**
             * Enumerates annotation retention policies <a
             * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/annotation/RetentionPolicy.html">[Sun
             * docs]</a>.
             */
            (function (RetentionPolicy) {
                RetentionPolicy[RetentionPolicy["CLASS"] = 0] = "CLASS";
                RetentionPolicy[RetentionPolicy["RUNTIME"] = 1] = "RUNTIME";
                RetentionPolicy[RetentionPolicy["SOURCE"] = 2] = "SOURCE";
            })(annotation.RetentionPolicy || (annotation.RetentionPolicy = {}));
            var RetentionPolicy = annotation.RetentionPolicy;
        })(annotation = lang.annotation || (lang.annotation = {}));
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * A simple wrapper around JavaScriptObject to provide {@link java.util.Map}-like semantics for any
         * key type.
         * <p>
         * Implementation notes:
         * <p>
         * A key's hashCode is the index in backingMap which should contain that key. Since several keys may
         * have the same hash, each value in hashCodeMap is actually an array containing all entries whose
         * keys share the same hash.
         */
        var InternalHashCodeMap = (function () {
            function InternalHashCodeMap(host) {
                this.backingMap = java.util.InternalJsMapFactory.newJsMap();
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Iterable"] });
                this.__size = 0;
                this.host = host;
            }
            InternalHashCodeMap.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull(action);
                for (var index158 = this.iterator(); index158.hasNext();) {
                    var t = index158.next();
                    {
                        action(t);
                    }
                }
            };
            InternalHashCodeMap.prototype.put = function (key, value) {
                var hashCode = this.hash(key);
                var chain = this.getChainOrEmpty(hashCode);
                if (chain.length === 0) {
                    this.backingMap.set(hashCode, chain);
                }
                else {
                    var entry = this.findEntryInChain(key, chain);
                    if (entry != null) {
                        return entry.setValue(value);
                    }
                }
                chain[chain.length] = new util.AbstractMap.SimpleEntry(key, value);
                this.__size++;
                java.util.ConcurrentModificationDetector.structureChanged(this.host);
                return null;
            };
            InternalHashCodeMap.prototype.remove = function (key) {
                var hashCode = this.hash(key);
                var chain = this.getChainOrEmpty(hashCode);
                for (var i = 0; i < chain.length; i++) {
                    var entry = chain[i];
                    if (this.host._equals(key, entry.getKey())) {
                        if (chain.length === 1) {
                            javaemul.internal.ArrayHelper.setLength(chain, 0);
                            this.backingMap.delete(hashCode);
                        }
                        else {
                            javaemul.internal.ArrayHelper.removeFrom(chain, i, 1);
                        }
                        this.__size--;
                        java.util.ConcurrentModificationDetector.structureChanged(this.host);
                        return entry.getValue();
                    }
                }
                return null;
            };
            InternalHashCodeMap.prototype.getEntry = function (key) {
                return this.findEntryInChain(key, this.getChainOrEmpty(this.hash(key)));
            };
            InternalHashCodeMap.prototype.findEntryInChain = function (key, chain) {
                for (var index159 = 0; index159 < chain.length; index159++) {
                    var entry = chain[index159];
                    {
                        if (this.host._equals(key, entry.getKey())) {
                            return entry;
                        }
                    }
                }
                return null;
            };
            InternalHashCodeMap.prototype.size = function () {
                return this.__size;
            };
            InternalHashCodeMap.prototype.iterator = function () {
                return new InternalHashCodeMap.InternalHashCodeMap$0(this);
            };
            InternalHashCodeMap.prototype.getChainOrEmpty = function (hashCode) {
                var chain = this.unsafeCastToArray(this.backingMap.get(hashCode));
                return chain == null ? this.newEntryChain() : chain;
            };
            InternalHashCodeMap.prototype.newEntryChain = function () {
                return [];
            };
            InternalHashCodeMap.prototype.unsafeCastToArray = function (arr) {
                return arr;
            };
            /**
             * Returns hash code of the key as calculated by {@link AbstractHashMap#getHashCode(Object)} but
             * also handles null keys as well.
             */
            InternalHashCodeMap.prototype.hash = function (key) {
                return key == null ? 0 : this.host.getHashCode(key);
            };
            return InternalHashCodeMap;
        }());
        util.InternalHashCodeMap = InternalHashCodeMap;
        var InternalHashCodeMap;
        (function (InternalHashCodeMap) {
            var InternalHashCodeMap$0 = (function () {
                function InternalHashCodeMap$0(__parent) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                    this.__parent = __parent;
                    this.chains = this.__parent.backingMap.entries();
                    this.itemIndex = 0;
                    this.chain = this.__parent.newEntryChain();
                    this.lastEntry = null;
                }
                InternalHashCodeMap$0.prototype.forEachRemaining = function (consumer) {
                    javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                    while ((this.hasNext())) {
                        consumer(this.next());
                    }
                    ;
                };
                InternalHashCodeMap$0.prototype.hasNext = function () {
                    if (this.itemIndex < this.chain.length) {
                        return true;
                    }
                    var current = this.chains.next();
                    if (!current.done) {
                        this.chain = this.__parent.unsafeCastToArray(current.value[1]);
                        this.itemIndex = 0;
                        return true;
                    }
                    return false;
                };
                InternalHashCodeMap$0.prototype.next = function () {
                    this.lastEntry = this.chain[this.itemIndex++];
                    return this.lastEntry;
                };
                InternalHashCodeMap$0.prototype.remove = function () {
                    this.__parent.remove(this.lastEntry.getKey());
                    if (this.itemIndex !== 0) {
                        this.itemIndex--;
                    }
                };
                return InternalHashCodeMap$0;
            }());
            InternalHashCodeMap.InternalHashCodeMap$0 = InternalHashCodeMap$0;
        })(InternalHashCodeMap = util.InternalHashCodeMap || (util.InternalHashCodeMap = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var javaemul;
(function (javaemul) {
    var internal;
    (function (internal) {
        var JreHelper = (function () {
            function JreHelper() {
            }
            JreHelper.LOG10E_$LI$ = function () { if (JreHelper.LOG10E == null)
                JreHelper.LOG10E = Math.LOG10E; return JreHelper.LOG10E; };
            ;
            return JreHelper;
        }());
        internal.JreHelper = JreHelper;
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var sql;
    (function (sql) {
        /**
         * An implementation of java.sql.Date. Derived from
         * http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Date.html
         */
        var Date = (function (_super) {
            __extends(Date, _super);
            function Date(year, month, day) {
                if (((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && ((typeof day === 'number') || day === null)) {
                    _super.call(this, year, month, day);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.lang.Comparable", "java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((typeof year === 'number') || year === null) && month === undefined && day === undefined) {
                    var date = year;
                    _super.call(this, date);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.lang.Comparable", "java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            Date.valueOf = function (s) {
                var split = s.split("-");
                if (split.length !== 3) {
                    throw new java.lang.IllegalArgumentException("Invalid escape format: " + s);
                }
                try {
                    var y = javaemul.internal.IntegerHelper.parseInt(split[0]) - 1900;
                    var m = javaemul.internal.IntegerHelper.parseInt(split[1]) - 1;
                    var d = javaemul.internal.IntegerHelper.parseInt(split[2]);
                    return new Date(y, m, d);
                }
                catch (e) {
                    throw new java.lang.IllegalArgumentException("Invalid escape format: " + s);
                }
                ;
            };
            Date.prototype.getHours = function () {
                throw new java.lang.IllegalArgumentException();
            };
            Date.prototype.getMinutes = function () {
                throw new java.lang.IllegalArgumentException();
            };
            Date.prototype.getSeconds = function () {
                throw new java.lang.IllegalArgumentException();
            };
            Date.prototype.setHours = function (i) {
                throw new java.lang.IllegalArgumentException();
            };
            Date.prototype.setMinutes = function (i) {
                throw new java.lang.IllegalArgumentException();
            };
            Date.prototype.setSeconds = function (i) {
                throw new java.lang.IllegalArgumentException();
            };
            return Date;
        }(java.util.Date));
        sql.Date = Date;
    })(sql = java.sql || (java.sql = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Hash table and linked-list implementation of the Set interface with
         * predictable iteration order. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/LinkedHashSet.html">[Sun
         * docs]</a>
         *
         * @param <E> element type.
         */
        var LinkedHashSet = (function (_super) {
            __extends(LinkedHashSet, _super);
            function LinkedHashSet(ignored, alsoIgnored) {
                var _this = this;
                if (((typeof ignored === 'number') || ignored === null) && ((typeof alsoIgnored === 'number') || alsoIgnored === null)) {
                    _super.call(this, new java.util.LinkedHashMap(ignored, alsoIgnored));
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Collection", "java.util.Set", "java.lang.Iterable", "java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((ignored != null && ignored["__interfaces"] != null && ignored["__interfaces"].indexOf("java.util.Collection") >= 0) || ignored === null) && alsoIgnored === undefined) {
                    var c = ignored;
                    _super.call(this, new java.util.LinkedHashMap());
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Collection", "java.util.Set", "java.lang.Iterable", "java.io.Serializable"] });
                    (function () {
                        _this.addAll(c);
                    })();
                }
                else if (((typeof ignored === 'number') || ignored === null) && alsoIgnored === undefined) {
                    _super.call(this, new java.util.LinkedHashMap(ignored));
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Collection", "java.util.Set", "java.lang.Iterable", "java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (ignored === undefined && alsoIgnored === undefined) {
                    _super.call(this, new java.util.LinkedHashMap());
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Collection", "java.util.Set", "java.lang.Iterable", "java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            LinkedHashSet.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull(action);
                for (var index160 = this.iterator(); index160.hasNext();) {
                    var t = index160.next();
                    {
                        action(t);
                    }
                }
            };
            LinkedHashSet.prototype.clone = function () {
                return new LinkedHashSet(this);
            };
            return LinkedHashSet;
        }(java.util.HashSet));
        util.LinkedHashSet = LinkedHashSet;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * Indicates failure to cast one type into another.
         */
        var ClassCastException = (function (_super) {
            __extends(ClassCastException, _super);
            function ClassCastException(message) {
                if (((typeof message === 'string') || message === null)) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (message === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return ClassCastException;
        }(Error));
        lang.ClassCastException = ClassCastException;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var io;
    (function (io) {
        /**
         * Provides a series of utilities to be reused between IO classes.
         *
         * TODO(chehayeb): move these checks to InternalPreconditions.
         */
        var IOUtils = (function () {
            function IOUtils() {
            }
            /**
             * Validates the offset and the byte count for the given array of bytes.
             *
             * @param buffer Array of bytes to be checked.
             * @param byteOffset Starting offset in the array.
             * @param byteCount Total number of bytes to be accessed.
             * @throws NullPointerException if the given reference to the buffer is null.
             * @throws IndexOutOfBoundsException if {@code byteOffset} is negative, {@code byteCount} is
             * negative or their sum exceeds the buffer length.
             */
            IOUtils.checkOffsetAndCount = function (buffer, byteOffset, byteCount) {
                if (((buffer != null && buffer instanceof Array) || buffer === null) && ((typeof byteOffset === 'number') || byteOffset === null) && ((typeof byteCount === 'number') || byteCount === null)) {
                    return (function () {
                        javaemul.internal.InternalPreconditions.checkNotNull(buffer);
                        IOUtils.checkOffsetAndCount(buffer.length, byteOffset, byteCount);
                    })();
                }
                else if (((buffer != null && buffer instanceof Array) || buffer === null) && ((typeof byteOffset === 'number') || byteOffset === null) && ((typeof byteCount === 'number') || byteCount === null)) {
                    return java.io.IOUtils.checkOffsetAndCount$char_A$int$int(buffer, byteOffset, byteCount);
                }
                else if (((typeof buffer === 'number') || buffer === null) && ((typeof byteOffset === 'number') || byteOffset === null) && ((typeof byteCount === 'number') || byteCount === null)) {
                    return java.io.IOUtils.checkOffsetAndCount$int$int$int(buffer, byteOffset, byteCount);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Validates the offset and the byte count for the given array of characters.
             *
             * @param buffer Array of characters to be checked.
             * @param charOffset Starting offset in the array.
             * @param charCount Total number of characters to be accessed.
             * @throws NullPointerException if the given reference to the buffer is null.
             * @throws IndexOutOfBoundsException if {@code charOffset} is negative, {@code charCount} is
             * negative or their sum exceeds the buffer length.
             */
            IOUtils.checkOffsetAndCount$char_A$int$int = function (buffer, charOffset, charCount) {
                javaemul.internal.InternalPreconditions.checkNotNull(buffer);
                IOUtils.checkOffsetAndCount(buffer.length, charOffset, charCount);
            };
            /**
             * Validates the offset and the byte count for the given array length.
             *
             * @param length Length of the array to be checked.
             * @param offset Starting offset in the array.
             * @param count Total number of elements to be accessed.
             * @throws IndexOutOfBoundsException if {@code offset} is negative, {@code count} is negative or
             * their sum exceeds the given {@code length}.
             */
            IOUtils.checkOffsetAndCount$int$int$int = function (length, offset, count) {
                if ((offset < 0) || (count < 0) || ((offset + count) > length)) {
                    throw new java.lang.IndexOutOfBoundsException();
                }
            };
            return IOUtils;
        }());
        io.IOUtils = IOUtils;
    })(io = java.io || (java.io = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var javaemul;
(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * A helper class for long comparison.
         */
        var LongCompareHolder = (function () {
            function LongCompareHolder() {
            }
            LongCompareHolder.getLongComparator = function () {
                return function (l1, l2) { return l2 - l1; };
            };
            return LongCompareHolder;
        }());
        internal.LongCompareHolder = LongCompareHolder;
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var sql;
    (function (sql) {
        /**
         * An implementation of java.sql.Timestame. Derived from
         * http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Timestamp.html. This is
         * basically just regular Date decorated with a nanoseconds field.
         */
        var Timestamp = (function (_super) {
            __extends(Timestamp, _super);
            function Timestamp(year, month, date, hour, minute, second, nano) {
                var _this = this;
                if (((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && ((typeof date === 'number') || date === null) && ((typeof hour === 'number') || hour === null) && ((typeof minute === 'number') || minute === null) && ((typeof second === 'number') || second === null) && ((typeof nano === 'number') || nano === null)) {
                    _super.call(this, year, month, date, hour, minute, second);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.lang.Comparable", "java.io.Serializable"] });
                    this.nanos = 0;
                    (function () {
                        _this.setNanos(nano);
                    })();
                }
                else if (((typeof year === 'number') || year === null) && month === undefined && date === undefined && hour === undefined && minute === undefined && second === undefined && nano === undefined) {
                    var time = year;
                    _super.call(this, time);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.lang.Comparable", "java.io.Serializable"] });
                    this.nanos = 0;
                    (function () {
                        _this.nanos = ((((time % 1000) | 0)) * 1000000);
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            Timestamp.valueOf = function (s) {
                var components = s.split(" ");
                if (components.length !== 2) {
                    throw new java.lang.IllegalArgumentException("Invalid escape format: " + s);
                }
                var timeComponents = components[1].split("\\.");
                var hasNanos = true;
                var nanos = 0;
                if (timeComponents.length === 1) {
                    hasNanos = false;
                }
                else if (timeComponents.length !== 2) {
                    throw new java.lang.IllegalArgumentException("Invalid escape format: " + s);
                }
                var d = java.sql.Date.valueOf(components[0]);
                var t = java.sql.Time.valueOf(timeComponents[0]);
                if (hasNanos) {
                    var nanosString = timeComponents[1];
                    var len = nanosString.length;
                    if (len > 9) {
                        throw new java.lang.IllegalArgumentException("Invalid escape format: " + s);
                    }
                    if (len < 9) {
                        nanosString += "00000000".substring(len - 1);
                    }
                    try {
                        nanos = javaemul.internal.IntegerHelper.valueOf(nanosString);
                    }
                    catch (e) {
                        throw new java.lang.IllegalArgumentException("Invalid escape format: " + s);
                    }
                    ;
                }
                return new Timestamp(d.getYear(), d.getMonth(), d.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), nanos);
            };
            Timestamp.padNine = function (value) {
                var toReturn = new java.lang.StringBuilder("000000000");
                var asString = new String(value).toString();
                toReturn = toReturn.replace(9 - asString.length, 9, asString);
                return toReturn.toString();
            };
            Timestamp.prototype.after = function (ts) {
                var _this = this;
                if (((ts != null && ts instanceof java.sql.Timestamp) || ts === null)) {
                    return (function () {
                        return (_this.getTime() > ts.getTime()) || (_this.getTime() === ts.getTime() && _this.getNanos() > ts.getNanos());
                    })();
                }
                else if (((ts != null && ts instanceof java.util.Date) || ts === null)) {
                    return this.after$java_util_Date(ts);
                }
                else
                    throw new Error('invalid overload');
            };
            Timestamp.prototype.before = function (ts) {
                var _this = this;
                if (((ts != null && ts instanceof java.sql.Timestamp) || ts === null)) {
                    return (function () {
                        return (_this.getTime() < ts.getTime()) || (_this.getTime() === ts.getTime() && _this.getNanos() < ts.getNanos());
                    })();
                }
                else if (((ts != null && ts instanceof java.util.Date) || ts === null)) {
                    return this.before$java_util_Date(ts);
                }
                else
                    throw new Error('invalid overload');
            };
            Timestamp.prototype.compareTo$java_util_Date = function (o) {
                if (o != null && o instanceof java.sql.Timestamp) {
                    return this.compareTo(o);
                }
                else {
                    return this.compareTo(new Timestamp(o.getTime()));
                }
            };
            Timestamp.prototype.compareTo = function (o) {
                var _this = this;
                if (((o != null && o instanceof java.sql.Timestamp) || o === null)) {
                    return (function () {
                        var cmp = javaemul.internal.LongHelper.compare(_this.getTime(), o.getTime());
                        return cmp === 0 ? javaemul.internal.IntegerHelper.compare(_this.getNanos(), o.getNanos()) : cmp;
                    })();
                }
                else if (((o != null && o instanceof java.util.Date) || o === null)) {
                    return this.compareTo$java_util_Date(o);
                }
                else
                    throw new Error('invalid overload');
            };
            Timestamp.prototype.equals$java_lang_Object = function (ts) {
                return (ts != null && ts instanceof java.sql.Timestamp) && this.equals(ts);
            };
            Timestamp.prototype.equals = function (ts) {
                var _this = this;
                if (((ts != null && ts instanceof java.sql.Timestamp) || ts === null)) {
                    return (function () {
                        return ts != null && _this.getTime() === ts.getTime() && _this.getNanos() === ts.getNanos();
                    })();
                }
                else if (((ts != null) || ts === null)) {
                    return this.equals$java_lang_Object(ts);
                }
                else
                    throw new Error('invalid overload');
            };
            Timestamp.prototype.getNanos = function () {
                return this.nanos;
            };
            Timestamp.prototype.getTime = function () {
                return _super.prototype.getTime.call(this);
            };
            Timestamp.prototype.hashCode = function () {
                return _super.prototype.hashCode.call(this);
            };
            Timestamp.prototype.setNanos = function (n) {
                if (n < 0 || n > 999999999) {
                    throw new java.lang.IllegalArgumentException("nanos out of range " + n);
                }
                this.nanos = n;
                _super.prototype.setTime.call(this, (Math.round(this.getTime() / 1000)) * 1000 + ((this.nanos / 1000000 | 0)));
            };
            Timestamp.prototype.setTime = function (time) {
                _super.prototype.setTime.call(this, time);
                this.nanos = ((((time % 1000) | 0)) * 1000000);
            };
            return Timestamp;
        }(java.util.Date));
        sql.Timestamp = Timestamp;
    })(sql = java.sql || (java.sql = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var io;
    (function (io) {
        /**
         * A readable source of bytes.
         *
         * <p>Most clients will use input streams that read data from the file system
         * ({@link FileInputStream}), the network ({@link java.net.Socket#getInputStream()}/{@link
         * java.net.HttpURLConnection#getInputStream()}), or from an in-memory byte
         * array ({@link ByteArrayInputStream}).
         *
         * <p>Use {@link InputStreamReader} to adapt a byte stream like this one into a
         * character stream.
         *
         * <p>Most clients should wrap their input stream with {@link
         * BufferedInputStream}. Callers that do only bulk reads may omit buffering.
         *
         * <p>Some implementations support marking a position in the input stream and
         * resetting back to this position later. Implementations that don't return
         * false from {@link #markSupported()} and throw an {@link IOException} when
         * {@link #reset()} is called.
         *
         * <h3>Subclassing InputStream</h3>
         * Subclasses that decorate another input stream should consider subclassing
         * {@link FilterInputStream}, which delegates all calls to the source input
         * stream.
         *
         * <p>All input stream subclasses should override <strong>both</strong> {@link
         * #read() read()} and {@link #read(byte[],int,int) read(byte[],int,int)}. The
         * three argument overload is necessary for bulk access to the data. This is
         * much more efficient than byte-by-byte access.
         *
         * @see OutputStream
         */
        var InputStream = (function () {
            /**
             * This constructor does nothing. It is provided for signature
             * compatibility.
             */
            function InputStream() {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Closeable", "java.lang.AutoCloseable"] });
            }
            /**
             * Returns an estimated number of bytes that can be read or skipped without blocking for more
             * input.
             *
             * <p>Note that this method provides such a weak guarantee that it is not very useful in
             * practice.
             *
             * <p>Firstly, the guarantee is "without blocking for more input" rather than "without
             * blocking": a read may still block waiting for I/O to complete&nbsp;&mdash; the guarantee is
             * merely that it won't have to wait indefinitely for data to be written. The result of this
             * method should not be used as a license to do I/O on a thread that shouldn't be blocked.
             *
             * <p>Secondly, the result is a
             * conservative estimate and may be significantly smaller than the actual number of bytes
             * available. In particular, an implementation that always returns 0 would be correct.
             * In general, callers should only use this method if they'd be satisfied with
             * treating the result as a boolean yes or no answer to the question "is there definitely
             * data ready?".
             *
             * <p>Thirdly, the fact that a given number of bytes is "available" does not guarantee that a
             * read or skip will actually read or skip that many bytes: they may read or skip fewer.
             *
             * <p>It is particularly important to realize that you <i>must not</i> use this method to
             * size a container and assume that you can read the entirety of the stream without needing
             * to resize the container. Such callers should probably write everything they read to a
             * {@link ByteArrayOutputStream} and convert that to a byte array. Alternatively, if you're
             * reading from a file, {@link File#length} returns the current length of the file (though
             * assuming the file's length can't change may be incorrect, reading a file is inherently
             * racy).
             *
             * <p>The default implementation of this method in {@code InputStream} always returns 0.
             * Subclasses should override this method if they are able to indicate the number of bytes
             * available.
             *
             * @return the estimated number of bytes available
             * @throws IOException if this stream is closed or an error occurs
             */
            InputStream.prototype.available = function () {
                return 0;
            };
            /**
             * Closes this stream. Concrete implementations of this class should free
             * any resources during close. This implementation does nothing.
             *
             * @throws IOException
             * if an error occurs while closing this stream.
             */
            InputStream.prototype.close = function () {
            };
            /**
             * Sets a mark position in this InputStream. The parameter {@code readlimit}
             * indicates how many bytes can be read before the mark is invalidated.
             * Sending {@code reset()} will reposition the stream back to the marked
             * position provided {@code readLimit} has not been surpassed.
             * <p>
             * This default implementation does nothing and concrete subclasses must
             * provide their own implementation.
             *
             * @param readlimit
             * the number of bytes that can be read from this stream before
             * the mark is invalidated.
             * @see #markSupported()
             * @see #reset()
             */
            InputStream.prototype.mark = function (readlimit) {
            };
            /**
             * Indicates whether this stream supports the {@code mark()} and
             * {@code reset()} methods. The default implementation returns {@code false}.
             *
             * @return always {@code false}.
             * @see #mark(int)
             * @see #reset()
             */
            InputStream.prototype.markSupported = function () {
                return false;
            };
            /**
             * Reads a single byte from this stream and returns it as an integer in the
             * range from 0 to 255. Returns -1 if the end of the stream has been
             * reached. Blocks until one byte has been read, the end of the source
             * stream is detected or an exception is thrown.
             *
             * @throws IOException
             * if the stream is closed or another IOException occurs.
             */
            InputStream.prototype.read$ = function () { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); };
            /**
             * Equivalent to {@code read(buffer, 0, buffer.length)}.
             */
            InputStream.prototype.read$byte_A = function (buffer) {
                javaemul.internal.InternalPreconditions.checkNotNull(buffer);
                return this.read(buffer, 0, buffer.length);
            };
            /**
             * Reads up to {@code byteCount} bytes from this stream and stores them in
             * the byte array {@code buffer} starting at {@code byteOffset}.
             * Returns the number of bytes actually read or -1 if the end of the stream
             * has been reached.
             *
             * @throws IndexOutOfBoundsException
             * if {@code byteOffset < 0 || byteCount < 0 || byteOffset + byteCount > buffer.length}.
             * @throws IOException
             * if the stream is closed or another IOException occurs.
             */
            InputStream.prototype.read = function (buffer, byteOffset, byteCount) {
                var _this = this;
                if (((buffer != null && buffer instanceof Array) || buffer === null) && ((typeof byteOffset === 'number') || byteOffset === null) && ((typeof byteCount === 'number') || byteCount === null)) {
                    return (function () {
                        java.io.IOUtils.checkOffsetAndCount(buffer, byteOffset, byteCount);
                        for (var i = 0; i < byteCount; ++i) {
                            var c;
                            try {
                                if ((c = _this.read()) === -1) {
                                    return i === 0 ? -1 : i;
                                }
                            }
                            catch (e) {
                                if (i !== 0) {
                                    return i;
                                }
                                throw e;
                            }
                            ;
                            buffer[byteOffset + i] = (c | 0);
                        }
                        return byteCount;
                    })();
                }
                else if (((buffer != null && buffer instanceof Array) || buffer === null) && byteOffset === undefined && byteCount === undefined) {
                    return this.read$byte_A(buffer);
                }
                else if (buffer === undefined && byteOffset === undefined && byteCount === undefined) {
                    return this.read$();
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Resets this stream to the last marked location. Throws an
             * {@code IOException} if the number of bytes read since the mark has been
             * set is greater than the limit provided to {@code mark}, or if no mark
             * has been set.
             * <p>
             * This implementation always throws an {@code IOException} and concrete
             * subclasses should provide the proper implementation.
             *
             * @throws IOException
             * if this stream is closed or another IOException occurs.
             */
            InputStream.prototype.reset = function () {
                throw new java.io.IOException();
            };
            /**
             * Skips at most {@code byteCount} bytes in this stream. The number of actual
             * bytes skipped may be anywhere between 0 and {@code byteCount}. If
             * {@code byteCount} is negative, this method does nothing and returns 0, but
             * some subclasses may throw.
             *
             * <p>Note the "at most" in the description of this method: this method may
             * choose to skip fewer bytes than requested. Callers should <i>always</i>
             * check the return value.
             *
             * <p>This default implementation reads bytes into a temporary buffer. Concrete
             * subclasses should provide their own implementation.
             *
             * @return the number of bytes actually skipped.
             * @throws IOException if this stream is closed or another IOException
             * occurs.
             */
            InputStream.prototype.skip = function (byteCount) {
                if (byteCount <= 0) {
                    return 0;
                }
                var bSize = (Math.min(InputStream.MAX_SKIP_BUFFER_SIZE, byteCount) | 0);
                var b = new Array(bSize);
                var skipped = 0;
                while ((skipped < byteCount)) {
                    var toRead = (Math.min(byteCount - skipped, b.length) | 0);
                    var readCount = this.read(b, 0, toRead);
                    if (readCount === -1) {
                        break;
                    }
                    skipped += readCount;
                    if (readCount < toRead) {
                        break;
                    }
                }
                ;
                return skipped;
            };
            /**
             * Size of the temporary buffer used when skipping bytes with {@link skip(long)}.
             */
            InputStream.MAX_SKIP_BUFFER_SIZE = 4096;
            return InputStream;
        }());
        io.InputStream = InputStream;
    })(io = java.io || (java.io = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var io;
    (function (io) {
        /**
         * Wraps an existing {@link InputStream} and performs some transformation on
         * the input data while it is being read. Transformations can be anything from a
         * simple byte-wise filtering input data to an on-the-fly compression or
         * decompression of the underlying stream. Input streams that wrap another input
         * stream and provide some additional functionality on top of it usually inherit
         * from this class.
         *
         * @see FilterOutputStream
         */
        var FilterInputStream = (function (_super) {
            __extends(FilterInputStream, _super);
            /**
             * Constructs a new {@code FilterInputStream} with the specified input
             * stream as source.
             *
             * <p><strong>Warning:</strong> passing a null source creates an invalid
             * {@code FilterInputStream}, that fails on every method that is not
             * overridden. Subclasses should check for null in their constructors.
             *
             * @param in the input stream to filter reads on.
             */
            function FilterInputStream(__in) {
                _super.call(this);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Closeable", "java.lang.AutoCloseable"] });
                this.in = __in;
            }
            FilterInputStream.prototype.available = function () {
                return this.in.available();
            };
            /**
             * Closes this stream. This implementation closes the filtered stream.
             *
             * @throws IOException
             * if an error occurs while closing this stream.
             */
            FilterInputStream.prototype.close = function () {
                this.in.close();
            };
            /**
             * Sets a mark position in this stream. The parameter {@code readlimit}
             * indicates how many bytes can be read before the mark is invalidated.
             * Sending {@code reset()} will reposition this stream back to the marked
             * position, provided that {@code readlimit} has not been surpassed.
             * <p>
             * This implementation sets a mark in the filtered stream.
             *
             * @param readlimit
             * the number of bytes that can be read from this stream before
             * the mark is invalidated.
             * @see #markSupported()
             * @see #reset()
             */
            FilterInputStream.prototype.mark = function (readlimit) {
                this.in.mark(readlimit);
            };
            /**
             * Indicates whether this stream supports {@code mark()} and {@code reset()}.
             * This implementation returns whether or not the filtered stream supports
             * marking.
             *
             * @return {@code true} if {@code mark()} and {@code reset()} are supported,
             * {@code false} otherwise.
             * @see #mark(int)
             * @see #reset()
             * @see #skip(long)
             */
            FilterInputStream.prototype.markSupported = function () {
                return this.in.markSupported();
            };
            /**
             * Reads a single byte from the filtered stream and returns it as an integer
             * in the range from 0 to 255. Returns -1 if the end of this stream has been
             * reached.
             *
             * @return the byte read or -1 if the end of the filtered stream has been
             * reached.
             * @throws IOException
             * if the stream is closed or another IOException occurs.
             */
            FilterInputStream.prototype.read$ = function () {
                return this.in.read();
            };
            FilterInputStream.prototype.read = function (buffer, byteOffset, byteCount) {
                var _this = this;
                if (((buffer != null && buffer instanceof Array) || buffer === null) && ((typeof byteOffset === 'number') || byteOffset === null) && ((typeof byteCount === 'number') || byteCount === null)) {
                    return (function () {
                        return _this.in.read(buffer, byteOffset, byteCount);
                    })();
                }
                else if (((buffer != null && buffer instanceof Array) || buffer === null) && byteOffset === undefined && byteCount === undefined) {
                    return this.read$byte_A(buffer);
                }
                else if (buffer === undefined && byteOffset === undefined && byteCount === undefined) {
                    return this.read$();
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Resets this stream to the last marked location. This implementation
             * resets the target stream.
             *
             * @throws IOException
             * if this stream is already closed, no mark has been set or the
             * mark is no longer valid because more than {@code readlimit}
             * bytes have been read since setting the mark.
             * @see #mark(int)
             * @see #markSupported()
             */
            FilterInputStream.prototype.reset = function () {
                this.in.reset();
            };
            /**
             * Skips {@code byteCount} bytes in this stream. Subsequent
             * calls to {@code read} will not return these bytes unless {@code reset} is
             * used. This implementation skips {@code byteCount} bytes in the
             * filtered stream.
             *
             * @return the number of bytes actually skipped.
             * @throws IOException
             * if this stream is closed or another IOException occurs.
             * @see #mark(int)
             * @see #reset()
             */
            FilterInputStream.prototype.skip = function (byteCount) {
                return this.in.skip(byteCount);
            };
            return FilterInputStream;
        }(java.io.InputStream));
        io.FilterInputStream = FilterInputStream;
    })(io = java.io || (java.io = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var io;
    (function (io) {
        /**
         * A specialized {@link InputStream } for reading the contents of a byte array.
         *
         * @see ByteArrayOutputStream
         */
        var ByteArrayInputStream = (function (_super) {
            __extends(ByteArrayInputStream, _super);
            /**
             * Constructs a new {@code ByteArrayInputStream} on the byte array
             * {@code buf} with the initial position set to {@code offset} and the
             * number of bytes available set to {@code offset} + {@code length}.
             *
             * @param buf
             * the byte array to stream over.
             * @param offset
             * the initial position in {@code buf} to start streaming from.
             * @param length
             * the number of bytes available for streaming.
             */
            function ByteArrayInputStream(buf, offset, length) {
                if (offset === void 0) { offset = 0; }
                if (length === void 0) { length = -1; }
                _super.call(this);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Closeable", "java.lang.AutoCloseable"] });
                this.pos = 0;
                this._mark = 0;
                this.count = 0;
                if (length === -1) {
                    length = buf.length;
                }
                this.buf = buf;
                this.pos = offset;
                this._mark = offset;
                this.count = offset + length > buf.length ? buf.length : offset + length;
            }
            /**
             * Returns the number of remaining bytes.
             *
             * @return {@code count - pos}
             */
            ByteArrayInputStream.prototype.available = function () {
                return this.count - this.pos;
            };
            /**
             * Closes this stream and frees resources associated with this stream.
             *
             * @throws IOException
             * if an I/O error occurs while closing this stream.
             */
            ByteArrayInputStream.prototype.close = function () {
            };
            /**
             * Sets a mark position in this ByteArrayInputStream. The parameter
             * {@code readlimit} is ignored. Sending {@code reset()} will reposition the
             * stream back to the marked position.
             *
             * @param readlimit
             * ignored.
             * @see #markSupported()
             * @see #reset()
             */
            ByteArrayInputStream.prototype.mark = function (readlimit) {
                this._mark = this.pos;
            };
            /**
             * Indicates whether this stream supports the {@code mark()} and
             * {@code reset()} methods. Returns {@code true} since this class supports
             * these methods.
             *
             * @return always {@code true}.
             * @see #mark(int)
             * @see #reset()
             */
            ByteArrayInputStream.prototype.markSupported = function () {
                return true;
            };
            /**
             * Reads a single byte from the source byte array and returns it as an
             * integer in the range from 0 to 255. Returns -1 if the end of the source
             * array has been reached.
             *
             * @return the byte read or -1 if the end of this stream has been reached.
             */
            ByteArrayInputStream.prototype.read$ = function () {
                return this.read(null, 0, 0);
            };
            ByteArrayInputStream.prototype.read = function (buffer, byteOffset, byteCount) {
                var _this = this;
                if (((buffer != null && buffer instanceof Array) || buffer === null) && ((typeof byteOffset === 'number') || byteOffset === null) && ((typeof byteCount === 'number') || byteCount === null)) {
                    return (function () {
                        if (buffer == null) {
                            return _this.pos < _this.count ? _this.buf[_this.pos++] & 255 : -1;
                        }
                        java.io.IOUtils.checkOffsetAndCount(buffer, byteOffset, byteCount);
                        if (_this.pos >= _this.count) {
                            return -1;
                        }
                        if (byteCount === 0) {
                            return 0;
                        }
                        var copylen = _this.count - _this.pos < byteCount ? _this.count - _this.pos : byteCount;
                        java.lang.System.arraycopy(_this.buf, _this.pos, buffer, byteOffset, copylen);
                        _this.pos += copylen;
                        return copylen;
                    })();
                }
                else if (((buffer != null && buffer instanceof Array) || buffer === null) && byteOffset === undefined && byteCount === undefined) {
                    return this.read$byte_A(buffer);
                }
                else if (buffer === undefined && byteOffset === undefined && byteCount === undefined) {
                    return this.read$();
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Resets this stream to the last marked location. This implementation
             * resets the position to either the marked position, the start position
             * supplied in the constructor or 0 if neither has been provided.
             *
             * @see #mark(int)
             */
            ByteArrayInputStream.prototype.reset = function () {
                this.pos = this._mark;
            };
            /**
             * Skips {@code byteCount} bytes in this InputStream. Subsequent calls to
             * {@code read} will not return these bytes unless {@code reset} is used.
             * This implementation skips {@code byteCount} number of bytes in the target
             * stream. It does nothing and returns 0 if {@code byteCount} is negative.
             *
             * @return the number of bytes actually skipped.
             */
            ByteArrayInputStream.prototype.skip = function (byteCount) {
                if (byteCount <= 0) {
                    return 0;
                }
                var temp = this.pos;
                this.pos = this.count - this.pos < byteCount ? this.count : ((this.pos + byteCount) | 0);
                return this.pos - temp;
            };
            return ByteArrayInputStream;
        }(java.io.InputStream));
        io.ByteArrayInputStream = ByteArrayInputStream;
    })(io = java.io || (java.io = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var sql;
    (function (sql) {
        /**
         * An implementation of java.sql.Time. Derived from
         * http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Time.html
         */
        var Time = (function (_super) {
            __extends(Time, _super);
            function Time(hour, minute, second) {
                if (((typeof hour === 'number') || hour === null) && ((typeof minute === 'number') || minute === null) && ((typeof second === 'number') || second === null)) {
                    _super.call(this, 70, 0, 1, hour, minute, second);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.lang.Comparable", "java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((typeof hour === 'number') || hour === null) && minute === undefined && second === undefined) {
                    var time = hour;
                    _super.call(this, time);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.lang.Comparable", "java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            Time.valueOf = function (s) {
                var split = s.split(":");
                if (split.length !== 3) {
                    throw new java.lang.IllegalArgumentException("Invalid escape format: " + s);
                }
                try {
                    var hh = javaemul.internal.IntegerHelper.parseInt(split[0]);
                    var mm = javaemul.internal.IntegerHelper.parseInt(split[1]);
                    var ss = javaemul.internal.IntegerHelper.parseInt(split[2]);
                    return new Time(hh, mm, ss);
                }
                catch (e) {
                    throw new java.lang.IllegalArgumentException("Invalid escape format: " + s);
                }
                ;
            };
            Time.prototype.getDate = function () {
                throw new java.lang.IllegalArgumentException();
            };
            Time.prototype.getDay = function () {
                throw new java.lang.IllegalArgumentException();
            };
            Time.prototype.getMonth = function () {
                throw new java.lang.IllegalArgumentException();
            };
            Time.prototype.getYear = function () {
                throw new java.lang.IllegalArgumentException();
            };
            Time.prototype.setDate = function (i) {
                throw new java.lang.IllegalArgumentException();
            };
            Time.prototype.setMonth = function (i) {
                throw new java.lang.IllegalArgumentException();
            };
            Time.prototype.setYear = function (i) {
                throw new java.lang.IllegalArgumentException();
            };
            return Time;
        }(java.util.Date));
        sql.Time = Time;
    })(sql = java.sql || (java.sql = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var text;
    (function (text) {
        /**
         * Emulation of {@code java.text.ParseException}.
         */
        var ParseException = (function (_super) {
            __extends(ParseException, _super);
            function ParseException(s, errorOffset) {
                _super.call(this, s);
                this.message = s;
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                this.errorOffset = 0;
                this.errorOffset = errorOffset;
            }
            ParseException.prototype.getErrorOffset = function () {
                return this.errorOffset;
            };
            return ParseException;
        }(Error));
        text.ParseException = ParseException;
    })(text = java.text || (java.text = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        var annotation;
        (function (annotation) {
            /**
             * Enumerates types of declared elements in a Java program <a
             * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/annotation/ElementType.html">[Sun
             * docs]</a>.
             */
            (function (ElementType) {
                ElementType[ElementType["ANNOTATION_TYPE"] = 0] = "ANNOTATION_TYPE";
                ElementType[ElementType["CONSTRUCTOR"] = 1] = "CONSTRUCTOR";
                ElementType[ElementType["FIELD"] = 2] = "FIELD";
                ElementType[ElementType["LOCAL_VARIABLE"] = 3] = "LOCAL_VARIABLE";
                ElementType[ElementType["METHOD"] = 4] = "METHOD";
                ElementType[ElementType["PACKAGE"] = 5] = "PACKAGE";
                ElementType[ElementType["PARAMETER"] = 6] = "PARAMETER";
                ElementType[ElementType["TYPE"] = 7] = "TYPE";
            })(annotation.ElementType || (annotation.ElementType = {}));
            var ElementType = annotation.ElementType;
        })(annotation = lang.annotation || (lang.annotation = {}));
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        var Comparators = (function () {
            function Comparators() {
            }
            Comparators.NATURAL_$LI$ = function () { if (Comparators.NATURAL == null)
                Comparators.NATURAL = new Comparators.NaturalComparator(); return Comparators.NATURAL; };
            ;
            /**
             * Returns the natural Comparator.
             * <p>
             * Example:
             *
             * <pre>Comparator&lt;String&gt; compareString = Comparators.natural()</pre>
             *
             * @return the natural Comparator
             */
            Comparators.natural = function () {
                return Comparators.NATURAL_$LI$();
            };
            return Comparators;
        }());
        util.Comparators = Comparators;
        var Comparators;
        (function (Comparators) {
            var NaturalComparator = (function () {
                function NaturalComparator() {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Comparator"] });
                }
                NaturalComparator.prototype.compare = function (o1, o2) {
                    javaemul.internal.InternalPreconditions.checkNotNull(o1);
                    javaemul.internal.InternalPreconditions.checkNotNull(o2);
                    return o1.compareTo(o2);
                };
                return NaturalComparator;
            }());
            Comparators.NaturalComparator = NaturalComparator;
        })(Comparators = util.Comparators || (util.Comparators = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * A factory to create JavaScript Map instances.
         */
        var InternalJsMapFactory = (function () {
            function InternalJsMapFactory() {
            }
            InternalJsMapFactory.jsMapCtor_$LI$ = function () { if (InternalJsMapFactory.jsMapCtor == null)
                InternalJsMapFactory.jsMapCtor = InternalJsMapFactory.getJsMapConstructor(); return InternalJsMapFactory.jsMapCtor; };
            ;
            InternalJsMapFactory.getJsMapConstructor = function () {
                return window["Map"];
            };
            InternalJsMapFactory.newJsMap = function () {
                return new (InternalJsMapFactory.jsMapCtor_$LI$())();
            };
            return InternalJsMapFactory;
        }());
        util.InternalJsMapFactory = InternalJsMapFactory;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var io;
    (function (io) {
        /**
         * See <a
         * href="http://java.sun.com/javase/6/docs/api/java/io/IOException.html">the
         * official Java API doc</a> for details.
         */
        var IOException = (function (_super) {
            __extends(IOException, _super);
            function IOException(message, throwable) {
                if (((typeof message === 'string') || message === null) && ((throwable != null && throwable instanceof Error) || throwable === null)) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((typeof message === 'string') || message === null) && throwable === undefined) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((message != null && message instanceof Error) || message === null) && throwable === undefined) {
                    var throwable = message;
                    _super.call(this, throwable);
                    this.message = throwable;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (message === undefined && throwable === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return IOException;
        }(Error));
        io.IOException = IOException;
    })(io = java.io || (java.io = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var io;
    (function (io) {
        /**
         * A character encoding is not supported - <a
         * href="http://java.sun.com/javase/6/docs/api/java/io/UnsupportedEncodingException.html">[Sun's
         * docs]</a>.
         */
        var UnsupportedEncodingException = (function (_super) {
            __extends(UnsupportedEncodingException, _super);
            function UnsupportedEncodingException(msg) {
                if (((typeof msg === 'string') || msg === null)) {
                    _super.call(this, msg);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (msg === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return UnsupportedEncodingException;
        }(java.io.IOException));
        io.UnsupportedEncodingException = UnsupportedEncodingException;
    })(io = java.io || (java.io = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var javaemul;
(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Wraps a native <code>char</code> as an object.
         *
         * TODO(jat): many of the classification methods implemented here are not
         * correct in that they only handle ASCII characters, and many other methods are
         * not currently implemented. I think the proper approach is to introduce * a
         * deferred binding parameter which substitutes an implementation using a
         * fully-correct Unicode character database, at the expense of additional data
         * being downloaded. That way developers that need the functionality can get it
         * without those who don't need it paying for it.
         *
         * <pre>
         * The following methods are still not implemented -- most would require Unicode
         * character db to be useful:
         * - digit / is* / to*(int codePoint)
         * - isDefined(char)
         * - isIdentifierIgnorable(char)
         * - isJavaIdentifierPart(char)
         * - isJavaIdentifierStart(char)
         * - isJavaLetter(char) -- deprecated, so probably not
         * - isJavaLetterOrDigit(char) -- deprecated, so probably not
         * - isISOControl(char)
         * - isMirrored(char)
         * - isSpaceChar(char)
         * - isTitleCase(char)
         * - isUnicodeIdentifierPart(char)
         * - isUnicodeIdentifierStart(char)
         * - getDirectionality(*)
         * - getNumericValue(*)
         * - getType(*)
         * - reverseBytes(char) -- any use for this at all in the browser?
         * - toTitleCase(*)
         * - all the category constants for classification
         *
         * The following do not properly handle characters outside of ASCII:
         * - digit(char c, int radix)
         * - isDigit(char c)
         * - isLetter(char c)
         * - isLetterOrDigit(char c)
         * - isLowerCase(char c)
         * - isUpperCase(char c)
         * </pre>
         */
        var CharacterHelper = (function () {
            function CharacterHelper(value) {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable", "java.io.Serializable"] });
                this.value = null;
                this.value = value;
            }
            CharacterHelper.TYPE_$LI$ = function () { if (CharacterHelper.TYPE == null)
                CharacterHelper.TYPE = String; return CharacterHelper.TYPE; };
            ;
            CharacterHelper.charCount = function (codePoint) {
                return codePoint >= CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT ? 2 : 1;
            };
            CharacterHelper.codePointAt$char_A$int = function (a, index) {
                return CharacterHelper.codePointAt(new String(a), index, a.length);
            };
            CharacterHelper.codePointAt = function (a, index, limit) {
                if (((a != null && a instanceof Array) || a === null) && ((typeof index === 'number') || index === null) && ((typeof limit === 'number') || limit === null)) {
                    return (function () {
                        return CharacterHelper.codePointAt(new String(a), index, limit);
                    })();
                }
                else if (((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof index === 'number') || index === null) && ((typeof limit === 'number') || limit === null)) {
                    return javaemul.internal.CharacterHelper.codePointAt$java_lang_CharSequence$int$int(a, index, limit);
                }
                else if (((a != null && a instanceof Array) || a === null) && ((typeof index === 'number') || index === null) && limit === undefined) {
                    return javaemul.internal.CharacterHelper.codePointAt$char_A$int(a, index);
                }
                else if (((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof index === 'number') || index === null) && limit === undefined) {
                    return javaemul.internal.CharacterHelper.codePointAt$java_lang_CharSequence$int(a, index);
                }
                else
                    throw new Error('invalid overload');
            };
            CharacterHelper.codePointAt$java_lang_CharSequence$int = function (seq, index) {
                return CharacterHelper.codePointAt(seq, index, seq.length);
            };
            CharacterHelper.codePointBefore$char_A$int = function (a, index) {
                return CharacterHelper.codePointBefore(new String(a), index, 0);
            };
            CharacterHelper.codePointBefore = function (a, index, start) {
                if (((a != null && a instanceof Array) || a === null) && ((typeof index === 'number') || index === null) && ((typeof start === 'number') || start === null)) {
                    return (function () {
                        return CharacterHelper.codePointBefore(new String(a), index, start);
                    })();
                }
                else if (((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof index === 'number') || index === null) && ((typeof start === 'number') || start === null)) {
                    return javaemul.internal.CharacterHelper.codePointBefore$java_lang_CharSequence$int$int(a, index, start);
                }
                else if (((a != null && a instanceof Array) || a === null) && ((typeof index === 'number') || index === null) && start === undefined) {
                    return javaemul.internal.CharacterHelper.codePointBefore$char_A$int(a, index);
                }
                else if (((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof index === 'number') || index === null) && start === undefined) {
                    return javaemul.internal.CharacterHelper.codePointBefore$java_lang_CharSequence$int(a, index);
                }
                else
                    throw new Error('invalid overload');
            };
            CharacterHelper.codePointBefore$java_lang_CharSequence$int = function (cs, index) {
                return CharacterHelper.codePointBefore(cs, index, 0);
            };
            CharacterHelper.codePointCount = function (a, offset, count) {
                if (((a != null && a instanceof Array) || a === null) && ((typeof offset === 'number') || offset === null) && ((typeof count === 'number') || count === null)) {
                    return (function () {
                        return CharacterHelper.codePointCount(new String(a), offset, offset + count);
                    })();
                }
                else if (((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof offset === 'number') || offset === null) && ((typeof count === 'number') || count === null)) {
                    return javaemul.internal.CharacterHelper.codePointCount$java_lang_CharSequence$int$int(a, offset, count);
                }
                else
                    throw new Error('invalid overload');
            };
            CharacterHelper.codePointCount$java_lang_CharSequence$int$int = function (seq, beginIndex, endIndex) {
                var count = 0;
                for (var idx = beginIndex; idx < endIndex;) {
                    var ch = seq.charAt(idx++);
                    if (CharacterHelper.isHighSurrogate(ch) && idx < endIndex && (CharacterHelper.isLowSurrogate(seq.charAt(idx)))) {
                        ++idx;
                    }
                    ++count;
                }
                return count;
            };
            CharacterHelper.compare = function (x, y) {
                return (x).charCodeAt(0) - (y).charCodeAt(0);
            };
            CharacterHelper.digit = function (c, radix) {
                if (radix < CharacterHelper.MIN_RADIX || radix > CharacterHelper.MAX_RADIX) {
                    return -1;
                }
                if ((c).charCodeAt(0) >= ('0').charCodeAt(0) && (c).charCodeAt(0) < ('0').charCodeAt(0) + Math.min(radix, 10)) {
                    return (c).charCodeAt(0) - ('0').charCodeAt(0);
                }
                if ((c).charCodeAt(0) >= ('a').charCodeAt(0) && (c).charCodeAt(0) < (radix + ('a').charCodeAt(0) - 10)) {
                    return (c).charCodeAt(0) - ('a').charCodeAt(0) + 10;
                }
                if ((c).charCodeAt(0) >= ('A').charCodeAt(0) && (c).charCodeAt(0) < (radix + ('A').charCodeAt(0) - 10)) {
                    return (c).charCodeAt(0) - ('A').charCodeAt(0) + 10;
                }
                return -1;
            };
            CharacterHelper.getNumericValue = function (ch) {
                return (ch.charCodeAt(0) | 0);
            };
            CharacterHelper.forDigit = function (digit, radix) {
                if (((typeof digit === 'number') || digit === null) && ((typeof radix === 'number') || radix === null)) {
                    return (function () {
                        if (radix < CharacterHelper.MIN_RADIX || radix > CharacterHelper.MAX_RADIX) {
                            return 0;
                        }
                        if (digit < 0 || digit >= radix) {
                            return 0;
                        }
                        return CharacterHelper.forDigit(digit);
                    })();
                }
                else if (((typeof digit === 'number') || digit === null) && radix === undefined) {
                    return javaemul.internal.CharacterHelper.forDigit$int(digit);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * @skip
             *
             * public for shared implementation with Arrays.hashCode
             */
            CharacterHelper.hashCode = function (c) {
                return (c).charCodeAt(0);
            };
            CharacterHelper.isDigit = function (c) {
                return (new String(c).toString()).match(CharacterHelper.digitRegex()).length > 0;
            };
            CharacterHelper.digitRegex = function () {
                return new RegExp("\\d");
            };
            CharacterHelper.isHighSurrogate = function (ch) {
                return (ch).charCodeAt(0) >= (CharacterHelper.MIN_HIGH_SURROGATE).charCodeAt(0) && (ch).charCodeAt(0) <= (CharacterHelper.MAX_HIGH_SURROGATE).charCodeAt(0);
            };
            CharacterHelper.isLetter = function (c) {
                return (new String(c).toString()).match(CharacterHelper.leterRegex()).length > 0;
            };
            CharacterHelper.leterRegex = function () {
                return new RegExp("[A-Z]", "i");
            };
            CharacterHelper.isLetterOrDigit = function (c) {
                return (new String(c).toString()).match(CharacterHelper.leterOrDigitRegex()).length > 0;
            };
            CharacterHelper.leterOrDigitRegex = function () {
                return new RegExp("[A-Z\\d]", "i");
            };
            CharacterHelper.isLowerCase = function (c) {
                return CharacterHelper.toLowerCase(c) === c && CharacterHelper.isLetter(c);
            };
            CharacterHelper.isLowSurrogate = function (ch) {
                return (ch).charCodeAt(0) >= (CharacterHelper.MIN_LOW_SURROGATE).charCodeAt(0) && (ch).charCodeAt(0) <= (CharacterHelper.MAX_LOW_SURROGATE).charCodeAt(0);
            };
            /**
             * Deprecated - see isWhitespace(char).
             */
            CharacterHelper.isSpace = function (c) {
                switch ((c)) {
                    case ' ':
                        return true;
                    case '\n':
                        return true;
                    case '\t':
                        return true;
                    case '\f':
                        return true;
                    case '\r':
                        return true;
                    default:
                        return false;
                }
            };
            CharacterHelper.isWhitespace = function (ch) {
                if (((typeof ch === 'string') || ch === null)) {
                    return (function () {
                        return (new String(ch).toString()).match(CharacterHelper.whitespaceRegex()).length > 0;
                    })();
                }
                else if (((typeof ch === 'number') || ch === null)) {
                    return javaemul.internal.CharacterHelper.isWhitespace$int(ch);
                }
                else
                    throw new Error('invalid overload');
            };
            CharacterHelper.isWhitespace$int = function (codePoint) {
                return (String.fromCharCode(codePoint)).match(CharacterHelper.whitespaceRegex()).length > 0;
            };
            CharacterHelper.whitespaceRegex = function () {
                return new RegExp("[\\t-\\r \\u1680\\u180E\\u2000-\\u2006\\u2008-\\u200A\\u2028\\u2029\\u205F\\u3000\\uFEFF]|[\\x1C-\\x1F]");
            };
            CharacterHelper.isSupplementaryCodePoint = function (codePoint) {
                return codePoint >= CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT && codePoint <= CharacterHelper.MAX_CODE_POINT;
            };
            CharacterHelper.isSurrogatePair = function (highSurrogate, lowSurrogate) {
                return CharacterHelper.isHighSurrogate(highSurrogate) && CharacterHelper.isLowSurrogate(lowSurrogate);
            };
            CharacterHelper.isUpperCase = function (c) {
                return CharacterHelper.toUpperCase(c) === c && CharacterHelper.isLetter(c);
            };
            CharacterHelper.isValidCodePoint = function (codePoint) {
                return codePoint >= CharacterHelper.MIN_CODE_POINT && codePoint <= CharacterHelper.MAX_CODE_POINT;
            };
            CharacterHelper.offsetByCodePoints = function (a, start, count, index, codePointOffset) {
                if (((a != null && a instanceof Array) || a === null) && ((typeof start === 'number') || start === null) && ((typeof count === 'number') || count === null) && ((typeof index === 'number') || index === null) && ((typeof codePointOffset === 'number') || codePointOffset === null)) {
                    return (function () {
                        return CharacterHelper.offsetByCodePoints((function (str, index, len) { return str.substring(index, index + len); })((a).join(''), start, count), index, codePointOffset);
                    })();
                }
                else if (((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof start === 'number') || start === null) && ((typeof count === 'number') || count === null) && index === undefined && codePointOffset === undefined) {
                    return javaemul.internal.CharacterHelper.offsetByCodePoints$java_lang_CharSequence$int$int(a, start, count);
                }
                else
                    throw new Error('invalid overload');
            };
            CharacterHelper.offsetByCodePoints$java_lang_CharSequence$int$int = function (seq, index, codePointOffset) {
                if (codePointOffset < 0) {
                    while ((codePointOffset < 0)) {
                        --index;
                        if (CharacterHelper.isLowSurrogate(seq.charAt(index)) && CharacterHelper.isHighSurrogate(seq.charAt(index - 1))) {
                            --index;
                        }
                        ++codePointOffset;
                    }
                    ;
                }
                else {
                    while ((codePointOffset > 0)) {
                        if (CharacterHelper.isHighSurrogate(seq.charAt(index)) && CharacterHelper.isLowSurrogate(seq.charAt(index + 1))) {
                            ++index;
                        }
                        ++index;
                        --codePointOffset;
                    }
                    ;
                }
                return index;
            };
            CharacterHelper.toChars$int = function (codePoint) {
                javaemul.internal.InternalPreconditions.checkCriticalArgument(codePoint >= 0 && codePoint <= CharacterHelper.MAX_CODE_POINT);
                if (codePoint >= CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT) {
                    return [CharacterHelper.getHighSurrogate(codePoint), CharacterHelper.getLowSurrogate(codePoint)];
                }
                else {
                    return [String.fromCharCode(codePoint)];
                }
            };
            CharacterHelper.toChars = function (codePoint, dst, dstIndex) {
                if (((typeof codePoint === 'number') || codePoint === null) && ((dst != null && dst instanceof Array) || dst === null) && ((typeof dstIndex === 'number') || dstIndex === null)) {
                    return (function () {
                        javaemul.internal.InternalPreconditions.checkCriticalArgument(codePoint >= 0 && codePoint <= CharacterHelper.MAX_CODE_POINT);
                        if (codePoint >= CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT) {
                            dst[dstIndex++] = CharacterHelper.getHighSurrogate(codePoint);
                            dst[dstIndex] = CharacterHelper.getLowSurrogate(codePoint);
                            return 2;
                        }
                        else {
                            dst[dstIndex] = String.fromCharCode(codePoint);
                            return 1;
                        }
                    })();
                }
                else if (((typeof codePoint === 'number') || codePoint === null) && dst === undefined && dstIndex === undefined) {
                    return javaemul.internal.CharacterHelper.toChars$int(codePoint);
                }
                else
                    throw new Error('invalid overload');
            };
            CharacterHelper.toCodePoint = function (highSurrogate, lowSurrogate) {
                return CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT + (((highSurrogate).charCodeAt(0) & 1023) << 10) + ((lowSurrogate).charCodeAt(0) & 1023);
            };
            CharacterHelper.toLowerCase = function (c) {
                return new String(c).toString().toLowerCase().charAt(0);
            };
            CharacterHelper.toString = function (x) {
                return new String(x).toString();
            };
            CharacterHelper.toUpperCase = function (c) {
                return new String(c).toString().toUpperCase().charAt(0);
            };
            CharacterHelper.valueOf = function (c) {
                if ((c).charCodeAt(0) < 128) {
                    var result = CharacterHelper.BoxedValues.boxedValues_$LI$()[c];
                    if (result == null) {
                        result = CharacterHelper.BoxedValues.boxedValues_$LI$()[c] = new CharacterHelper(c);
                    }
                    return result;
                }
                return new CharacterHelper(c);
            };
            CharacterHelper.codePointAt$java_lang_CharSequence$int$int = function (cs, index, limit) {
                var hiSurrogate = cs.charAt(index++);
                var loSurrogate;
                if (CharacterHelper.isHighSurrogate(hiSurrogate) && index < limit && CharacterHelper.isLowSurrogate(loSurrogate = cs.charAt(index))) {
                    return CharacterHelper.toCodePoint(hiSurrogate, loSurrogate);
                }
                return (hiSurrogate).charCodeAt(0);
            };
            CharacterHelper.codePointBefore$java_lang_CharSequence$int$int = function (cs, index, start) {
                var loSurrogate = cs.charAt(--index);
                var highSurrogate;
                if (CharacterHelper.isLowSurrogate(loSurrogate) && index > start && CharacterHelper.isHighSurrogate(highSurrogate = cs.charAt(index - 1))) {
                    return CharacterHelper.toCodePoint(highSurrogate, loSurrogate);
                }
                return (loSurrogate).charCodeAt(0);
            };
            /**
             * Shared implementation with {@link LongHelper#toString}.
             *
             * @skip
             */
            CharacterHelper.forDigit$int = function (digit) {
                var overBaseTen = digit - 10;
                return String.fromCharCode((overBaseTen < 0 ? ('0').charCodeAt(0) + digit : ('a').charCodeAt(0) + overBaseTen));
            };
            /**
             * Computes the high surrogate character of the UTF16 representation of a
             * non-BMP code point. See {@link getLowSurrogate}.
             *
             * @param codePoint
             * requested codePoint, required to be >=
             * MIN_SUPPLEMENTARY_CODE_POINT
             * @return high surrogate character
             */
            CharacterHelper.getHighSurrogate = function (codePoint) {
                return String.fromCharCode(((CharacterHelper.MIN_HIGH_SURROGATE).charCodeAt(0) + (((codePoint - CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT) >> 10) & 1023)));
            };
            /**
             * Computes the low surrogate character of the UTF16 representation of a
             * non-BMP code point. See {@link getHighSurrogate}.
             *
             * @param codePoint
             * requested codePoint, required to be >=
             * MIN_SUPPLEMENTARY_CODE_POINT
             * @return low surrogate character
             */
            CharacterHelper.getLowSurrogate = function (codePoint) {
                return String.fromCharCode(((CharacterHelper.MIN_LOW_SURROGATE).charCodeAt(0) + ((codePoint - CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT) & 1023)));
            };
            CharacterHelper.prototype.charValue = function () {
                return this.value;
            };
            CharacterHelper.prototype.compareTo = function (c) {
                var _this = this;
                if (((c != null && c instanceof javaemul.internal.CharacterHelper) || c === null)) {
                    return (function () {
                        return CharacterHelper.compare(_this.value, c.value);
                    })();
                }
                else
                    throw new Error('invalid overload');
            };
            CharacterHelper.prototype.equals = function (o) {
                return (o != null && o instanceof javaemul.internal.CharacterHelper) && (o.value === this.value);
            };
            CharacterHelper.prototype.hashCode = function () {
                return CharacterHelper.hashCode(this.value);
            };
            CharacterHelper.prototype.toString = function () {
                return new String(this.value).toString();
            };
            CharacterHelper.MIN_RADIX = 2;
            CharacterHelper.MAX_RADIX = 36;
            CharacterHelper.MIN_VALUE = '\u0000';
            CharacterHelper.MAX_VALUE = '\uffff';
            CharacterHelper.MIN_SURROGATE = '\ud800';
            CharacterHelper.MAX_SURROGATE = '\udfff';
            CharacterHelper.MIN_LOW_SURROGATE = '\udc00';
            CharacterHelper.MAX_LOW_SURROGATE = '\udfff';
            CharacterHelper.MIN_HIGH_SURROGATE = '\ud800';
            CharacterHelper.MAX_HIGH_SURROGATE = '\udbff';
            CharacterHelper.MIN_SUPPLEMENTARY_CODE_POINT = 65536;
            CharacterHelper.MIN_CODE_POINT = 0;
            CharacterHelper.MAX_CODE_POINT = 1114111;
            CharacterHelper.SIZE = 16;
            return CharacterHelper;
        }());
        internal.CharacterHelper = CharacterHelper;
        var CharacterHelper;
        (function (CharacterHelper) {
            /**
             * Use nested class to avoid clinit on outer.
             */
            var BoxedValues = (function () {
                function BoxedValues() {
                }
                BoxedValues.boxedValues_$LI$ = function () { if (BoxedValues.boxedValues == null)
                    BoxedValues.boxedValues = new Array(128); return BoxedValues.boxedValues; };
                ;
                return BoxedValues;
            }());
            CharacterHelper.BoxedValues = BoxedValues;
        })(CharacterHelper = internal.CharacterHelper || (internal.CharacterHelper = {}));
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var javaemul;
(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Abstract base class for numeric wrapper classes.
         */
        var NumberHelper = (function () {
            function NumberHelper() {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
            }
            /**
             * @skip
             *
             * This function will determine the radix that the string is expressed
             * in based on the parsing rules defined in the Javadocs for
             * Integer.decode() and invoke __parseAndValidateInt.
             */
            NumberHelper.__decodeAndValidateInt = function (s, lowerBound, upperBound) {
                var decode = NumberHelper.__decodeNumberString(s);
                return NumberHelper.__parseAndValidateInt(decode.payload, decode.radix, lowerBound, upperBound);
            };
            NumberHelper.__decodeNumberString = function (s) {
                var negative;
                if ((function (str, searchString, position) {
                    if (position === void 0) { position = 0; }
                    return str.substr(position, searchString.length) === searchString;
                })(s, "-")) {
                    negative = true;
                    s = s.substring(1);
                }
                else {
                    negative = false;
                    if ((function (str, searchString, position) {
                        if (position === void 0) { position = 0; }
                        return str.substr(position, searchString.length) === searchString;
                    })(s, "+")) {
                        s = s.substring(1);
                    }
                }
                var radix;
                if ((function (str, searchString, position) {
                    if (position === void 0) { position = 0; }
                    return str.substr(position, searchString.length) === searchString;
                })(s, "0x") || (function (str, searchString, position) {
                    if (position === void 0) { position = 0; }
                    return str.substr(position, searchString.length) === searchString;
                })(s, "0X")) {
                    s = s.substring(2);
                    radix = 16;
                }
                else if ((function (str, searchString, position) {
                    if (position === void 0) { position = 0; }
                    return str.substr(position, searchString.length) === searchString;
                })(s, "#")) {
                    s = s.substring(1);
                    radix = 16;
                }
                else if ((function (str, searchString, position) {
                    if (position === void 0) { position = 0; }
                    return str.substr(position, searchString.length) === searchString;
                })(s, "0")) {
                    radix = 8;
                }
                else {
                    radix = 10;
                }
                if (negative) {
                    s = "-" + s;
                }
                return new NumberHelper.__Decode(radix, s);
            };
            /**
             * @skip
             *
             * This function contains common logic for parsing a String as a
             * floating- point number and validating the range.
             */
            NumberHelper.__parseAndValidateDouble = function (s) {
                if (!NumberHelper.__isValidDouble(s)) {
                    throw java.lang.NumberFormatException.forInputString(s);
                }
                return parseFloat(s);
            };
            /**
             * @skip
             *
             * This function contains common logic for parsing a String in a given
             * radix and validating the result.
             */
            NumberHelper.__parseAndValidateInt = function (s, radix, lowerBound, upperBound) {
                if (s == null) {
                    throw java.lang.NumberFormatException.forNullInputString();
                }
                if (radix < javaemul.internal.CharacterHelper.MIN_RADIX || radix > javaemul.internal.CharacterHelper.MAX_RADIX) {
                    throw java.lang.NumberFormatException.forRadix(radix);
                }
                var length = s.length;
                var startIndex = (length > 0) && (s.charAt(0) === '-' || s.charAt(0) === '+') ? 1 : 0;
                for (var i = startIndex; i < length; i++) {
                    if (javaemul.internal.CharacterHelper.digit(s.charAt(i), radix) === -1) {
                        throw java.lang.NumberFormatException.forInputString(s);
                    }
                }
                var toReturn = (parseInt(s, radix) | 0);
                var isTooLow = toReturn < lowerBound;
                if (javaemul.internal.DoubleHelper.isNaN(toReturn)) {
                    throw java.lang.NumberFormatException.forInputString(s);
                }
                else if (isTooLow || toReturn > upperBound) {
                    throw java.lang.NumberFormatException.forInputString(s);
                }
                return toReturn;
            };
            /**
             * @skip
             *
             * This function contains common logic for parsing a String in a given
             * radix and validating the result.
             */
            NumberHelper.__parseAndValidateLong = function (s, radix) {
                if (s == null) {
                    throw java.lang.NumberFormatException.forNullInputString();
                }
                if (radix < javaemul.internal.CharacterHelper.MIN_RADIX || radix > javaemul.internal.CharacterHelper.MAX_RADIX) {
                    throw java.lang.NumberFormatException.forRadix(radix);
                }
                var orig = s;
                var length = s.length;
                var negative = false;
                if (length > 0) {
                    var c = s.charAt(0);
                    if (c === '-' || c === '+') {
                        s = s.substring(1);
                        length--;
                        negative = (c === '-');
                    }
                }
                if (length === 0) {
                    throw java.lang.NumberFormatException.forInputString(orig);
                }
                while ((s.length > 0 && s.charAt(0) === '0')) {
                    s = s.substring(1);
                    length--;
                }
                ;
                if (length > NumberHelper.__ParseLong.maxLengthForRadix_$LI$()[radix]) {
                    throw java.lang.NumberFormatException.forInputString(orig);
                }
                for (var i = 0; i < length; i++) {
                    if (javaemul.internal.CharacterHelper.digit(s.charAt(i), radix) === -1) {
                        throw java.lang.NumberFormatException.forInputString(orig);
                    }
                }
                var toReturn = 0;
                var maxDigits = NumberHelper.__ParseLong.maxDigitsForRadix_$LI$()[radix];
                var radixPower = NumberHelper.__ParseLong.maxDigitsRadixPower_$LI$()[radix];
                var minValue = -NumberHelper.__ParseLong.maxValueForRadix_$LI$()[radix];
                var firstTime = true;
                var head = length % maxDigits;
                if (head > 0) {
                    toReturn = -(parseInt(s.substring(0, head), radix) | 0);
                    s = s.substring(head);
                    length -= head;
                    firstTime = false;
                }
                while ((length >= maxDigits)) {
                    head = (parseInt(s.substring(0, maxDigits), radix) | 0);
                    s = s.substring(maxDigits);
                    length -= maxDigits;
                    if (!firstTime) {
                        if (toReturn < minValue) {
                            throw java.lang.NumberFormatException.forInputString(orig);
                        }
                        toReturn *= radixPower;
                    }
                    else {
                        firstTime = false;
                    }
                    toReturn -= head;
                }
                ;
                if (toReturn > 0) {
                    throw java.lang.NumberFormatException.forInputString(orig);
                }
                if (!negative) {
                    toReturn = -toReturn;
                    if (toReturn < 0) {
                        throw java.lang.NumberFormatException.forInputString(orig);
                    }
                }
                return toReturn;
            };
            /**
             * @skip
             *
             * @param str
             * @return {@code true} if the string matches the float format,
             * {@code false} otherwise
             */
            NumberHelper.__isValidDouble = function (str) {
                if (NumberHelper.floatRegex == null) {
                    NumberHelper.floatRegex = NumberHelper.createFloatRegex();
                }
                return NumberHelper.floatRegex.test(str);
            };
            NumberHelper.createFloatRegex = function () {
                return /^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/;
            };
            NumberHelper.prototype.byteValue = function () {
                return (this.intValue() | 0);
            };
            NumberHelper.prototype.shortValue = function () {
                return (this.intValue() | 0);
            };
            return NumberHelper;
        }());
        internal.NumberHelper = NumberHelper;
        var NumberHelper;
        (function (NumberHelper) {
            var __Decode = (function () {
                function __Decode(radix, payload) {
                    this.radix = 0;
                    this.radix = radix;
                    this.payload = payload;
                }
                return __Decode;
            }());
            NumberHelper.__Decode = __Decode;
            /**
             * Use nested class to avoid clinit on outer.
             */
            var __ParseLong = (function () {
                function __ParseLong() {
                }
                __ParseLong.__static_initialize = function () { if (!__ParseLong.__static_initialized) {
                    __ParseLong.__static_initialized = true;
                    __ParseLong.__static_initializer_0();
                } };
                __ParseLong.maxDigitsForRadix_$LI$ = function () { __ParseLong.__static_initialize(); if (__ParseLong.maxDigitsForRadix == null)
                    __ParseLong.maxDigitsForRadix = [-1, -1, 30, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]; return __ParseLong.maxDigitsForRadix; };
                ;
                __ParseLong.maxDigitsRadixPower_$LI$ = function () { __ParseLong.__static_initialize(); if (__ParseLong.maxDigitsRadixPower == null)
                    __ParseLong.maxDigitsRadixPower = new Array(37); return __ParseLong.maxDigitsRadixPower; };
                ;
                __ParseLong.maxLengthForRadix_$LI$ = function () { __ParseLong.__static_initialize(); if (__ParseLong.maxLengthForRadix == null)
                    __ParseLong.maxLengthForRadix = [-1, -1, 63, 40, 32, 28, 25, 23, 21, 20, 19, 19, 18, 18, 17, 17, 16, 16, 16, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 13, 13]; return __ParseLong.maxLengthForRadix; };
                ;
                __ParseLong.maxValueForRadix_$LI$ = function () { __ParseLong.__static_initialize(); if (__ParseLong.maxValueForRadix == null)
                    __ParseLong.maxValueForRadix = new Array(37); return __ParseLong.maxValueForRadix; };
                ;
                __ParseLong.__static_initializer_0 = function () {
                    for (var i = 2; i <= 36; i++) {
                        __ParseLong.maxDigitsRadixPower_$LI$()[i] = (Math.pow(i, __ParseLong.maxDigitsForRadix_$LI$()[i]) | 0);
                        __ParseLong.maxValueForRadix_$LI$()[i] = Math.round(9223372036854775807 / __ParseLong.maxDigitsRadixPower_$LI$()[i]);
                    }
                };
                __ParseLong.__static_initialized = false;
                return __ParseLong;
            }());
            NumberHelper.__ParseLong = __ParseLong;
        })(NumberHelper = internal.NumberHelper || (internal.NumberHelper = {}));
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var javaemul;
(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Wraps a primitive <code>double</code> as an object.
         */
        var DoubleHelper = (function (_super) {
            __extends(DoubleHelper, _super);
            function DoubleHelper(s) {
                if (((typeof s === 'string') || s === null)) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable", "java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((typeof s === 'number') || s === null)) {
                    var value = s;
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable", "java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            DoubleHelper.NaN_$LI$ = function () { if (DoubleHelper.NaN == null)
                DoubleHelper.NaN = 0.0 / 0.0; return DoubleHelper.NaN; };
            ;
            DoubleHelper.NEGATIVE_INFINITY_$LI$ = function () { if (DoubleHelper.NEGATIVE_INFINITY == null)
                DoubleHelper.NEGATIVE_INFINITY = -1.0 / 0.0; return DoubleHelper.NEGATIVE_INFINITY; };
            ;
            DoubleHelper.POSITIVE_INFINITY_$LI$ = function () { if (DoubleHelper.POSITIVE_INFINITY == null)
                DoubleHelper.POSITIVE_INFINITY = 1.0 / 0.0; return DoubleHelper.POSITIVE_INFINITY; };
            ;
            DoubleHelper.compare = function (x, y) {
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
                if (x === y) {
                    return 0;
                }
                if (DoubleHelper.isNaN(x)) {
                    if (DoubleHelper.isNaN(y)) {
                        return 0;
                    }
                    else {
                        return 1;
                    }
                }
                else {
                    return -1;
                }
            };
            DoubleHelper.doubleToLongBits = function (value) {
                if (DoubleHelper.isNaN(value)) {
                    return 9221120237041090560;
                }
                var negative = false;
                if (value === 0.0) {
                    if (1.0 / value === DoubleHelper.NEGATIVE_INFINITY_$LI$()) {
                        return -9223372036854775808;
                    }
                    else {
                        return 0;
                    }
                }
                if (value < 0.0) {
                    negative = true;
                    value = -value;
                }
                if (DoubleHelper.isInfinite(value)) {
                    if (negative) {
                        return -4503599627370496;
                    }
                    else {
                        return 9218868437227405312;
                    }
                }
                var exp = 0;
                if (value < 1.0) {
                    var bit = 512;
                    for (var i = 0; i < 10; i++, bit >>= 1) {
                        if (value < DoubleHelper.PowersTable.invPowers_$LI$()[i] && exp - bit >= -1023) {
                            value *= DoubleHelper.PowersTable.powers_$LI$()[i];
                            exp -= bit;
                        }
                    }
                    if (value < 1.0 && exp - 1 >= -1023) {
                        value *= 2.0;
                        exp--;
                    }
                }
                else if (value >= 2.0) {
                    var bit = 512;
                    for (var i = 0; i < 10; i++, bit >>= 1) {
                        if (value >= DoubleHelper.PowersTable.powers_$LI$()[i]) {
                            value *= DoubleHelper.PowersTable.invPowers_$LI$()[i];
                            exp += bit;
                        }
                    }
                }
                if (exp > -1023) {
                    value -= 1.0;
                }
                else {
                    value *= 0.5;
                }
                var ihi = Math.round((value * DoubleHelper.POWER_20));
                value -= ihi * DoubleHelper.POWER_MINUS_20;
                var ilo = Math.round((value * DoubleHelper.POWER_52));
                ihi |= (exp + 1023) << 20;
                if (negative) {
                    ihi |= 2147483648;
                }
                return (ihi << 32) | ilo;
            };
            /**
             * @skip Here for shared implementation with Arrays.hashCode
             */
            DoubleHelper.hashCode = function (d) {
                return (d | 0);
            };
            DoubleHelper.isInfinite = function (x) {
                return x === javaemul.internal.JsUtils.getInfinity() || x === -javaemul.internal.JsUtils.getInfinity();
            };
            DoubleHelper.isNaN = function (x) {
                return isNaN(x);
            };
            DoubleHelper.longBitsToDouble = function (bits) {
                var ihi = Math.round((bits >> 32));
                var ilo = Math.round((bits & 4294967295));
                if (ihi < 0) {
                    ihi += 4294967296;
                }
                if (ilo < 0) {
                    ilo += 4294967296;
                }
                var negative = (ihi & -2147483648) !== 0;
                var exp = (((ihi >> 20) & 2047) | 0);
                ihi &= 1048575;
                if (exp === 0) {
                    var d = (ihi * DoubleHelper.POWER_MINUS_20) + (ilo * DoubleHelper.POWER_MINUS_52);
                    d *= DoubleHelper.POWER_MINUS_1022;
                    return negative ? (d === 0.0 ? -0.0 : -d) : d;
                }
                else if (exp === 2047) {
                    if (ihi === 0 && ilo === 0) {
                        return negative ? DoubleHelper.NEGATIVE_INFINITY_$LI$() : DoubleHelper.POSITIVE_INFINITY_$LI$();
                    }
                    else {
                        return DoubleHelper.NaN_$LI$();
                    }
                }
                exp -= 1023;
                var d = 1.0 + (ihi * DoubleHelper.POWER_MINUS_20) + (ilo * DoubleHelper.POWER_MINUS_52);
                if (exp > 0) {
                    var bit = 512;
                    for (var i = 0; i < 10; i++, bit >>= 1) {
                        if (exp >= bit) {
                            d *= DoubleHelper.PowersTable.powers_$LI$()[i];
                            exp -= bit;
                        }
                    }
                }
                else if (exp < 0) {
                    while ((exp < 0)) {
                        var bit = 512;
                        for (var i = 0; i < 10; i++, bit >>= 1) {
                            if (exp <= -bit) {
                                d *= DoubleHelper.PowersTable.invPowers_$LI$()[i];
                                exp += bit;
                            }
                        }
                    }
                    ;
                }
                return negative ? -d : d;
            };
            DoubleHelper.parseDouble = function (s) {
                return internal.NumberHelper.__parseAndValidateDouble(s);
            };
            DoubleHelper.toString = function (b) {
                return new String(b).toString();
            };
            DoubleHelper.valueOf$double = function (d) {
                return new DoubleHelper(d);
            };
            DoubleHelper.valueOf = function (s) {
                if (((typeof s === 'string') || s === null)) {
                    return (function () {
                        return new DoubleHelper(s);
                    })();
                }
                else if (((typeof s === 'number') || s === null)) {
                    return javaemul.internal.DoubleHelper.valueOf$double(s);
                }
                else
                    throw new Error('invalid overload');
            };
            DoubleHelper.prototype.byteValue = function () {
                return (this.doubleValue() | 0);
            };
            DoubleHelper.prototype.compareTo = function (b) {
                var _this = this;
                if (((b != null && b instanceof javaemul.internal.DoubleHelper) || b === null)) {
                    return (function () {
                        return DoubleHelper.compare(_this.doubleValue(), b.doubleValue());
                    })();
                }
                else
                    throw new Error('invalid overload');
            };
            DoubleHelper.prototype.doubleValue = function () {
                return DoubleHelper.unsafeCast(javaemul.internal.InternalPreconditions.checkNotNull(this));
            };
            DoubleHelper.unsafeCast = function (instance) {
                return instance;
            };
            DoubleHelper.prototype.equals = function (o) {
                return javaemul.internal.InternalPreconditions.checkNotNull(this) === o;
            };
            DoubleHelper.prototype.floatValue = function () {
                return this.doubleValue();
            };
            /**
             * Performance caution: using Double objects as map keys is not recommended.
             * Using double values as keys is generally a bad idea due to difficulty
             * determining exact equality. In addition, there is no efficient JavaScript
             * equivalent of <code>doubleToIntBits</code>. As a result, this method
             * computes a hash code by truncating the whole number portion of the
             * double, which may lead to poor performance for certain value sets if
             * Doubles are used as keys in a {@link java.util.HashMap}.
             */
            DoubleHelper.prototype.hashCode = function () {
                return DoubleHelper.hashCode(this.doubleValue());
            };
            DoubleHelper.prototype.intValue = function () {
                return (this.doubleValue() | 0);
            };
            DoubleHelper.prototype.isInfinite = function () {
                return DoubleHelper.isInfinite(this.doubleValue());
            };
            DoubleHelper.prototype.isNaN = function () {
                return DoubleHelper.isNaN(this.doubleValue());
            };
            DoubleHelper.prototype.longValue = function () {
                return Math.round(this.doubleValue());
            };
            DoubleHelper.prototype.shortValue = function () {
                return (this.doubleValue() | 0);
            };
            DoubleHelper.prototype.toString = function () {
                return DoubleHelper.toString(this.doubleValue());
            };
            DoubleHelper.MAX_VALUE = 1.7976931348623157E308;
            DoubleHelper.MIN_VALUE = 4.9E-324;
            DoubleHelper.MIN_NORMAL = 2.2250738585072014E-308;
            DoubleHelper.MAX_EXPONENT = 1023;
            DoubleHelper.MIN_EXPONENT = -1022;
            DoubleHelper.SIZE = 64;
            DoubleHelper.POWER_512 = 1.3407807929942597E154;
            DoubleHelper.POWER_MINUS_512 = 7.458340731200207E-155;
            DoubleHelper.POWER_256 = 1.157920892373162E77;
            DoubleHelper.POWER_MINUS_256 = 8.636168555094445E-78;
            DoubleHelper.POWER_128 = 3.4028236692093846E38;
            DoubleHelper.POWER_MINUS_128 = 2.9387358770557188E-39;
            DoubleHelper.POWER_64 = 1.8446744073709552E19;
            DoubleHelper.POWER_MINUS_64 = 5.421010862427522E-20;
            DoubleHelper.POWER_52 = 4.503599627370496E15;
            DoubleHelper.POWER_MINUS_52 = 2.220446049250313E-16;
            DoubleHelper.POWER_32 = 4.294967296E9;
            DoubleHelper.POWER_MINUS_32 = 2.3283064365386963E-10;
            DoubleHelper.POWER_31 = 2.147483648E9;
            DoubleHelper.POWER_20 = 1048576.0;
            DoubleHelper.POWER_MINUS_20 = 9.5367431640625E-7;
            DoubleHelper.POWER_16 = 65536.0;
            DoubleHelper.POWER_MINUS_16 = 1.52587890625E-5;
            DoubleHelper.POWER_8 = 256.0;
            DoubleHelper.POWER_MINUS_8 = 0.00390625;
            DoubleHelper.POWER_4 = 16.0;
            DoubleHelper.POWER_MINUS_4 = 0.0625;
            DoubleHelper.POWER_2 = 4.0;
            DoubleHelper.POWER_MINUS_2 = 0.25;
            DoubleHelper.POWER_1 = 2.0;
            DoubleHelper.POWER_MINUS_1 = 0.5;
            DoubleHelper.POWER_MINUS_1022 = 2.2250738585072014E-308;
            return DoubleHelper;
        }(javaemul.internal.NumberHelper));
        internal.DoubleHelper = DoubleHelper;
        var DoubleHelper;
        (function (DoubleHelper) {
            var PowersTable = (function () {
                function PowersTable() {
                }
                PowersTable.powers_$LI$ = function () { if (PowersTable.powers == null)
                    PowersTable.powers = [javaemul.internal.DoubleHelper.POWER_512, javaemul.internal.DoubleHelper.POWER_256, javaemul.internal.DoubleHelper.POWER_128, javaemul.internal.DoubleHelper.POWER_64, javaemul.internal.DoubleHelper.POWER_32, javaemul.internal.DoubleHelper.POWER_16, javaemul.internal.DoubleHelper.POWER_8, javaemul.internal.DoubleHelper.POWER_4, javaemul.internal.DoubleHelper.POWER_2, javaemul.internal.DoubleHelper.POWER_1]; return PowersTable.powers; };
                ;
                PowersTable.invPowers_$LI$ = function () { if (PowersTable.invPowers == null)
                    PowersTable.invPowers = [javaemul.internal.DoubleHelper.POWER_MINUS_512, javaemul.internal.DoubleHelper.POWER_MINUS_256, javaemul.internal.DoubleHelper.POWER_MINUS_128, javaemul.internal.DoubleHelper.POWER_MINUS_64, javaemul.internal.DoubleHelper.POWER_MINUS_32, javaemul.internal.DoubleHelper.POWER_MINUS_16, javaemul.internal.DoubleHelper.POWER_MINUS_8, javaemul.internal.DoubleHelper.POWER_MINUS_4, javaemul.internal.DoubleHelper.POWER_MINUS_2, javaemul.internal.DoubleHelper.POWER_MINUS_1]; return PowersTable.invPowers; };
                ;
                return PowersTable;
            }());
            DoubleHelper.PowersTable = PowersTable;
        })(DoubleHelper = internal.DoubleHelper || (internal.DoubleHelper = {}));
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var javaemul;
(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Wraps a primitive <code>short</code> as an object.
         */
        var ShortHelper = (function (_super) {
            __extends(ShortHelper, _super);
            function ShortHelper(s) {
                var _this = this;
                if (((typeof s === 'string') || s === null)) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable", "java.io.Serializable"] });
                    this.value = 0;
                    (function () {
                        _this.value = ShortHelper.parseShort(s);
                    })();
                }
                else if (((typeof s === 'number') || s === null)) {
                    var value = s;
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable", "java.io.Serializable"] });
                    this.value = 0;
                    (function () {
                        _this.value = value;
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            ShortHelper.MIN_VALUE_$LI$ = function () { if (ShortHelper.MIN_VALUE == null)
                ShortHelper.MIN_VALUE = (32768 | 0); return ShortHelper.MIN_VALUE; };
            ;
            ShortHelper.MAX_VALUE_$LI$ = function () { if (ShortHelper.MAX_VALUE == null)
                ShortHelper.MAX_VALUE = (32767 | 0); return ShortHelper.MAX_VALUE; };
            ;
            ShortHelper.TYPE_$LI$ = function () { if (ShortHelper.TYPE == null)
                ShortHelper.TYPE = Number; return ShortHelper.TYPE; };
            ;
            ShortHelper.compare = function (x, y) {
                return x - y;
            };
            ShortHelper.decode = function (s) {
                return ShortHelper.valueOf((internal.NumberHelper.__decodeAndValidateInt(s, ShortHelper.MIN_VALUE_$LI$(), ShortHelper.MAX_VALUE_$LI$()) | 0));
            };
            /**
             * @skip Here for shared implementation with Arrays.hashCode
             */
            ShortHelper.hashCode = function (s) {
                return s;
            };
            ShortHelper.parseShort = function (s, radix) {
                if (radix === void 0) { radix = 10; }
                return (internal.NumberHelper.__parseAndValidateInt(s, radix, ShortHelper.MIN_VALUE_$LI$(), ShortHelper.MAX_VALUE_$LI$()) | 0);
            };
            ShortHelper.reverseBytes = function (s) {
                return ((((s & 255) << 8) | ((s & 65280) >> 8)) | 0);
            };
            ShortHelper.toString = function (b) {
                return new String(b).toString();
            };
            ShortHelper.valueOf$short = function (s) {
                if (s > -129 && s < 128) {
                    var rebase = s + 128;
                    var result = ShortHelper.BoxedValues.boxedValues_$LI$()[rebase];
                    if (result == null) {
                        result = ShortHelper.BoxedValues.boxedValues_$LI$()[rebase] = new ShortHelper(s);
                    }
                    return result;
                }
                return new ShortHelper(s);
            };
            ShortHelper.valueOf$java_lang_String = function (s) {
                return ShortHelper.valueOf(s, 10);
            };
            ShortHelper.valueOf = function (s, radix) {
                if (((typeof s === 'string') || s === null) && ((typeof radix === 'number') || radix === null)) {
                    return (function () {
                        return ShortHelper.valueOf(ShortHelper.parseShort(s, radix));
                    })();
                }
                else if (((typeof s === 'string') || s === null) && radix === undefined) {
                    return javaemul.internal.ShortHelper.valueOf$java_lang_String(s);
                }
                else if (((typeof s === 'number') || s === null) && radix === undefined) {
                    return javaemul.internal.ShortHelper.valueOf$short(s);
                }
                else
                    throw new Error('invalid overload');
            };
            ShortHelper.prototype.byteValue = function () {
                return (this.value | 0);
            };
            ShortHelper.prototype.compareTo = function (b) {
                var _this = this;
                if (((b != null && b instanceof javaemul.internal.ShortHelper) || b === null)) {
                    return (function () {
                        return ShortHelper.compare(_this.value, b.value);
                    })();
                }
                else
                    throw new Error('invalid overload');
            };
            ShortHelper.prototype.doubleValue = function () {
                return this.value;
            };
            ShortHelper.prototype.equals = function (o) {
                return (o != null && o instanceof javaemul.internal.ShortHelper) && (o.value === this.value);
            };
            ShortHelper.prototype.floatValue = function () {
                return this.value;
            };
            ShortHelper.prototype.hashCode = function () {
                return ShortHelper.hashCode(this.value);
            };
            ShortHelper.prototype.intValue = function () {
                return this.value;
            };
            ShortHelper.prototype.longValue = function () {
                return this.value;
            };
            ShortHelper.prototype.shortValue = function () {
                return this.value;
            };
            ShortHelper.prototype.toString = function () {
                return ShortHelper.toString(this.value);
            };
            ShortHelper.SIZE = 16;
            return ShortHelper;
        }(javaemul.internal.NumberHelper));
        internal.ShortHelper = ShortHelper;
        var ShortHelper;
        (function (ShortHelper) {
            /**
             * Use nested class to avoid clinit on outer.
             */
            var BoxedValues = (function () {
                function BoxedValues() {
                }
                BoxedValues.boxedValues_$LI$ = function () { if (BoxedValues.boxedValues == null)
                    BoxedValues.boxedValues = new Array(256); return BoxedValues.boxedValues; };
                ;
                return BoxedValues;
            }());
            ShortHelper.BoxedValues = BoxedValues;
        })(ShortHelper = internal.ShortHelper || (internal.ShortHelper = {}));
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var javaemul;
(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Wraps a primitive <code>float</code> as an object.
         */
        var FloatHelper = (function (_super) {
            __extends(FloatHelper, _super);
            function FloatHelper(s) {
                var _this = this;
                if (((typeof s === 'string') || s === null)) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable", "java.io.Serializable"] });
                    this.value = 0;
                    (function () {
                        _this.value = FloatHelper.parseFloat(s);
                    })();
                }
                else if (((typeof s === 'number') || s === null)) {
                    var value = s;
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable", "java.io.Serializable"] });
                    this.value = 0;
                    (function () {
                        _this.value = value;
                    })();
                }
                else if (((typeof s === 'number') || s === null)) {
                    var value = s;
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable", "java.io.Serializable"] });
                    this.value = 0;
                    (function () {
                        _this.value = value;
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            FloatHelper.NaN_$LI$ = function () { if (FloatHelper.NaN == null)
                FloatHelper.NaN = 0.0 / 0.0; return FloatHelper.NaN; };
            ;
            FloatHelper.NEGATIVE_INFINITY_$LI$ = function () { if (FloatHelper.NEGATIVE_INFINITY == null)
                FloatHelper.NEGATIVE_INFINITY = -1.0 / 0.0; return FloatHelper.NEGATIVE_INFINITY; };
            ;
            FloatHelper.POSITIVE_INFINITY_$LI$ = function () { if (FloatHelper.POSITIVE_INFINITY == null)
                FloatHelper.POSITIVE_INFINITY = 1.0 / 0.0; return FloatHelper.POSITIVE_INFINITY; };
            ;
            FloatHelper.compare = function (x, y) {
                return javaemul.internal.DoubleHelper.compare(x, y);
            };
            FloatHelper.floatToIntBits = function (value) {
                if (FloatHelper.isNaN(value)) {
                    return 2143289344;
                }
                if (value === 0.0) {
                    if (1.0 / value === FloatHelper.NEGATIVE_INFINITY_$LI$()) {
                        return -2147483648;
                    }
                    else {
                        return 0;
                    }
                }
                var negative = false;
                if (value < 0.0) {
                    negative = true;
                    value = -value;
                }
                if (FloatHelper.isInfinite(value)) {
                    if (negative) {
                        return -8388608;
                    }
                    else {
                        return 2139095040;
                    }
                }
                var l = javaemul.internal.DoubleHelper.doubleToLongBits(value);
                var exp = ((((l >> 52) & 2047) - 1023) | 0);
                var mantissa = (((l & 4503599627370495) >> 29) | 0);
                if (exp <= -127) {
                    mantissa = (8388608 | mantissa) >> (-127 - exp + 1);
                    exp = -127;
                }
                var bits = negative ? FloatHelper.POWER_31_INT : 0;
                bits |= (exp + 127) << 23;
                bits |= mantissa;
                return (bits | 0);
            };
            /**
             * @skip Here for shared implementation with Arrays.hashCode.
             * @param f
             * @return hash value of float (currently just truncated to int)
             */
            FloatHelper.hashCode = function (f) {
                return (f | 0);
            };
            FloatHelper.intBitsToFloat = function (bits) {
                var negative = (bits & -2147483648) !== 0;
                var exp = (bits >> 23) & 255;
                bits &= 8388607;
                if (exp === 0) {
                    if (bits === 0) {
                        return negative ? -0.0 : 0.0;
                    }
                }
                else if (exp === 255) {
                    if (bits === 0) {
                        return negative ? FloatHelper.NEGATIVE_INFINITY_$LI$() : FloatHelper.POSITIVE_INFINITY_$LI$();
                    }
                    else {
                        return FloatHelper.NaN_$LI$();
                    }
                }
                if (exp === 0) {
                    exp = 1;
                    while (((bits & 8388608) === 0)) {
                        bits <<= 1;
                        exp--;
                    }
                    ;
                    bits &= 8388607;
                }
                var bits64 = negative ? -9223372036854775808 : 0;
                bits64 |= (Math.round((exp + 896))) << 52;
                bits64 |= (Math.round(bits)) << 29;
                return javaemul.internal.DoubleHelper.longBitsToDouble(bits64);
            };
            FloatHelper.isInfinite = function (x) {
                return javaemul.internal.DoubleHelper.isInfinite(x);
            };
            FloatHelper.isNaN = function (x) {
                return javaemul.internal.DoubleHelper.isNaN(x);
            };
            FloatHelper.parseFloat = function (s) {
                var doubleValue = internal.NumberHelper.__parseAndValidateDouble(s);
                if (doubleValue > FloatHelper.MAX_VALUE) {
                    return FloatHelper.POSITIVE_INFINITY_$LI$();
                }
                else if (doubleValue < -FloatHelper.MAX_VALUE) {
                    return FloatHelper.NEGATIVE_INFINITY_$LI$();
                }
                return doubleValue;
            };
            FloatHelper.toString = function (b) {
                return new String(b).toString();
            };
            FloatHelper.valueOf$float = function (f) {
                return new FloatHelper(f);
            };
            FloatHelper.valueOf = function (s) {
                if (((typeof s === 'string') || s === null)) {
                    return (function () {
                        return new FloatHelper(s);
                    })();
                }
                else if (((typeof s === 'number') || s === null)) {
                    return javaemul.internal.FloatHelper.valueOf$float(s);
                }
                else
                    throw new Error('invalid overload');
            };
            FloatHelper.prototype.byteValue = function () {
                return (this.value | 0);
            };
            FloatHelper.prototype.compareTo = function (b) {
                var _this = this;
                if (((b != null && b instanceof javaemul.internal.FloatHelper) || b === null)) {
                    return (function () {
                        return FloatHelper.compare(_this.value, b.value);
                    })();
                }
                else
                    throw new Error('invalid overload');
            };
            FloatHelper.prototype.doubleValue = function () {
                return this.value;
            };
            FloatHelper.prototype.equals = function (o) {
                return (o != null && o instanceof javaemul.internal.FloatHelper) && (o.value === this.value);
            };
            FloatHelper.prototype.floatValue = function () {
                return this.value;
            };
            /**
             * Performance caution: using Float objects as map keys is not recommended.
             * Using floating point values as keys is generally a bad idea due to
             * difficulty determining exact equality. In addition, there is no efficient
             * JavaScript equivalent of <code>floatToIntBits</code>. As a result, this
             * method computes a hash code by truncating the whole number portion of the
             * float, which may lead to poor performance for certain value sets if
             * Floats are used as keys in a {@link java.util.HashMap}.
             */
            FloatHelper.prototype.hashCode = function () {
                return FloatHelper.hashCode(this.value);
            };
            FloatHelper.prototype.intValue = function () {
                return (this.value | 0);
            };
            FloatHelper.prototype.isInfinite = function () {
                return FloatHelper.isInfinite(this.value);
            };
            FloatHelper.prototype.isNaN = function () {
                return FloatHelper.isNaN(this.value);
            };
            FloatHelper.prototype.longValue = function () {
                return Math.round(this.value);
            };
            FloatHelper.prototype.shortValue = function () {
                return (this.value | 0);
            };
            FloatHelper.prototype.toString = function () {
                return FloatHelper.toString(this.value);
            };
            FloatHelper.MAX_VALUE = 3.4028235E38;
            FloatHelper.MIN_VALUE = 1.4E-45;
            FloatHelper.MAX_EXPONENT = 127;
            FloatHelper.MIN_EXPONENT = -126;
            FloatHelper.MIN_NORMAL = 1.17549435E-38;
            FloatHelper.SIZE = 32;
            FloatHelper.POWER_31_INT = 2147483648;
            return FloatHelper;
        }(javaemul.internal.NumberHelper));
        internal.FloatHelper = FloatHelper;
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var javaemul;
(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Wraps a primitive <code>int</code> as an object.
         */
        var IntegerHelper = (function (_super) {
            __extends(IntegerHelper, _super);
            function IntegerHelper(s) {
                var _this = this;
                if (((typeof s === 'string') || s === null)) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable", "java.io.Serializable"] });
                    this.value = 0;
                    (function () {
                        _this.value = IntegerHelper.parseInt(s);
                    })();
                }
                else if (((typeof s === 'number') || s === null)) {
                    var value = s;
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable", "java.io.Serializable"] });
                    this.value = 0;
                    (function () {
                        _this.value = value;
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            IntegerHelper.bitCount = function (x) {
                x -= ((x >> 1) & 1431655765);
                x = (((x >> 2) & 858993459) + (x & 858993459));
                x = (((x >> 4) + x) & 252645135);
                x += (x >> 8);
                x += (x >> 16);
                return x & 63;
            };
            IntegerHelper.compare = function (x, y) {
                if (x < y) {
                    return -1;
                }
                else if (x > y) {
                    return 1;
                }
                else {
                    return 0;
                }
            };
            IntegerHelper.decode = function (s) {
                return IntegerHelper.valueOf(internal.NumberHelper.__decodeAndValidateInt(s, IntegerHelper.MIN_VALUE, IntegerHelper.MAX_VALUE));
            };
            /**
             * @skip
             *
             * Here for shared implementation with Arrays.hashCode
             */
            IntegerHelper.hashCode = function (i) {
                return i;
            };
            IntegerHelper.highestOneBit = function (i) {
                if (i < 0) {
                    return IntegerHelper.MIN_VALUE;
                }
                else if (i === 0) {
                    return 0;
                }
                else {
                    var rtn;
                    for (rtn = 1073741824; (rtn & i) === 0; rtn >>= 1) {
                    }
                    return rtn;
                }
            };
            IntegerHelper.lowestOneBit = function (i) {
                return i & -i;
            };
            IntegerHelper.numberOfLeadingZeros = function (i) {
                if (i < 0) {
                    return 0;
                }
                else if (i === 0) {
                    return IntegerHelper.SIZE;
                }
                else {
                    var y;
                    var m;
                    var n;
                    y = -(i >> 16);
                    m = (y >> 16) & 16;
                    n = 16 - m;
                    i = i >> m;
                    y = i - 256;
                    m = (y >> 16) & 8;
                    n += m;
                    i <<= m;
                    y = i - 4096;
                    m = (y >> 16) & 4;
                    n += m;
                    i <<= m;
                    y = i - 16384;
                    m = (y >> 16) & 2;
                    n += m;
                    i <<= m;
                    y = i >> 14;
                    m = y & ~(y >> 1);
                    return n + 2 - m;
                }
            };
            IntegerHelper.numberOfTrailingZeros = function (i) {
                if (i === 0) {
                    return IntegerHelper.SIZE;
                }
                else {
                    var rtn = 0;
                    for (var r = 1; (r & i) === 0; r <<= 1) {
                        rtn++;
                    }
                    return rtn;
                }
            };
            IntegerHelper.parseInt = function (s, radix) {
                if (radix === void 0) { radix = 10; }
                return internal.NumberHelper.__parseAndValidateInt(s, radix, IntegerHelper.MIN_VALUE, IntegerHelper.MAX_VALUE);
            };
            IntegerHelper.reverse = function (i) {
                var nibbles = IntegerHelper.ReverseNibbles.reverseNibbles_$LI$();
                return (nibbles[i >>> 28]) | (nibbles[(i >> 24) & 15] << 4) | (nibbles[(i >> 20) & 15] << 8) | (nibbles[(i >> 16) & 15] << 12) | (nibbles[(i >> 12) & 15] << 16) | (nibbles[(i >> 8) & 15] << 20) | (nibbles[(i >> 4) & 15] << 24) | (nibbles[i & 15] << 28);
            };
            IntegerHelper.reverseBytes = function (i) {
                return ((i & 255) << 24) | ((i & 65280) << 8) | ((i & 16711680) >> 8) | ((i & -16777216) >>> 24);
            };
            IntegerHelper.rotateLeft = function (i, distance) {
                while ((distance-- > 0)) {
                    i = i << 1 | ((i < 0) ? 1 : 0);
                }
                ;
                return i;
            };
            IntegerHelper.rotateRight = function (i, distance) {
                var ui = i & IntegerHelper.MAX_VALUE;
                var carry = (i < 0) ? 1073741824 : 0;
                while ((distance-- > 0)) {
                    var nextcarry = ui & 1;
                    ui = carry | (ui >> 1);
                    carry = (nextcarry === 0) ? 0 : 1073741824;
                }
                ;
                if (carry !== 0) {
                    ui = ui | IntegerHelper.MIN_VALUE;
                }
                return ui;
            };
            IntegerHelper.signum = function (i) {
                if (i === 0) {
                    return 0;
                }
                else if (i < 0) {
                    return -1;
                }
                else {
                    return 1;
                }
            };
            IntegerHelper.toBinaryString = function (value) {
                return IntegerHelper.toUnsignedRadixString(value, 2);
            };
            IntegerHelper.toHexString = function (value) {
                return IntegerHelper.toUnsignedRadixString(value, 16);
            };
            IntegerHelper.toOctalString = function (value) {
                return IntegerHelper.toUnsignedRadixString(value, 8);
            };
            IntegerHelper.toString$int = function (value) {
                return new String(value).toString();
            };
            IntegerHelper.toString = function (value, radix) {
                if (((typeof value === 'number') || value === null) && ((typeof radix === 'number') || radix === null)) {
                    return (function () {
                        if (radix === 10 || radix < javaemul.internal.CharacterHelper.MIN_RADIX || radix > javaemul.internal.CharacterHelper.MAX_RADIX) {
                            return new String(value).toString();
                        }
                        return IntegerHelper.toRadixString(value, radix);
                    })();
                }
                else if (((typeof value === 'number') || value === null) && radix === undefined) {
                    return javaemul.internal.IntegerHelper.toString$int(value);
                }
                else
                    throw new Error('invalid overload');
            };
            IntegerHelper.valueOf$int = function (i) {
                if (i > -129 && i < 128) {
                    var rebase = i + 128;
                    var result = IntegerHelper.BoxedValues.boxedValues_$LI$()[rebase];
                    if (result == null) {
                        result = IntegerHelper.BoxedValues.boxedValues_$LI$()[rebase] = new IntegerHelper(i);
                    }
                    return result;
                }
                return new IntegerHelper(i);
            };
            IntegerHelper.valueOf$java_lang_String = function (s) {
                return IntegerHelper.valueOf(s, 10);
            };
            IntegerHelper.valueOf = function (s, radix) {
                if (((typeof s === 'string') || s === null) && ((typeof radix === 'number') || radix === null)) {
                    return (function () {
                        return IntegerHelper.valueOf(IntegerHelper.parseInt(s, radix));
                    })();
                }
                else if (((typeof s === 'string') || s === null) && radix === undefined) {
                    return javaemul.internal.IntegerHelper.valueOf$java_lang_String(s);
                }
                else if (((typeof s === 'number') || s === null) && radix === undefined) {
                    return javaemul.internal.IntegerHelper.valueOf$int(s);
                }
                else
                    throw new Error('invalid overload');
            };
            IntegerHelper.toRadixString = function (value, radix) {
                return value.toString(radix);
            };
            IntegerHelper.toUnsignedRadixString = function (value, radix) {
                // ">>> 0" converts the value to unsigned number.
                return (value >>> 0).toString(radix);
            };
            IntegerHelper.prototype.byteValue = function () {
                return (this.value | 0);
            };
            IntegerHelper.prototype.compareTo = function (b) {
                var _this = this;
                if (((b != null && b instanceof javaemul.internal.IntegerHelper) || b === null)) {
                    return (function () {
                        return IntegerHelper.compare(_this.value, b.value);
                    })();
                }
                else
                    throw new Error('invalid overload');
            };
            IntegerHelper.prototype.doubleValue = function () {
                return this.value;
            };
            IntegerHelper.prototype.equals = function (o) {
                return (o != null && o instanceof javaemul.internal.IntegerHelper) && (o.value === this.value);
            };
            IntegerHelper.prototype.floatValue = function () {
                return this.value;
            };
            IntegerHelper.prototype.hashCode = function () {
                return IntegerHelper.hashCode(this.value);
            };
            IntegerHelper.prototype.intValue = function () {
                return this.value;
            };
            IntegerHelper.prototype.longValue = function () {
                return this.value;
            };
            IntegerHelper.prototype.shortValue = function () {
                return (this.value | 0);
            };
            IntegerHelper.prototype.toString = function () {
                return IntegerHelper.toString(this.value);
            };
            IntegerHelper.MAX_VALUE = 2147483647;
            IntegerHelper.MIN_VALUE = -2147483648;
            IntegerHelper.SIZE = 32;
            return IntegerHelper;
        }(javaemul.internal.NumberHelper));
        internal.IntegerHelper = IntegerHelper;
        var IntegerHelper;
        (function (IntegerHelper) {
            /**
             * Use nested class to avoid clinit on outer.
             */
            var BoxedValues = (function () {
                function BoxedValues() {
                }
                BoxedValues.boxedValues_$LI$ = function () { if (BoxedValues.boxedValues == null)
                    BoxedValues.boxedValues = new Array(256); return BoxedValues.boxedValues; };
                ;
                return BoxedValues;
            }());
            IntegerHelper.BoxedValues = BoxedValues;
            /**
             * Use nested class to avoid clinit on outer.
             */
            var ReverseNibbles = (function () {
                function ReverseNibbles() {
                }
                ReverseNibbles.reverseNibbles_$LI$ = function () { if (ReverseNibbles.reverseNibbles == null)
                    ReverseNibbles.reverseNibbles = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]; return ReverseNibbles.reverseNibbles; };
                ;
                return ReverseNibbles;
            }());
            IntegerHelper.ReverseNibbles = ReverseNibbles;
        })(IntegerHelper = internal.IntegerHelper || (internal.IntegerHelper = {}));
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var javaemul;
(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Wraps a primitive <code>long</code> as an object.
         */
        var LongHelper = (function (_super) {
            __extends(LongHelper, _super);
            function LongHelper(s) {
                var _this = this;
                if (((typeof s === 'string') || s === null)) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable", "java.io.Serializable"] });
                    this.value = 0;
                    (function () {
                        _this.value = LongHelper.parseLong(s);
                    })();
                }
                else if (((typeof s === 'number') || s === null)) {
                    var value = s;
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable", "java.io.Serializable"] });
                    this.value = 0;
                    (function () {
                        _this.value = value;
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            LongHelper.bitCount = function (i) {
                var high = ((i >> 32) | 0);
                var low = (i | 0);
                return javaemul.internal.IntegerHelper.bitCount(high) + javaemul.internal.IntegerHelper.bitCount(low);
            };
            LongHelper.compare = function (x, y) {
                if (x < y) {
                    return -1;
                }
                else if (x > y) {
                    return 1;
                }
                else {
                    return 0;
                }
            };
            LongHelper.decode = function (s) {
                var decode = internal.NumberHelper.__decodeNumberString(s);
                return LongHelper.valueOf(decode.payload, decode.radix);
            };
            /**
             * @skip Here for shared implementation with Arrays.hashCode
             */
            LongHelper.hashCode = function (l) {
                return (l | 0);
            };
            LongHelper.highestOneBit = function (i) {
                var high = ((i >> 32) | 0);
                if (high !== 0) {
                    return (Math.round(javaemul.internal.IntegerHelper.highestOneBit(high))) << 32;
                }
                else {
                    return javaemul.internal.IntegerHelper.highestOneBit((i | 0)) & 4294967295;
                }
            };
            LongHelper.lowestOneBit = function (i) {
                return i & -i;
            };
            LongHelper.numberOfLeadingZeros = function (i) {
                var high = ((i >> 32) | 0);
                if (high !== 0) {
                    return javaemul.internal.IntegerHelper.numberOfLeadingZeros(high);
                }
                else {
                    return javaemul.internal.IntegerHelper.numberOfLeadingZeros((i | 0)) + 32;
                }
            };
            LongHelper.numberOfTrailingZeros = function (i) {
                var low = (i | 0);
                if (low !== 0) {
                    return javaemul.internal.IntegerHelper.numberOfTrailingZeros(low);
                }
                else {
                    return javaemul.internal.IntegerHelper.numberOfTrailingZeros(((i >> 32) | 0)) + 32;
                }
            };
            LongHelper.parseLong = function (s, radix) {
                if (radix === void 0) { radix = 10; }
                return internal.NumberHelper.__parseAndValidateLong(s, radix);
            };
            LongHelper.reverse = function (i) {
                var high = ((i >>> 32) | 0);
                var low = (i | 0);
                return (Math.round(javaemul.internal.IntegerHelper.reverse(low)) << 32) | (javaemul.internal.IntegerHelper.reverse(high) & 4294967295);
            };
            LongHelper.reverseBytes = function (i) {
                var high = ((i >>> 32) | 0);
                var low = (i | 0);
                return (Math.round(javaemul.internal.IntegerHelper.reverseBytes(low)) << 32) | (javaemul.internal.IntegerHelper.reverseBytes(high) & 4294967295);
            };
            LongHelper.rotateLeft = function (i, distance) {
                while ((distance-- > 0)) {
                    i = i << 1 | ((i < 0) ? 1 : 0);
                }
                ;
                return i;
            };
            LongHelper.rotateRight = function (i, distance) {
                var ui = i & LongHelper.MAX_VALUE;
                var carry = (i < 0) ? 4611686018427387904 : 0;
                while ((distance-- > 0)) {
                    var nextcarry = ui & 1;
                    ui = carry | (ui >> 1);
                    carry = (nextcarry === 0) ? 0 : 4611686018427387904;
                }
                ;
                if (carry !== 0) {
                    ui = ui | LongHelper.MIN_VALUE;
                }
                return ui;
            };
            LongHelper.signum = function (i) {
                if (i === 0) {
                    return 0;
                }
                else if (i < 0) {
                    return -1;
                }
                else {
                    return 1;
                }
            };
            LongHelper.toBinaryString = function (value) {
                return LongHelper.toPowerOfTwoUnsignedString(value, 1);
            };
            LongHelper.toHexString = function (value) {
                return LongHelper.toPowerOfTwoUnsignedString(value, 4);
            };
            LongHelper.toOctalString = function (value) {
                return LongHelper.toPowerOfTwoUnsignedString(value, 3);
            };
            LongHelper.toString$long = function (value) {
                return new String(value).toString();
            };
            LongHelper.toString = function (value, intRadix) {
                if (((typeof value === 'number') || value === null) && ((typeof intRadix === 'number') || intRadix === null)) {
                    return (function () {
                        if (intRadix === 10 || intRadix < javaemul.internal.CharacterHelper.MIN_RADIX || intRadix > javaemul.internal.CharacterHelper.MAX_RADIX) {
                            return new String(value).toString();
                        }
                        var intValue = (value | 0);
                        if (intValue === value) {
                            return javaemul.internal.IntegerHelper.toString(intValue, intRadix);
                        }
                        var negative = value < 0;
                        if (!negative) {
                            value = -value;
                        }
                        var bufLen = intRadix < 8 ? 65 : 23;
                        var buf = new Array(bufLen);
                        var cursor = bufLen;
                        var radix = intRadix;
                        do {
                            var q = Math.round(value / radix);
                            buf[--cursor] = javaemul.internal.CharacterHelper.forDigit(((radix * q - value) | 0));
                            value = q;
                        } while ((value !== 0));
                        if (negative) {
                            buf[--cursor] = '-';
                        }
                        return (function (str, index, len) { return str.join('').substring(index, index + len); })(buf, cursor, bufLen - cursor);
                    })();
                }
                else if (((typeof value === 'number') || value === null) && intRadix === undefined) {
                    return javaemul.internal.LongHelper.toString$long(value);
                }
                else
                    throw new Error('invalid overload');
            };
            LongHelper.valueOf$long = function (i) {
                if (i > -129 && i < 128) {
                    var rebase = (i | 0) + 128;
                    var result = LongHelper.BoxedValues.boxedValues_$LI$()[rebase];
                    if (result == null) {
                        result = LongHelper.BoxedValues.boxedValues_$LI$()[rebase] = new LongHelper(i);
                    }
                    return result;
                }
                return new LongHelper(i);
            };
            LongHelper.valueOf$java_lang_String = function (s) {
                return LongHelper.valueOf(s, 10);
            };
            LongHelper.valueOf = function (s, radix) {
                if (((typeof s === 'string') || s === null) && ((typeof radix === 'number') || radix === null)) {
                    return (function () {
                        return LongHelper.valueOf(LongHelper.parseLong(s, radix));
                    })();
                }
                else if (((typeof s === 'string') || s === null) && radix === undefined) {
                    return javaemul.internal.LongHelper.valueOf$java_lang_String(s);
                }
                else if (((typeof s === 'number') || s === null) && radix === undefined) {
                    return javaemul.internal.LongHelper.valueOf$long(s);
                }
                else
                    throw new Error('invalid overload');
            };
            LongHelper.toPowerOfTwoUnsignedString = function (value, shift) {
                var radix = 1 << shift;
                if (javaemul.internal.IntegerHelper.MIN_VALUE <= value && value <= javaemul.internal.IntegerHelper.MAX_VALUE) {
                    return javaemul.internal.IntegerHelper.toString((value | 0), radix);
                }
                var mask = radix - 1;
                var bufSize = (64 / shift | 0) + 1;
                var buf = new Array(bufSize);
                var pos = bufSize;
                do {
                    buf[--pos] = javaemul.internal.CharacterHelper.forDigit(((value | 0)) & mask);
                    value >>>= shift;
                } while ((value !== 0));
                return (function (str, index, len) { return str.join('').substring(index, index + len); })(buf, pos, bufSize - pos);
            };
            LongHelper.prototype.byteValue = function () {
                return (this.value | 0);
            };
            LongHelper.prototype.compareTo = function (b) {
                var _this = this;
                if (((b != null && b instanceof javaemul.internal.LongHelper) || b === null)) {
                    return (function () {
                        return LongHelper.compare(_this.value, b.value);
                    })();
                }
                else
                    throw new Error('invalid overload');
            };
            LongHelper.prototype.doubleValue = function () {
                return this.value;
            };
            LongHelper.prototype.equals = function (o) {
                return (o != null && o instanceof javaemul.internal.LongHelper) && (o.value === this.value);
            };
            LongHelper.prototype.floatValue = function () {
                return this.value;
            };
            LongHelper.prototype.hashCode = function () {
                return LongHelper.hashCode(this.value);
            };
            LongHelper.prototype.intValue = function () {
                return (this.value | 0);
            };
            LongHelper.prototype.longValue = function () {
                return this.value;
            };
            LongHelper.prototype.shortValue = function () {
                return (this.value | 0);
            };
            LongHelper.prototype.toString = function () {
                return LongHelper.toString(this.value);
            };
            LongHelper.MAX_VALUE = 9223372036854775807;
            LongHelper.MIN_VALUE = -9223372036854775808;
            LongHelper.SIZE = 64;
            return LongHelper;
        }(javaemul.internal.NumberHelper));
        internal.LongHelper = LongHelper;
        var LongHelper;
        (function (LongHelper) {
            /**
             * Use nested class to avoid clinit on outer.
             */
            var BoxedValues = (function () {
                function BoxedValues() {
                }
                BoxedValues.boxedValues_$LI$ = function () { if (BoxedValues.boxedValues == null)
                    BoxedValues.boxedValues = new Array(256); return BoxedValues.boxedValues; };
                ;
                return BoxedValues;
            }());
            LongHelper.BoxedValues = BoxedValues;
        })(LongHelper = internal.LongHelper || (internal.LongHelper = {}));
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var javaemul;
(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Wraps native <code>byte</code> as an object.
         */
        var ByteHelper = (function (_super) {
            __extends(ByteHelper, _super);
            function ByteHelper(s) {
                var _this = this;
                if (((typeof s === 'string') || s === null)) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable", "java.io.Serializable"] });
                    this.value = 0;
                    (function () {
                        _this.value = ByteHelper.parseByte(s);
                    })();
                }
                else if (((typeof s === 'number') || s === null)) {
                    var value = s;
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable", "java.io.Serializable"] });
                    this.value = 0;
                    (function () {
                        _this.value = value;
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            ByteHelper.MIN_VALUE_$LI$ = function () { if (ByteHelper.MIN_VALUE == null)
                ByteHelper.MIN_VALUE = (128 | 0); return ByteHelper.MIN_VALUE; };
            ;
            ByteHelper.MAX_VALUE_$LI$ = function () { if (ByteHelper.MAX_VALUE == null)
                ByteHelper.MAX_VALUE = (127 | 0); return ByteHelper.MAX_VALUE; };
            ;
            ByteHelper.TYPE_$LI$ = function () { if (ByteHelper.TYPE == null)
                ByteHelper.TYPE = Number; return ByteHelper.TYPE; };
            ;
            ByteHelper.compare = function (x, y) {
                return x - y;
            };
            ByteHelper.decode = function (s) {
                return ByteHelper.valueOf((internal.NumberHelper.__decodeAndValidateInt(s, ByteHelper.MIN_VALUE_$LI$(), ByteHelper.MAX_VALUE_$LI$()) | 0));
            };
            /**
             * @skip
             *
             * Here for shared implementation with Arrays.hashCode
             */
            ByteHelper.hashCode = function (b) {
                return b;
            };
            ByteHelper.parseByte = function (s, radix) {
                if (radix === void 0) { radix = 10; }
                return (internal.NumberHelper.__parseAndValidateInt(s, radix, ByteHelper.MIN_VALUE_$LI$(), ByteHelper.MAX_VALUE_$LI$()) | 0);
            };
            ByteHelper.toString = function (b) {
                return new String(b).toString();
            };
            ByteHelper.valueOf$byte = function (b) {
                var rebase = b + 128;
                var result = ByteHelper.BoxedValues.boxedValues_$LI$()[rebase];
                if (result == null) {
                    result = ByteHelper.BoxedValues.boxedValues_$LI$()[rebase] = new ByteHelper(b);
                }
                return result;
            };
            ByteHelper.valueOf$java_lang_String = function (s) {
                return ByteHelper.valueOf(s, 10);
            };
            ByteHelper.valueOf = function (s, radix) {
                if (((typeof s === 'string') || s === null) && ((typeof radix === 'number') || radix === null)) {
                    return (function () {
                        return ByteHelper.valueOf(ByteHelper.parseByte(s, radix));
                    })();
                }
                else if (((typeof s === 'string') || s === null) && radix === undefined) {
                    return javaemul.internal.ByteHelper.valueOf$java_lang_String(s);
                }
                else if (((typeof s === 'number') || s === null) && radix === undefined) {
                    return javaemul.internal.ByteHelper.valueOf$byte(s);
                }
                else
                    throw new Error('invalid overload');
            };
            ByteHelper.prototype.byteValue = function () {
                return this.value;
            };
            ByteHelper.prototype.compareTo = function (b) {
                var _this = this;
                if (((b != null && b instanceof javaemul.internal.ByteHelper) || b === null)) {
                    return (function () {
                        return ByteHelper.compare(_this.value, b.value);
                    })();
                }
                else
                    throw new Error('invalid overload');
            };
            ByteHelper.prototype.doubleValue = function () {
                return this.value;
            };
            ByteHelper.prototype.equals = function (o) {
                return (o != null && o instanceof javaemul.internal.ByteHelper) && (o.value === this.value);
            };
            ByteHelper.prototype.floatValue = function () {
                return this.value;
            };
            ByteHelper.prototype.hashCode = function () {
                return ByteHelper.hashCode(this.value);
            };
            ByteHelper.prototype.intValue = function () {
                return this.value;
            };
            ByteHelper.prototype.longValue = function () {
                return this.value;
            };
            ByteHelper.prototype.shortValue = function () {
                return this.value;
            };
            ByteHelper.prototype.toString = function () {
                return ByteHelper.toString(this.value);
            };
            ByteHelper.SIZE = 8;
            return ByteHelper;
        }(javaemul.internal.NumberHelper));
        internal.ByteHelper = ByteHelper;
        var ByteHelper;
        (function (ByteHelper) {
            /**
             * Use nested class to avoid clinit on outer.
             */
            var BoxedValues = (function () {
                function BoxedValues() {
                }
                BoxedValues.boxedValues_$LI$ = function () { if (BoxedValues.boxedValues == null)
                    BoxedValues.boxedValues = new Array(256); return BoxedValues.boxedValues; };
                ;
                return BoxedValues;
            }());
            ByteHelper.BoxedValues = BoxedValues;
        })(ByteHelper = internal.ByteHelper || (internal.ByteHelper = {}));
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Thrown when the subject of an observer cannot support additional observers.
         *
         */
        var TooManyListenersException = (function (_super) {
            __extends(TooManyListenersException, _super);
            function TooManyListenersException(message) {
                if (((typeof message === 'string') || message === null)) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (message === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return TooManyListenersException;
        }(Error));
        util.TooManyListenersException = TooManyListenersException;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * See <a href="https://docs.oracle.com/javase/8/docs/api/java/util/StringJoiner.html">
         * the official Java API doc</a> for details.
         */
        var StringJoiner = (function () {
            function StringJoiner(delimiter, prefix, suffix) {
                if (prefix === void 0) { prefix = ""; }
                if (suffix === void 0) { suffix = ""; }
                javaemul.internal.InternalPreconditions.checkNotNull(delimiter, "delimiter");
                javaemul.internal.InternalPreconditions.checkNotNull(prefix, "prefix");
                javaemul.internal.InternalPreconditions.checkNotNull(suffix, "suffix");
                this.delimiter = delimiter.toString();
                this.prefix = prefix.toString();
                this.suffix = suffix.toString();
                this.emptyValue = this.prefix + this.suffix;
            }
            StringJoiner.prototype.add = function (newElement) {
                this.initBuilderOrAddDelimiter();
                this.builder.append(newElement);
                return this;
            };
            StringJoiner.prototype.length = function () {
                if (this.builder == null) {
                    return this.emptyValue.length;
                }
                return this.builder.length() + this.suffix.length;
            };
            StringJoiner.prototype.merge = function (other) {
                if (other.builder != null) {
                    var otherLength = other.builder.length();
                    this.initBuilderOrAddDelimiter();
                    this.builder.append(other.builder, other.prefix.length, otherLength);
                }
                return this;
            };
            StringJoiner.prototype.setEmptyValue = function (emptyValue) {
                javaemul.internal.InternalPreconditions.checkNotNull(emptyValue);
                this.emptyValue = emptyValue.toString();
                return this;
            };
            StringJoiner.prototype.toString = function () {
                if (this.builder == null) {
                    return this.emptyValue;
                }
                else if ((this.suffix.length === 0)) {
                    return this.builder.toString();
                }
                else {
                    return this.builder.toString() + this.suffix;
                }
            };
            StringJoiner.prototype.initBuilderOrAddDelimiter = function () {
                if (this.builder == null) {
                    this.builder = new java.lang.StringBuilder(this.prefix);
                }
                else {
                    this.builder.append(this.delimiter);
                }
            };
            return StringJoiner;
        }());
        util.StringJoiner = StringJoiner;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * General-purpose low-level utility methods. GWT only supports a limited subset
         * of these methods due to browser limitations. Only the documented methods are
         * available.
         */
        var System = (function () {
            function System() {
            }
            System.err_$LI$ = function () { if (System.err == null)
                System.err = new java.io.PrintStream(null); return System.err; };
            ;
            System.out_$LI$ = function () { if (System.out == null)
                System.out = new java.io.PrintStream(null); return System.out; };
            ;
            System.arraycopy = function (src, srcOfs, dest, destOfs, len) {
                javaemul.internal.InternalPreconditions.checkNotNull(src, "src");
                javaemul.internal.InternalPreconditions.checkNotNull(dest, "dest");
                var srcType = src.getClass();
                var destType = dest.getClass();
                javaemul.internal.InternalPreconditions.checkArrayType(srcType.isArray(), "srcType is not an array");
                javaemul.internal.InternalPreconditions.checkArrayType(destType.isArray(), "destType is not an array");
                var srcComp = srcType.getComponentType();
                var destComp = destType.getComponentType();
                javaemul.internal.InternalPreconditions.checkArrayType(System.arrayTypeMatch(srcComp, destComp), "Array types don\'t match");
                var srclen = javaemul.internal.ArrayHelper.getLength(src);
                var destlen = javaemul.internal.ArrayHelper.getLength(dest);
                if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
                    throw new java.lang.IndexOutOfBoundsException();
                }
                if ((!srcComp.isPrimitive() || srcComp.isArray()) && !srcType.equals(destType)) {
                    var srcArray = src;
                    var destArray = dest;
                    if (src === dest && srcOfs < destOfs) {
                        srcOfs += len;
                        for (var destEnd = destOfs + len; destEnd-- > destOfs;) {
                            destArray[destEnd] = srcArray[--srcOfs];
                        }
                    }
                    else {
                        for (var destEnd = destOfs + len; destOfs < destEnd;) {
                            destArray[destOfs++] = srcArray[srcOfs++];
                        }
                    }
                }
                else if (len > 0) {
                    javaemul.internal.ArrayHelper.copy(src, srcOfs, dest, destOfs, len);
                }
            };
            System.currentTimeMillis = function () {
                return Math.round(javaemul.internal.DateUtil.now());
            };
            /**
             * Has no effect; just here for source compatibility.
             *
             * @skip
             */
            System.gc = function () {
            };
            /**
             * The compiler replaces getProperty by the actual value of the property.
             */
            System.getProperty$java_lang_String = function (key) {
                return null;
            };
            /**
             * The compiler replaces getProperty by the actual value of the property.
             */
            System.getProperty = function (key, def) {
                if (((typeof key === 'string') || key === null) && ((typeof def === 'string') || def === null)) {
                    return (function () {
                        return def;
                    })();
                }
                else if (((typeof key === 'string') || key === null) && def === undefined) {
                    return java.lang.System.getProperty$java_lang_String(key);
                }
                else
                    throw new Error('invalid overload');
            };
            System.identityHashCode = function (o) {
                return javaemul.internal.HashCodes.getIdentityHashCode(o);
            };
            System.setErr = function (err) {
                java.lang.System.err = err;
            };
            System.setOut = function (out) {
                java.lang.System.out = out;
            };
            System.arrayTypeMatch = function (srcComp, destComp) {
                if (srcComp.isPrimitive()) {
                    return srcComp.equals(destComp);
                }
                else {
                    return !destComp.isPrimitive();
                }
            };
            return System;
        }());
        lang.System = System;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        var logging;
        (function (logging) {
            /**
             * An emulation of the java.util.logging.Logger class. See
             * <a href="http://java.sun.com/j2se/1.4.2/docs/api/java/util/logging/Logger.html">
             * The Java API doc for details</a>
             */
            var Logger = (function () {
                function Logger(name, resourceName) {
                    this.level = null;
                    this.useParentHandlers = false;
                    if (Logger.LOGGING_FALSE_$LI$()) {
                        return;
                    }
                    this.name = name;
                    this.useParentHandlers = true;
                    this.handlers = new java.util.ArrayList();
                }
                Logger.__static_initialize = function () { if (!Logger.__static_initialized) {
                    Logger.__static_initialized = true;
                    Logger.__static_initializer_0();
                } };
                Logger.LOGGING_ENABLED_$LI$ = function () { Logger.__static_initialize(); if (Logger.LOGGING_ENABLED == null)
                    Logger.LOGGING_ENABLED = java.lang.System.getProperty("gwt.logging.enabled", "TRUE"); return Logger.LOGGING_ENABLED; };
                ;
                Logger.LOGGING_WARNING_$LI$ = function () { Logger.__static_initialize(); if (Logger.LOGGING_WARNING == null)
                    Logger.LOGGING_WARNING = (Logger.LOGGING_ENABLED_$LI$() === "WARNING"); return Logger.LOGGING_WARNING; };
                ;
                Logger.LOGGING_SEVERE_$LI$ = function () { Logger.__static_initialize(); if (Logger.LOGGING_SEVERE == null)
                    Logger.LOGGING_SEVERE = (Logger.LOGGING_ENABLED_$LI$() === "SEVERE"); return Logger.LOGGING_SEVERE; };
                ;
                Logger.LOGGING_FALSE_$LI$ = function () { Logger.__static_initialize(); if (Logger.LOGGING_FALSE == null)
                    Logger.LOGGING_FALSE = (Logger.LOGGING_ENABLED_$LI$() === "FALSE"); return Logger.LOGGING_FALSE; };
                ;
                Logger.__static_initializer_0 = function () {
                    Logger.assertLoggingValues();
                };
                Logger.getGlobal = function () {
                    return Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);
                };
                Logger.getLogger = function (name) {
                    if (Logger.LOGGING_FALSE_$LI$()) {
                        return new Logger(name, null);
                    }
                    return java.util.logging.LogManager.getLogManager().ensureLogger(name);
                };
                Logger.assertLoggingValues = function () {
                    if ((Logger.LOGGING_ENABLED_$LI$() === "FALSE") || (Logger.LOGGING_ENABLED_$LI$() === "TRUE") || (Logger.LOGGING_ENABLED_$LI$() === "SEVERE") || (Logger.LOGGING_ENABLED_$LI$() === "WARNING")) {
                        return;
                    }
                    throw new Error("Undefined value for gwt.logging.enabled: \'" + Logger.LOGGING_ENABLED_$LI$() + "\'. Allowed values are TRUE, FALSE, SEVERE, WARNING");
                };
                Logger.prototype.addHandler = function (handler) {
                    if (Logger.LOGGING_FALSE_$LI$()) {
                        return;
                    }
                    this.handlers.add(handler);
                };
                Logger.prototype.config = function (msg) {
                    if (Logger.LOGGING_FALSE_$LI$() || Logger.LOGGING_SEVERE_$LI$() || Logger.LOGGING_WARNING_$LI$()) {
                        return;
                    }
                    this.log(java.util.logging.Level.CONFIG_$LI$(), msg);
                };
                Logger.prototype.fine = function (msg) {
                    if (Logger.LOGGING_FALSE_$LI$() || Logger.LOGGING_SEVERE_$LI$() || Logger.LOGGING_WARNING_$LI$()) {
                        return;
                    }
                    this.log(java.util.logging.Level.FINE_$LI$(), msg);
                };
                Logger.prototype.finer = function (msg) {
                    if (Logger.LOGGING_FALSE_$LI$() || Logger.LOGGING_SEVERE_$LI$() || Logger.LOGGING_WARNING_$LI$()) {
                        return;
                    }
                    this.log(java.util.logging.Level.FINER_$LI$(), msg);
                };
                Logger.prototype.finest = function (msg) {
                    if (Logger.LOGGING_FALSE_$LI$() || Logger.LOGGING_SEVERE_$LI$() || Logger.LOGGING_WARNING_$LI$()) {
                        return;
                    }
                    this.log(java.util.logging.Level.FINEST_$LI$(), msg);
                };
                Logger.prototype.info = function (msg) {
                    if (Logger.LOGGING_FALSE_$LI$() || Logger.LOGGING_SEVERE_$LI$() || Logger.LOGGING_WARNING_$LI$()) {
                        return;
                    }
                    this.log(java.util.logging.Level.INFO_$LI$(), msg);
                };
                Logger.prototype.warning = function (msg) {
                    if (Logger.LOGGING_FALSE_$LI$() || Logger.LOGGING_SEVERE_$LI$()) {
                        return;
                    }
                    this.log(java.util.logging.Level.WARNING_$LI$(), msg);
                };
                Logger.prototype.severe = function (msg) {
                    if (Logger.LOGGING_FALSE_$LI$()) {
                        return;
                    }
                    this.log(java.util.logging.Level.SEVERE_$LI$(), msg);
                };
                Logger.prototype.getHandlers = function () {
                    if (Logger.LOGGING_FALSE_$LI$()) {
                        return new Array(0);
                    }
                    return this.handlers.toArray(new Array(this.handlers.size()));
                };
                Logger.prototype.getLevel = function () {
                    return Logger.LOGGING_FALSE_$LI$() ? null : this.level;
                };
                Logger.prototype.getName = function () {
                    return Logger.LOGGING_FALSE_$LI$() ? null : this.name;
                };
                Logger.prototype.getParent = function () {
                    return Logger.LOGGING_FALSE_$LI$() ? null : this.parent;
                };
                Logger.prototype.getUseParentHandlers = function () {
                    return Logger.LOGGING_FALSE_$LI$() ? false : this.useParentHandlers;
                };
                Logger.prototype.isLoggable = function (messageLevel) {
                    return Logger.LOGGING_FALSE_$LI$() ? false : this.getEffectiveLevel().intValue() <= messageLevel.intValue();
                };
                Logger.prototype.log$java_util_logging_Level$java_lang_String = function (level, msg) {
                    this.log(level, msg, null);
                };
                Logger.prototype.log = function (level, msg, thrown) {
                    var _this = this;
                    if (((level != null && level instanceof java.util.logging.Level) || level === null) && ((typeof msg === 'string') || msg === null) && ((thrown != null && thrown instanceof Error) || thrown === null)) {
                        return (function () {
                            if (Logger.LOGGING_FALSE_$LI$()) {
                                return;
                            }
                            if (Logger.LOGGING_SEVERE_$LI$()) {
                                if (level.intValue() >= 1000) {
                                    _this.actuallyLog(level, msg, thrown);
                                }
                            }
                            else if (Logger.LOGGING_WARNING_$LI$()) {
                                if (level.intValue() >= java.util.logging.Level.WARNING_$LI$().intValue()) {
                                    _this.actuallyLog(level, msg, thrown);
                                }
                            }
                            else {
                                _this.actuallyLog(level, msg, thrown);
                            }
                        })();
                    }
                    else if (((level != null && level instanceof java.util.logging.Level) || level === null) && ((typeof msg === 'string') || msg === null) && thrown === undefined) {
                        return this.log$java_util_logging_Level$java_lang_String(level, msg);
                    }
                    else if (((level != null && level instanceof java.util.logging.LogRecord) || level === null) && msg === undefined && thrown === undefined) {
                        return this.log$java_util_logging_LogRecord(level);
                    }
                    else
                        throw new Error('invalid overload');
                };
                Logger.prototype.log$java_util_logging_LogRecord = function (record) {
                    if (Logger.LOGGING_FALSE_$LI$()) {
                        return;
                    }
                    if (Logger.LOGGING_SEVERE_$LI$()) {
                        if (record.getLevel().intValue() >= 1000) {
                            this.actuallyLog(record);
                        }
                    }
                    else if (Logger.LOGGING_WARNING_$LI$()) {
                        if (record.getLevel().intValue() >= java.util.logging.Level.WARNING_$LI$().intValue()) {
                            this.actuallyLog(record);
                        }
                    }
                    else {
                        this.actuallyLog(record);
                    }
                };
                Logger.prototype.removeHandler = function (handler) {
                    if (Logger.LOGGING_FALSE_$LI$()) {
                        return;
                    }
                    this.handlers.remove(handler);
                };
                Logger.prototype.setLevel = function (newLevel) {
                    if (Logger.LOGGING_FALSE_$LI$()) {
                        return;
                    }
                    this.level = newLevel;
                };
                Logger.prototype.setParent = function (newParent) {
                    if (Logger.LOGGING_FALSE_$LI$()) {
                        return;
                    }
                    if (newParent != null) {
                        this.parent = newParent;
                    }
                };
                Logger.prototype.setUseParentHandlers = function (newUseParentHandlers) {
                    if (Logger.LOGGING_FALSE_$LI$()) {
                        return;
                    }
                    this.useParentHandlers = newUseParentHandlers;
                };
                Logger.prototype.getEffectiveLevel = function () {
                    if (this.level != null) {
                        return this.level;
                    }
                    var logger = this.getParent();
                    while ((logger != null)) {
                        var effectiveLevel = logger.getLevel();
                        if (effectiveLevel != null) {
                            return effectiveLevel;
                        }
                        logger = logger.getParent();
                    }
                    ;
                    return java.util.logging.Level.INFO_$LI$();
                };
                Logger.prototype.actuallyLog = function (level, msg, thrown) {
                    var _this = this;
                    if (((level != null && level instanceof java.util.logging.Level) || level === null) && ((typeof msg === 'string') || msg === null) && ((thrown != null && thrown instanceof Error) || thrown === null)) {
                        return (function () {
                            if (_this.isLoggable(level)) {
                                var record = new java.util.logging.LogRecord(level, msg);
                                record.setThrown(thrown);
                                record.setLoggerName(_this.getName());
                                _this.actuallyLog(record);
                            }
                        })();
                    }
                    else if (((level != null && level instanceof java.util.logging.LogRecord) || level === null) && msg === undefined && thrown === undefined) {
                        return this.actuallyLog$java_util_logging_LogRecord(level);
                    }
                    else
                        throw new Error('invalid overload');
                };
                Logger.prototype.actuallyLog$java_util_logging_LogRecord = function (record) {
                    if (this.isLoggable(record.getLevel())) {
                        {
                            var array162 = this.getHandlers();
                            for (var index161 = 0; index161 < array162.length; index161++) {
                                var handler = array162[index161];
                                {
                                    handler.publish(record);
                                }
                            }
                        }
                        var logger = this.getUseParentHandlers() ? this.getParent() : null;
                        while ((logger != null)) {
                            {
                                var array164 = logger.getHandlers();
                                for (var index163 = 0; index163 < array164.length; index163++) {
                                    var handler = array164[index163];
                                    {
                                        handler.publish(record);
                                    }
                                }
                            }
                            logger = logger.getUseParentHandlers() ? logger.getParent() : null;
                        }
                        ;
                    }
                };
                Logger.__static_initialized = false;
                Logger.GLOBAL_LOGGER_NAME = "global";
                return Logger;
            }());
            logging.Logger = Logger;
        })(logging = util.logging || (util.logging = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * A helper to detect concurrent modifications to collections. This is implemented as a helper
         * utility so that we could remove the checks easily by a flag.
         */
        var ConcurrentModificationDetector = (function () {
            function ConcurrentModificationDetector() {
            }
            ConcurrentModificationDetector.API_CHECK_$LI$ = function () { if (ConcurrentModificationDetector.API_CHECK == null)
                ConcurrentModificationDetector.API_CHECK = (java.lang.System.getProperty("jre.checks.api", "ENABLED") === "ENABLED"); return ConcurrentModificationDetector.API_CHECK; };
            ;
            ConcurrentModificationDetector.structureChanged = function (map) {
                if (!ConcurrentModificationDetector.API_CHECK_$LI$()) {
                    return;
                }
                var modCount = javaemul.internal.JsUtils.getIntProperty(map, ConcurrentModificationDetector.MOD_COUNT_PROPERTY) | 0;
                javaemul.internal.JsUtils.setIntProperty(map, ConcurrentModificationDetector.MOD_COUNT_PROPERTY, modCount + 1);
            };
            ConcurrentModificationDetector.recordLastKnownStructure = function (host, iterator) {
                if (!ConcurrentModificationDetector.API_CHECK_$LI$()) {
                    return;
                }
                var modCount = javaemul.internal.JsUtils.getIntProperty(host, ConcurrentModificationDetector.MOD_COUNT_PROPERTY);
                javaemul.internal.JsUtils.setIntProperty(iterator, ConcurrentModificationDetector.MOD_COUNT_PROPERTY, modCount);
            };
            ConcurrentModificationDetector.checkStructuralChange = function (host, iterator) {
                if (!ConcurrentModificationDetector.API_CHECK_$LI$()) {
                    return;
                }
                if (javaemul.internal.JsUtils.getIntProperty(iterator, ConcurrentModificationDetector.MOD_COUNT_PROPERTY) !== javaemul.internal.JsUtils.getIntProperty(host, ConcurrentModificationDetector.MOD_COUNT_PROPERTY)) {
                    throw new java.util.ConcurrentModificationException();
                }
            };
            ConcurrentModificationDetector.MOD_COUNT_PROPERTY = "_gwt_modCount";
            return ConcurrentModificationDetector;
        }());
        util.ConcurrentModificationDetector = ConcurrentModificationDetector;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var javaemul;
(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * A utility class that provides utility functions to do precondition checks inside GWT-SDK.
         */
        var InternalPreconditions = (function () {
            function InternalPreconditions() {
            }
            InternalPreconditions.CHECKED_MODE_$LI$ = function () { if (InternalPreconditions.CHECKED_MODE == null)
                InternalPreconditions.CHECKED_MODE = (java.lang.System.getProperty("jre.checkedMode", "ENABLED") === "ENABLED"); return InternalPreconditions.CHECKED_MODE; };
            ;
            InternalPreconditions.TYPE_CHECK_$LI$ = function () { if (InternalPreconditions.TYPE_CHECK == null)
                InternalPreconditions.TYPE_CHECK = (java.lang.System.getProperty("jre.checks.type", "ENABLED") === "ENABLED"); return InternalPreconditions.TYPE_CHECK; };
            ;
            InternalPreconditions.API_CHECK_$LI$ = function () { if (InternalPreconditions.API_CHECK == null)
                InternalPreconditions.API_CHECK = (java.lang.System.getProperty("jre.checks.api", "ENABLED") === "ENABLED"); return InternalPreconditions.API_CHECK; };
            ;
            InternalPreconditions.BOUND_CHECK_$LI$ = function () { if (InternalPreconditions.BOUND_CHECK == null)
                InternalPreconditions.BOUND_CHECK = (java.lang.System.getProperty("jre.checks.bounds", "ENABLED") === "ENABLED"); return InternalPreconditions.BOUND_CHECK; };
            ;
            InternalPreconditions.checkType = function (expression) {
                if (InternalPreconditions.TYPE_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalType(expression);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalType(expression);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            InternalPreconditions.checkCriticalType = function (expression) {
                if (!expression) {
                    throw new java.lang.ClassCastException();
                }
            };
            /**
             * Ensures the truth of an expression that verifies array type.
             */
            InternalPreconditions.checkArrayType$boolean = function (expression) {
                if (InternalPreconditions.TYPE_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalArrayType(expression);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalArrayType(expression);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            InternalPreconditions.checkCriticalArrayType$boolean = function (expression) {
                if (!expression) {
                    throw new java.lang.ArrayStoreException();
                }
            };
            /**
             * Ensures the truth of an expression that verifies array type.
             */
            InternalPreconditions.checkArrayType = function (expression, errorMessage) {
                if (((typeof expression === 'boolean') || expression === null) && ((errorMessage != null) || errorMessage === null)) {
                    return (function () {
                        if (InternalPreconditions.TYPE_CHECK_$LI$()) {
                            InternalPreconditions.checkCriticalArrayType(expression, errorMessage);
                        }
                        else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                            try {
                                InternalPreconditions.checkCriticalArrayType(expression, errorMessage);
                            }
                            catch (e) {
                                throw new java.lang.AssertionError(e);
                            }
                            ;
                        }
                    })();
                }
                else if (((typeof expression === 'boolean') || expression === null) && errorMessage === undefined) {
                    return javaemul.internal.InternalPreconditions.checkArrayType$boolean(expression);
                }
                else
                    throw new Error('invalid overload');
            };
            InternalPreconditions.checkCriticalArrayType = function (expression, errorMessage) {
                if (((typeof expression === 'boolean') || expression === null) && ((errorMessage != null) || errorMessage === null)) {
                    return (function () {
                        if (!expression) {
                            throw new java.lang.ArrayStoreException(/* valueOf */ new String(errorMessage).toString());
                        }
                    })();
                }
                else if (((typeof expression === 'boolean') || expression === null) && errorMessage === undefined) {
                    return javaemul.internal.InternalPreconditions.checkCriticalArrayType$boolean(expression);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Ensures the truth of an expression involving existence of an element.
             */
            InternalPreconditions.checkElement$boolean = function (expression) {
                if (InternalPreconditions.API_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalElement(expression);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalElement(expression);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            /**
             * Ensures the truth of an expression involving existence of an element.
             * <p>
             * For cases where failing fast is pretty important and not failing early could cause bugs that
             * are much harder to debug.
             */
            InternalPreconditions.checkCriticalElement$boolean = function (expression) {
                if (!expression) {
                    throw new java.util.NoSuchElementException();
                }
            };
            /**
             * Ensures the truth of an expression involving existence of an element.
             */
            InternalPreconditions.checkElement = function (expression, errorMessage) {
                if (((typeof expression === 'boolean') || expression === null) && ((errorMessage != null) || errorMessage === null)) {
                    return (function () {
                        if (InternalPreconditions.API_CHECK_$LI$()) {
                            InternalPreconditions.checkCriticalElement(expression, errorMessage);
                        }
                        else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                            try {
                                InternalPreconditions.checkCriticalElement(expression, errorMessage);
                            }
                            catch (e) {
                                throw new java.lang.AssertionError(e);
                            }
                            ;
                        }
                    })();
                }
                else if (((typeof expression === 'boolean') || expression === null) && errorMessage === undefined) {
                    return javaemul.internal.InternalPreconditions.checkElement$boolean(expression);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Ensures the truth of an expression involving existence of an element.
             * <p>
             * For cases where failing fast is pretty important and not failing early could cause bugs that
             * are much harder to debug.
             */
            InternalPreconditions.checkCriticalElement = function (expression, errorMessage) {
                if (((typeof expression === 'boolean') || expression === null) && ((errorMessage != null) || errorMessage === null)) {
                    return (function () {
                        if (!expression) {
                            throw new java.util.NoSuchElementException(/* valueOf */ new String(errorMessage).toString());
                        }
                    })();
                }
                else if (((typeof expression === 'boolean') || expression === null) && errorMessage === undefined) {
                    return javaemul.internal.InternalPreconditions.checkCriticalElement$boolean(expression);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Ensures the truth of an expression involving one or more parameters to the calling method.
             */
            InternalPreconditions.checkArgument$boolean = function (expression) {
                if (InternalPreconditions.API_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalArgument(expression);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalArgument(expression);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            /**
             * Ensures the truth of an expression involving one or more parameters to the calling method.
             * <p>
             * For cases where failing fast is pretty important and not failing early could cause bugs that
             * are much harder to debug.
             */
            InternalPreconditions.checkCriticalArgument$boolean = function (expression) {
                if (!expression) {
                    throw new java.lang.IllegalArgumentException();
                }
            };
            /**
             * Ensures the truth of an expression involving one or more parameters to the calling method.
             */
            InternalPreconditions.checkArgument$boolean$java_lang_Object = function (expression, errorMessage) {
                if (InternalPreconditions.API_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalArgument(expression, errorMessage);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalArgument(expression, errorMessage);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            /**
             * Ensures the truth of an expression involving one or more parameters to the calling method.
             * <p>
             * For cases where failing fast is pretty important and not failing early could cause bugs that
             * are much harder to debug.
             */
            InternalPreconditions.checkCriticalArgument$boolean$java_lang_Object = function (expression, errorMessage) {
                if (!expression) {
                    throw new java.lang.IllegalArgumentException(/* valueOf */ new String(errorMessage).toString());
                }
            };
            /**
             * Ensures the truth of an expression involving one or more parameters to the calling method.
             */
            InternalPreconditions.checkArgument = function (expression, errorMessageTemplate) {
                var _this = this;
                var errorMessageArgs = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    errorMessageArgs[_i - 2] = arguments[_i];
                }
                if (((typeof expression === 'boolean') || expression === null) && ((typeof errorMessageTemplate === 'string') || errorMessageTemplate === null) && ((errorMessageArgs != null && errorMessageArgs instanceof Array) || errorMessageArgs === null)) {
                    return (function () {
                        if (InternalPreconditions.API_CHECK_$LI$()) {
                            InternalPreconditions.checkCriticalArgument.apply(_this, [expression, errorMessageTemplate].concat(errorMessageArgs));
                        }
                        else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                            try {
                                InternalPreconditions.checkCriticalArgument.apply(_this, [expression, errorMessageTemplate].concat(errorMessageArgs));
                            }
                            catch (e) {
                                throw new java.lang.AssertionError(e);
                            }
                            ;
                        }
                    })();
                }
                else if (((typeof expression === 'boolean') || expression === null) && ((errorMessageTemplate != null) || errorMessageTemplate === null) && errorMessageArgs === undefined) {
                    return javaemul.internal.InternalPreconditions.checkArgument$boolean$java_lang_Object(expression, errorMessageTemplate);
                }
                else if (((typeof expression === 'boolean') || expression === null) && errorMessageTemplate === undefined && errorMessageArgs === undefined) {
                    return javaemul.internal.InternalPreconditions.checkArgument$boolean(expression);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Ensures the truth of an expression involving one or more parameters to the calling method.
             * <p>
             * For cases where failing fast is pretty important and not failing early could cause bugs that
             * are much harder to debug.
             */
            InternalPreconditions.checkCriticalArgument = function (expression, errorMessageTemplate) {
                var _this = this;
                var errorMessageArgs = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    errorMessageArgs[_i - 2] = arguments[_i];
                }
                if (((typeof expression === 'boolean') || expression === null) && ((typeof errorMessageTemplate === 'string') || errorMessageTemplate === null) && ((errorMessageArgs != null && errorMessageArgs instanceof Array) || errorMessageArgs === null)) {
                    return (function () {
                        if (!expression) {
                            throw new java.lang.IllegalArgumentException(InternalPreconditions.format.apply(_this, [errorMessageTemplate].concat(errorMessageArgs)));
                        }
                    })();
                }
                else if (((typeof expression === 'boolean') || expression === null) && ((errorMessageTemplate != null) || errorMessageTemplate === null) && errorMessageArgs === undefined) {
                    return javaemul.internal.InternalPreconditions.checkCriticalArgument$boolean$java_lang_Object(expression, errorMessageTemplate);
                }
                else if (((typeof expression === 'boolean') || expression === null) && errorMessageTemplate === undefined && errorMessageArgs === undefined) {
                    return javaemul.internal.InternalPreconditions.checkCriticalArgument$boolean(expression);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Ensures the truth of an expression involving the state of the calling instance, but not
             * involving any parameters to the calling method.
             *
             * @param expression a boolean expression
             * @throws IllegalStateException if {@code expression} is false
             */
            InternalPreconditions.checkState$boolean = function (expression) {
                if (InternalPreconditions.API_CHECK_$LI$()) {
                    InternalPreconditions.checkCritcalState(expression);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCritcalState(expression);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            /**
             * Ensures the truth of an expression involving the state of the calling instance, but not
             * involving any parameters to the calling method.
             * <p>
             * For cases where failing fast is pretty important and not failing early could cause bugs that
             * are much harder to debug.
             */
            InternalPreconditions.checkCritcalState = function (expression) {
                if (!expression) {
                    throw new java.lang.IllegalStateException();
                }
            };
            /**
             * Ensures the truth of an expression involving the state of the calling instance, but not
             * involving any parameters to the calling method.
             */
            InternalPreconditions.checkState = function (expression, errorMessage) {
                if (((typeof expression === 'boolean') || expression === null) && ((errorMessage != null) || errorMessage === null)) {
                    return (function () {
                        if (InternalPreconditions.API_CHECK_$LI$()) {
                            InternalPreconditions.checkCriticalState(expression, errorMessage);
                        }
                        else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                            try {
                                InternalPreconditions.checkCriticalState(expression, errorMessage);
                            }
                            catch (e) {
                                throw new java.lang.AssertionError(e);
                            }
                            ;
                        }
                    })();
                }
                else if (((typeof expression === 'boolean') || expression === null) && errorMessage === undefined) {
                    return javaemul.internal.InternalPreconditions.checkState$boolean(expression);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Ensures the truth of an expression involving the state of the calling instance, but not
             * involving any parameters to the calling method.
             */
            InternalPreconditions.checkCriticalState = function (expression, errorMessage) {
                if (!expression) {
                    throw new java.lang.IllegalStateException(/* valueOf */ new String(errorMessage).toString());
                }
            };
            /**
             * Ensures that an object reference passed as a parameter to the calling method is not null.
             */
            InternalPreconditions.checkNotNull$java_lang_Object = function (reference) {
                if (InternalPreconditions.API_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalNotNull(reference);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalNotNull(reference);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
                return reference;
            };
            InternalPreconditions.checkCriticalNotNull$java_lang_Object = function (reference) {
                if (reference == null) {
                    throw new java.lang.NullPointerException();
                }
                return reference;
            };
            /**
             * Ensures that an object reference passed as a parameter to the calling method is not null.
             */
            InternalPreconditions.checkNotNull = function (reference, errorMessage) {
                if (((reference != null) || reference === null) && ((errorMessage != null) || errorMessage === null)) {
                    return (function () {
                        if (InternalPreconditions.API_CHECK_$LI$()) {
                            InternalPreconditions.checkCriticalNotNull(reference, errorMessage);
                        }
                        else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                            try {
                                InternalPreconditions.checkCriticalNotNull(reference, errorMessage);
                            }
                            catch (e) {
                                throw new java.lang.AssertionError(e);
                            }
                            ;
                        }
                    })();
                }
                else if (((reference != null) || reference === null) && errorMessage === undefined) {
                    return javaemul.internal.InternalPreconditions.checkNotNull$java_lang_Object(reference);
                }
                else
                    throw new Error('invalid overload');
            };
            InternalPreconditions.checkCriticalNotNull = function (reference, errorMessage) {
                if (((reference != null) || reference === null) && ((errorMessage != null) || errorMessage === null)) {
                    return (function () {
                        if (reference == null) {
                            throw new java.lang.NullPointerException(/* valueOf */ new String(errorMessage).toString());
                        }
                    })();
                }
                else if (((reference != null) || reference === null) && errorMessage === undefined) {
                    return javaemul.internal.InternalPreconditions.checkCriticalNotNull$java_lang_Object(reference);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Ensures that {@code size} specifies a valid array size (i.e. non-negative).
             */
            InternalPreconditions.checkArraySize = function (size) {
                if (InternalPreconditions.API_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalArraySize(size);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalArraySize(size);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            InternalPreconditions.checkCriticalArraySize = function (size) {
                if (size < 0) {
                    throw new java.lang.NegativeArraySizeException("Negative array size: " + size);
                }
            };
            /**
             * Ensures that {@code index} specifies a valid <i>element</i> in an array, list or string of size
             * {@code size}. An element index may range from zero, inclusive, to {@code size}, exclusive.
             */
            InternalPreconditions.checkElementIndex = function (index, size) {
                if (InternalPreconditions.BOUND_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalElementIndex(index, size);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalElementIndex(index, size);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            InternalPreconditions.checkCriticalElementIndex = function (index, size) {
                if (index < 0 || index >= size) {
                    throw new java.lang.IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
                }
            };
            /**
             * Ensures that {@code index} specifies a valid <i>position</i> in an array, list or string of
             * size {@code size}. A position index may range from zero to {@code size}, inclusive.
             */
            InternalPreconditions.checkPositionIndex = function (index, size) {
                if (InternalPreconditions.BOUND_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalPositionIndex(index, size);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalPositionIndex(index, size);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            InternalPreconditions.checkCriticalPositionIndex = function (index, size) {
                if (index < 0 || index > size) {
                    throw new java.lang.IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
                }
            };
            /**
             * Ensures that {@code start} and {@code end} specify a valid <i>positions</i> in an array, list
             * or string of size {@code size}, and are in order. A position index may range from zero to
             * {@code size}, inclusive.
             */
            InternalPreconditions.checkPositionIndexes = function (start, end, size) {
                if (InternalPreconditions.BOUND_CHECK_$LI$()) {
                    InternalPreconditions.checkCriticalPositionIndexes(start, end, size);
                }
                else if (InternalPreconditions.CHECKED_MODE_$LI$()) {
                    try {
                        InternalPreconditions.checkCriticalPositionIndexes(start, end, size);
                    }
                    catch (e) {
                        throw new java.lang.AssertionError(e);
                    }
                    ;
                }
            };
            /**
             * Ensures that {@code start} and {@code end} specify a valid <i>positions</i> in an array, list
             * or string of size {@code size}, and are in order. A position index may range from zero to
             * {@code size}, inclusive.
             */
            InternalPreconditions.checkCriticalPositionIndexes = function (start, end, size) {
                if (start < 0) {
                    throw new java.lang.IndexOutOfBoundsException("fromIndex: " + start + " < 0");
                }
                if (end > size) {
                    throw new java.lang.IndexOutOfBoundsException("toIndex: " + end + " > size " + size);
                }
                if (start > end) {
                    throw new java.lang.IllegalArgumentException("fromIndex: " + start + " > toIndex: " + end);
                }
            };
            /**
             * Checks that bounds are correct.
             *
             * @throw StringIndexOutOfBoundsException if the range is not legal
             */
            InternalPreconditions.checkStringBounds = function (start, end, size) {
                if (start < 0) {
                    throw new java.lang.StringIndexOutOfBoundsException("fromIndex: " + start + " < 0");
                }
                if (end > size) {
                    throw new java.lang.StringIndexOutOfBoundsException("toIndex: " + end + " > size " + size);
                }
                if (end < start) {
                    throw new java.lang.StringIndexOutOfBoundsException("fromIndex: " + start + " > toIndex: " + end);
                }
            };
            /**
             * Substitutes each {@code %s} in {@code template} with an argument. These are matched by
             * position: the first {@code %s} gets {@code args[0]}, etc.  If there are more arguments than
             * placeholders, the unmatched arguments will be appended to the end of the formatted message in
             * square braces.
             */
            InternalPreconditions.format = function (template) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                template = new String(template).toString();
                var builder = new java.lang.StringBuilder(template.length + 16 * args.length);
                var templateStart = 0;
                var i = 0;
                while ((i < args.length)) {
                    var placeholderStart = template.indexOf("%s", templateStart);
                    if (placeholderStart === -1) {
                        break;
                    }
                    builder.append(template.substring(templateStart, placeholderStart));
                    builder.append(args[i++]);
                    templateStart = placeholderStart + 2;
                }
                ;
                builder.append(template.substring(templateStart));
                if (i < args.length) {
                    builder.append(" [");
                    builder.append(args[i++]);
                    while ((i < args.length)) {
                        builder.append(", ");
                        builder.append(args[i++]);
                    }
                    ;
                    builder.append(']');
                }
                return builder.toString();
            };
            return InternalPreconditions;
        }());
        internal.InternalPreconditions = InternalPreconditions;
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var javaemul;
(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Wraps native <code>boolean</code> as an object.
         */
        var BooleanHelper = (function () {
            function BooleanHelper() {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Comparable", "java.io.Serializable"] });
            }
            BooleanHelper.TYPE_$LI$ = function () { if (BooleanHelper.TYPE == null)
                BooleanHelper.TYPE = Boolean; return BooleanHelper.TYPE; };
            ;
            BooleanHelper.compare = function (x, y) {
                return (x === y) ? 0 : (x ? 1 : -1);
            };
            BooleanHelper.hashCode = function (value) {
                return value ? 1231 : 1237;
            };
            BooleanHelper.logicalAnd = function (a, b) {
                return a && b;
            };
            BooleanHelper.logicalOr = function (a, b) {
                return a || b;
            };
            BooleanHelper.logicalXor = function (a, b) {
                return a !== b;
            };
            BooleanHelper.parseBoolean = function (s) {
                return (function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })("true", s);
            };
            BooleanHelper.toString = function (x) {
                return new String(x).toString();
            };
            BooleanHelper.valueOf$boolean = function (b) {
                return b ? BooleanHelper.TRUE : BooleanHelper.FALSE;
            };
            BooleanHelper.valueOf = function (s) {
                if (((typeof s === 'string') || s === null)) {
                    return (function () {
                        return BooleanHelper.valueOf(BooleanHelper.parseBoolean(s));
                    })();
                }
                else if (((typeof s === 'boolean') || s === null)) {
                    return javaemul.internal.BooleanHelper.valueOf$boolean(s);
                }
                else
                    throw new Error('invalid overload');
            };
            BooleanHelper.prototype.booleanValue = function () {
                return BooleanHelper.unsafeCast(javaemul.internal.InternalPreconditions.checkNotNull(this));
            };
            BooleanHelper.unsafeCast = function (value) {
                return value;
            };
            BooleanHelper.prototype.compareTo = function (b) {
                var _this = this;
                if (((b != null && b instanceof javaemul.internal.BooleanHelper) || b === null)) {
                    return (function () {
                        return BooleanHelper.compare(_this.booleanValue(), b.booleanValue());
                    })();
                }
                else
                    throw new Error('invalid overload');
            };
            BooleanHelper.prototype.equals = function (o) {
                return javaemul.internal.InternalPreconditions.checkNotNull(this) === o;
            };
            BooleanHelper.prototype.hashCode = function () {
                return BooleanHelper.hashCode(this.booleanValue());
            };
            BooleanHelper.prototype.toString = function () {
                return BooleanHelper.toString(this.booleanValue());
            };
            BooleanHelper.FALSE = false;
            BooleanHelper.TRUE = true;
            return BooleanHelper;
        }());
        internal.BooleanHelper = BooleanHelper;
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Available as a superclass of event objects.
         */
        var EventObject = (function () {
            function EventObject(source) {
                this.source = source;
            }
            EventObject.prototype.getSource = function () {
                return this.source;
            };
            return EventObject;
        }());
        util.EventObject = EventObject;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        var logging;
        (function (logging) {
            /**
             * An emulation of the java.util.logging.Handler class. See
             * <a href="http://java.sun.com/j2se/1.4.2/docs/api/java/util/logging/Handler.html">
             * The Java API doc for details</a>
             */
            var Handler = (function () {
                function Handler() {
                }
                Handler.prototype.getFormatter = function () {
                    return this.formatter;
                };
                Handler.prototype.getLevel = function () {
                    if (this.level != null) {
                        return this.level;
                    }
                    return java.util.logging.Level.ALL_$LI$();
                };
                Handler.prototype.isLoggable = function (record) {
                    return this.getLevel().intValue() <= record.getLevel().intValue();
                };
                Handler.prototype.setFormatter = function (newFormatter) {
                    this.formatter = newFormatter;
                };
                Handler.prototype.setLevel = function (newLevel) {
                    this.level = newLevel;
                };
                return Handler;
            }());
            logging.Handler = Handler;
        })(logging = util.logging || (util.logging = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        var logging;
        (function (logging) {
            /**
             * A simple console logger used in super dev mode.
             */
            var SimpleConsoleLogHandler = (function (_super) {
                __extends(SimpleConsoleLogHandler, _super);
                function SimpleConsoleLogHandler() {
                    _super.apply(this, arguments);
                }
                SimpleConsoleLogHandler.prototype.publish = function (record) {
                    if (!this.isLoggable(record)) {
                        return;
                    }
                    var level = this.toConsoleLogLevel(record.getLevel());
                    console.log(level, record.getMessage());
                    if (record.getThrown() != null) {
                        console.log(level, record.getThrown());
                    }
                };
                SimpleConsoleLogHandler.prototype.toConsoleLogLevel = function (level) {
                    var val = level.intValue();
                    if (val >= java.util.logging.Level.SEVERE_$LI$().intValue()) {
                        return "error";
                    }
                    else if (val >= java.util.logging.Level.WARNING_$LI$().intValue()) {
                        return "warn";
                    }
                    else if (val >= java.util.logging.Level.INFO_$LI$().intValue()) {
                        return "info";
                    }
                    else {
                        return "log";
                    }
                };
                SimpleConsoleLogHandler.prototype.close = function () {
                };
                SimpleConsoleLogHandler.prototype.flush = function () {
                };
                return SimpleConsoleLogHandler;
            }(java.util.logging.Handler));
            logging.SimpleConsoleLogHandler = SimpleConsoleLogHandler;
        })(logging = util.logging || (util.logging = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var javaemul;
(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Provides utilities to perform operations on Arrays.
         */
        var ArrayHelper = (function () {
            function ArrayHelper() {
            }
            ArrayHelper.clone = function (array, fromIndex, toIndex) {
                var result = ArrayHelper.unsafeClone(array, fromIndex, toIndex);
                return javaemul.internal.ArrayStamper.stampJavaTypeInfo(result, array);
            };
            /**
             * Unlike clone, this method returns a copy of the array that is not type
             * marked. This is only safe for temp arrays as returned array will not do
             * any type checks.
             */
            ArrayHelper.unsafeClone = function (array, fromIndex, toIndex) {
                return array.slice(fromIndex, toIndex);
            };
            ArrayHelper.createFrom = function (array, length) {
                var result = ArrayHelper.createNativeArray(length);
                return javaemul.internal.ArrayStamper.stampJavaTypeInfo(result, array);
            };
            ArrayHelper.createNativeArray = function (length) {
                return new Array(length);
            };
            ArrayHelper.getLength = function (array) {
                return (array.length | 0);
            };
            ArrayHelper.setLength = function (array, length) {
                array.length = length;
            };
            ArrayHelper.removeFrom = function (array, index, deleteCount) {
                array.splice(index, deleteCount);
            };
            ArrayHelper.insertTo$java_lang_Object$int$java_lang_Object = function (array, index, value) {
                array.splice(index, 0, value);
            };
            ArrayHelper.insertTo = function (array, index, values) {
                if (((array != null) || array === null) && ((typeof index === 'number') || index === null) && ((values != null && values instanceof Array) || values === null)) {
                    return (function () {
                        ArrayHelper.copy(values, 0, array, index, values.length, false);
                    })();
                }
                else if (((array != null) || array === null) && ((typeof index === 'number') || index === null) && ((values != null) || values === null)) {
                    return javaemul.internal.ArrayHelper.insertTo$java_lang_Object$int$java_lang_Object(array, index, values);
                }
                else
                    throw new Error('invalid overload');
            };
            ArrayHelper.copy = function (src, srcOfs, dest, destOfs, len, overwrite) {
                if (overwrite === void 0) { overwrite = true; }
                if (src === dest) {
                    src = ArrayHelper.unsafeClone(src, srcOfs, srcOfs + len);
                    srcOfs = 0;
                }
                for (var batchStart = srcOfs, end = srcOfs + len; batchStart < end;) {
                    var batchEnd = Math.min(batchStart + ArrayHelper.ARRAY_PROCESS_BATCH_SIZE, end);
                    len = batchEnd - batchStart;
                    batchStart = batchEnd;
                    destOfs += len;
                }
            };
            ArrayHelper.ARRAY_PROCESS_BATCH_SIZE = 10000;
            return ArrayHelper;
        }());
        internal.ArrayHelper = ArrayHelper;
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var io;
    (function (io) {
        /**
         * See <a
         * href="https://docs.oracle.com/javase/8/docs/api/java/io/UncheckedIOException.html">the
         * official Java API doc</a> for details.
         */
        var UncheckedIOException = (function (_super) {
            __extends(UncheckedIOException, _super);
            function UncheckedIOException(message, cause) {
                if (((typeof message === 'string') || message === null) && ((cause != null && cause instanceof java.io.IOException) || cause === null)) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((message != null && message instanceof java.io.IOException) || message === null) && cause === undefined) {
                    var cause = message;
                    _super.call(this, javaemul.internal.InternalPreconditions.checkNotNull(cause));
                    this.message = javaemul.internal.InternalPreconditions.checkNotNull(cause);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            UncheckedIOException.prototype.getCause = function () {
                return null;
            };
            return UncheckedIOException;
        }(Error));
        io.UncheckedIOException = UncheckedIOException;
    })(io = java.io || (java.io = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var javaemul;
(function (javaemul) {
    var internal;
    (function (internal) {
        /**
         * Provides an interface for simple JavaScript idioms that can not be expressed in Java.
         */
        var JsUtils = (function () {
            function JsUtils() {
            }
            JsUtils.getInfinity = function () {
                return Infinity;
            };
            JsUtils.isUndefined = function (value) {
                return value == null;
            };
            JsUtils.unsafeCastToString = function (string) {
                return string;
            };
            JsUtils.setPropertySafe = function (map, key, value) {
                try {
                    map[key] = value;
                }
                catch (e) {
                }
                ;
            };
            JsUtils.getIntProperty = function (map, key) {
                return (map[key] | 0);
            };
            JsUtils.setIntProperty = function (map, key, value) {
                map[key] = value;
            };
            JsUtils.typeOf = function (o) {
                return typeof o;
            };
            return JsUtils;
        }());
        internal.JsUtils = JsUtils;
    })(internal = javaemul.internal || (javaemul.internal = {}));
})(javaemul || (javaemul = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * See <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/IndexOutOfBoundsException.html">the
         * official Java API doc</a> for details.
         */
        var IndexOutOfBoundsException = (function (_super) {
            __extends(IndexOutOfBoundsException, _super);
            function IndexOutOfBoundsException(message) {
                if (((typeof message === 'string') || message === null)) {
                    _super.call(this, message);
                    this.message = message;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (message === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return IndexOutOfBoundsException;
        }(Error));
        lang.IndexOutOfBoundsException = IndexOutOfBoundsException;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * See <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/StringIndexOfBoundsException.html">the
         * official Java API doc</a> for details.
         */
        var StringIndexOutOfBoundsException = (function (_super) {
            __extends(StringIndexOutOfBoundsException, _super);
            function StringIndexOutOfBoundsException(message) {
                if (((typeof message === 'string') || message === null)) {
                    _super.call(this, message);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((typeof message === 'number') || message === null)) {
                    var index = message;
                    _super.call(this, "String index out of range: " + index);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (message === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return StringIndexOutOfBoundsException;
        }(java.lang.IndexOutOfBoundsException));
        lang.StringIndexOutOfBoundsException = StringIndexOutOfBoundsException;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * NOTE: in GWT this will never be thrown for normal array accesses, only for
         * explicit throws.
         *
         * See <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ArrayIndexOutOfBoundsException.html">the
         * official Java API doc</a> for details.
         */
        var ArrayIndexOutOfBoundsException = (function (_super) {
            __extends(ArrayIndexOutOfBoundsException, _super);
            function ArrayIndexOutOfBoundsException(msg) {
                if (((typeof msg === 'string') || msg === null)) {
                    _super.call(this, msg);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((typeof msg === 'number') || msg === null)) {
                    var index = msg;
                    _super.call(this, "Array index " + index + " out of range");
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (msg === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            return ArrayIndexOutOfBoundsException;
        }(java.lang.IndexOutOfBoundsException));
        lang.ArrayIndexOutOfBoundsException = ArrayIndexOutOfBoundsException;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Linked list implementation.
         * <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/LinkedList.html">
         * [Sun docs]</a>
         *
         * @param <E>
         * element type.
         */
        var LinkedList = (function (_super) {
            __extends(LinkedList, _super);
            function LinkedList(c) {
                var _this = this;
                if (((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0) || c === null)) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.List", "java.util.Collection", "java.util.Queue", "java.util.Deque", "java.lang.Iterable", "java.io.Serializable"] });
                    this.__size = 0;
                    (function () {
                        _this.header = new LinkedList.Node();
                        _this.tail = new LinkedList.Node();
                        _this.reset();
                        _this.addAll(c);
                    })();
                }
                else if (c === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.List", "java.util.Collection", "java.util.Queue", "java.util.Deque", "java.lang.Iterable", "java.io.Serializable"] });
                    this.__size = 0;
                    (function () {
                        _this.header = new LinkedList.Node();
                        _this.tail = new LinkedList.Node();
                        _this.reset();
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            LinkedList.prototype.forEach = function (action) {
                javaemul.internal.InternalPreconditions.checkNotNull(action);
                for (var index165 = this.iterator(); index165.hasNext();) {
                    var t = index165.next();
                    {
                        action(t);
                    }
                }
            };
            LinkedList.prototype.add$java_lang_Object = function (o) {
                this.addLast(o);
                return true;
            };
            LinkedList.prototype.addFirst = function (o) {
                this.addNode(o, this.header, this.header.next);
            };
            LinkedList.prototype.addLast = function (o) {
                this.addNode(o, this.tail.prev, this.tail);
            };
            LinkedList.prototype.clear = function () {
                this.reset();
            };
            LinkedList.prototype.reset = function () {
                this.header.next = this.tail;
                this.tail.prev = this.header;
                this.header.prev = this.tail.next = null;
                this.__size = 0;
            };
            LinkedList.prototype.clone = function () {
                return new LinkedList(this);
            };
            LinkedList.prototype.descendingIterator = function () {
                return new LinkedList.DescendingIteratorImpl(this);
            };
            LinkedList.prototype.element = function () {
                return this.getFirst();
            };
            LinkedList.prototype.getFirst = function () {
                javaemul.internal.InternalPreconditions.checkElement(this.__size !== 0);
                return this.header.next.value;
            };
            LinkedList.prototype.getLast = function () {
                javaemul.internal.InternalPreconditions.checkElement(this.__size !== 0);
                return this.tail.prev.value;
            };
            LinkedList.prototype.listIterator = function (index) {
                var _this = this;
                if (((typeof index === 'number') || index === null)) {
                    return (function () {
                        javaemul.internal.InternalPreconditions.checkPositionIndex(index, _this.__size);
                        var node;
                        if (index >= _this.__size >> 1) {
                            node = _this.tail;
                            for (var i = _this.__size; i > index; --i) {
                                node = node.prev;
                            }
                        }
                        else {
                            node = _this.header.next;
                            for (var i = 0; i < index; ++i) {
                                node = node.next;
                            }
                        }
                        return new LinkedList.ListIteratorImpl2(_this, index, node);
                    })();
                }
                else if (index === undefined) {
                    return this.listIterator$();
                }
                else
                    throw new Error('invalid overload');
            };
            LinkedList.prototype.offer = function (o) {
                return this.offerLast(o);
            };
            LinkedList.prototype.offerFirst = function (e) {
                this.addFirst(e);
                return true;
            };
            LinkedList.prototype.offerLast = function (e) {
                this.addLast(e);
                return true;
            };
            LinkedList.prototype.peek = function () {
                return this.peekFirst();
            };
            LinkedList.prototype.peekFirst = function () {
                return this.__size === 0 ? null : this.getFirst();
            };
            LinkedList.prototype.peekLast = function () {
                return this.__size === 0 ? null : this.getLast();
            };
            LinkedList.prototype.poll = function () {
                return this.pollFirst();
            };
            LinkedList.prototype.pollFirst = function () {
                return this.__size === 0 ? null : this.removeFirst();
            };
            LinkedList.prototype.pollLast = function () {
                return this.__size === 0 ? null : this.removeLast();
            };
            LinkedList.prototype.pop = function () {
                return this.removeFirst();
            };
            LinkedList.prototype.push = function (e) {
                this.addFirst(e);
            };
            LinkedList.prototype.remove$ = function () {
                return this.removeFirst();
            };
            LinkedList.prototype.removeFirst = function () {
                javaemul.internal.InternalPreconditions.checkElement(this.__size !== 0);
                return this.removeNode(this.header.next);
            };
            LinkedList.prototype.removeFirstOccurrence = function (o) {
                return this.remove(o);
            };
            LinkedList.prototype.removeLast = function () {
                javaemul.internal.InternalPreconditions.checkElement(this.__size !== 0);
                return this.removeNode(this.tail.prev);
            };
            LinkedList.prototype.removeLastOccurrence = function (o) {
                for (var e = this.tail.prev; e !== this.header; e = e.prev) {
                    if (java.util.Objects.equals(e.value, o)) {
                        this.removeNode(e);
                        return true;
                    }
                }
                return false;
            };
            LinkedList.prototype.size = function () {
                return this.__size;
            };
            LinkedList.prototype.addNode = function (o, prev, next) {
                var node = new LinkedList.Node();
                node.value = o;
                node.prev = prev;
                node.next = next;
                next.prev = prev.next = node;
                ++this.__size;
            };
            LinkedList.prototype.removeNode = function (node) {
                var oldValue = node.value;
                node.next.prev = node.prev;
                node.prev.next = node.next;
                node.next = node.prev = null;
                node.value = null;
                --this.__size;
                return oldValue;
            };
            return LinkedList;
        }(java.util.AbstractSequentialList));
        util.LinkedList = LinkedList;
        var LinkedList;
        (function (LinkedList) {
            var DescendingIteratorImpl = (function () {
                function DescendingIteratorImpl(__parent) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                    this.__parent = __parent;
                    this.itr = new LinkedList.ListIteratorImpl2(this.__parent, this.__parent.__size, this.__parent.tail);
                }
                DescendingIteratorImpl.prototype.forEachRemaining = function (consumer) {
                    javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                    while ((this.hasNext())) {
                        consumer(this.next());
                    }
                    ;
                };
                DescendingIteratorImpl.prototype.hasNext = function () {
                    return this.itr.hasPrevious();
                };
                DescendingIteratorImpl.prototype.next = function () {
                    return this.itr.previous();
                };
                DescendingIteratorImpl.prototype.remove = function () {
                    this.itr.remove();
                };
                return DescendingIteratorImpl;
            }());
            LinkedList.DescendingIteratorImpl = DescendingIteratorImpl;
            /**
             * Implementation of ListIterator for linked lists.
             */
            var ListIteratorImpl2 = (function () {
                /**
                 * @param index
                 * from the beginning of the list (0 = first node)
                 * @param startNode
                 * the initial current node
                 */
                function ListIteratorImpl2(__parent, index, startNode) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator", "java.util.ListIterator"] });
                    this.__parent = __parent;
                    this.currentIndex = 0;
                    this.lastNode = null;
                    this.currentNode = startNode;
                    this.currentIndex = index;
                }
                ListIteratorImpl2.prototype.forEachRemaining = function (consumer) {
                    javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                    while ((this.hasNext())) {
                        consumer(this.next());
                    }
                    ;
                };
                ListIteratorImpl2.prototype.add = function (o) {
                    this.__parent.addNode(o, this.currentNode.prev, this.currentNode);
                    ++this.currentIndex;
                    this.lastNode = null;
                };
                ListIteratorImpl2.prototype.hasNext = function () {
                    return this.currentNode !== this.__parent.tail;
                };
                ListIteratorImpl2.prototype.hasPrevious = function () {
                    return this.currentNode.prev !== this.__parent.header;
                };
                ListIteratorImpl2.prototype.next = function () {
                    javaemul.internal.InternalPreconditions.checkElement(this.hasNext());
                    this.lastNode = this.currentNode;
                    this.currentNode = this.currentNode.next;
                    ++this.currentIndex;
                    return this.lastNode.value;
                };
                ListIteratorImpl2.prototype.nextIndex = function () {
                    return this.currentIndex;
                };
                ListIteratorImpl2.prototype.previous = function () {
                    javaemul.internal.InternalPreconditions.checkElement(this.hasPrevious());
                    this.lastNode = this.currentNode = this.currentNode.prev;
                    --this.currentIndex;
                    return this.lastNode.value;
                };
                ListIteratorImpl2.prototype.previousIndex = function () {
                    return this.currentIndex - 1;
                };
                ListIteratorImpl2.prototype.remove = function () {
                    javaemul.internal.InternalPreconditions.checkState(this.lastNode != null);
                    var nextNode = this.lastNode.next;
                    this.__parent.removeNode(this.lastNode);
                    if (this.currentNode === this.lastNode) {
                        this.currentNode = nextNode;
                    }
                    else {
                        --this.currentIndex;
                    }
                    this.lastNode = null;
                };
                ListIteratorImpl2.prototype.set = function (o) {
                    javaemul.internal.InternalPreconditions.checkState(this.lastNode != null);
                    this.lastNode.value = o;
                };
                return ListIteratorImpl2;
            }());
            LinkedList.ListIteratorImpl2 = ListIteratorImpl2;
            /**
             * Internal class representing a doubly-linked list node.
             *
             * @param <E>
             * element type
             */
            var Node = (function () {
                function Node() {
                }
                return Node;
            }());
            LinkedList.Node = Node;
        })(LinkedList = util.LinkedList || (util.LinkedList = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Skeletal implementation of the Map interface.
         * <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractMap.html">
         * [Sun docs]</a>
         *
         * @param <K>
         * the key type.
         * @param <V>
         * the value type.
         */
        var AbstractMap = (function () {
            function AbstractMap() {
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map"] });
            }
            AbstractMap.prototype.clear = function () {
                this.entrySet().clear();
            };
            AbstractMap.prototype.containsKey = function (key) {
                return this.implFindEntry(key, false) != null;
            };
            AbstractMap.prototype.containsValue = function (value) {
                for (var index166 = this.entrySet().iterator(); index166.hasNext();) {
                    var entry = index166.next();
                    {
                        var v = entry.getValue();
                        if (java.util.Objects.equals(value, v)) {
                            return true;
                        }
                    }
                }
                return false;
            };
            AbstractMap.prototype.containsEntry = function (entry) {
                var key = entry.getKey();
                var value = entry.getValue();
                var ourValue = this.get(key);
                if (!java.util.Objects.equals(value, ourValue)) {
                    return false;
                }
                if (ourValue == null && !this.containsKey(key)) {
                    return false;
                }
                return true;
            };
            AbstractMap.prototype.equals = function (obj) {
                if (obj === this) {
                    return true;
                }
                if (!(obj != null && obj["__interfaces"] != null && obj["__interfaces"].indexOf("java.util.Map") >= 0)) {
                    return false;
                }
                var otherMap = obj;
                if (this.size() !== otherMap.size()) {
                    return false;
                }
                for (var index167 = otherMap.entrySet().iterator(); index167.hasNext();) {
                    var entry = index167.next();
                    {
                        if (!this.containsEntry(entry)) {
                            return false;
                        }
                    }
                }
                return true;
            };
            AbstractMap.prototype.get = function (key) {
                return AbstractMap.getEntryValueOrNull(this.implFindEntry(key, false));
            };
            AbstractMap.prototype.hashCode = function () {
                return java.util.Collections.hashCode(this.entrySet());
            };
            AbstractMap.prototype.isEmpty = function () {
                return this.size() === 0;
            };
            AbstractMap.prototype.keySet = function () {
                return new AbstractMap.AbstractMap$0(this);
            };
            AbstractMap.prototype.put = function (key, value) {
                if (((key != null) || key === null) && ((value != null) || value === null)) {
                    return this.put$java_lang_Object$java_lang_Object(key, value);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractMap.prototype.put$java_lang_Object$java_lang_Object = function (key, value) {
                throw new java.lang.UnsupportedOperationException("Put not supported on this map");
            };
            AbstractMap.prototype.putAll = function (map) {
                javaemul.internal.InternalPreconditions.checkNotNull(map);
                for (var index168 = map.entrySet().iterator(); index168.hasNext();) {
                    var e = index168.next();
                    {
                        this.put(e.getKey(), e.getValue());
                    }
                }
            };
            AbstractMap.prototype.remove = function (key) {
                return AbstractMap.getEntryValueOrNull(this.implFindEntry(key, true));
            };
            AbstractMap.prototype.size = function () {
                return this.entrySet().size();
            };
            AbstractMap.prototype.toString$ = function () {
                var joiner = new java.util.StringJoiner(", ", "{", "}");
                for (var index169 = this.entrySet().iterator(); index169.hasNext();) {
                    var entry = index169.next();
                    {
                        joiner.add(this.toString(entry));
                    }
                }
                return joiner.toString();
            };
            AbstractMap.prototype.toString = function (entry) {
                var _this = this;
                if (((entry != null && entry["__interfaces"] != null && entry["__interfaces"].indexOf("java.util.Map.Entry") >= 0) || entry === null)) {
                    return (function () {
                        return _this.toString(entry.getKey()) + "=" + _this.toString(entry.getValue());
                    })();
                }
                else if (((entry != null) || entry === null)) {
                    return this.toString$java_lang_Object(entry);
                }
                else if (entry === undefined) {
                    return this.toString$();
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractMap.prototype.toString$java_lang_Object = function (o) {
                return o === this ? "(this Map)" : new String(o).toString();
            };
            AbstractMap.prototype.values = function () {
                return new AbstractMap.AbstractMap$1(this);
            };
            AbstractMap.getEntryKeyOrNull = function (entry) {
                return entry == null ? null : entry.getKey();
            };
            AbstractMap.getEntryValueOrNull = function (entry) {
                return entry == null ? null : entry.getValue();
            };
            AbstractMap.prototype.implFindEntry = function (key, remove) {
                for (var iter = this.entrySet().iterator(); iter.hasNext();) {
                    var entry = iter.next();
                    var k = entry.getKey();
                    if (java.util.Objects.equals(key, k)) {
                        if (remove) {
                            entry = new AbstractMap.SimpleEntry(entry.getKey(), entry.getValue());
                            iter.remove();
                        }
                        return entry;
                    }
                }
                return null;
            };
            return AbstractMap;
        }());
        util.AbstractMap = AbstractMap;
        var AbstractMap;
        (function (AbstractMap) {
            /**
             * Basic {@link Map.Entry} implementation used by {@link SimpleEntry} and
             * {@link SimpleImmutableEntry}.
             */
            var AbstractEntry = (function () {
                function AbstractEntry(key, value) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
                    this.key = key;
                    this.value = value;
                }
                AbstractEntry.prototype.getKey = function () {
                    return this.key;
                };
                AbstractEntry.prototype.getValue = function () {
                    return this.value;
                };
                AbstractEntry.prototype.setValue = function (value) {
                    var oldValue = this.value;
                    this.value = value;
                    return oldValue;
                };
                AbstractEntry.prototype.equals = function (other) {
                    if (!(other != null && other["__interfaces"] != null && other["__interfaces"].indexOf("java.util.Map.Entry") >= 0)) {
                        return false;
                    }
                    var entry = other;
                    return java.util.Objects.equals(this.key, entry.getKey()) && java.util.Objects.equals(this.value, entry.getValue());
                };
                /**
                 * Calculate the hash code using Sun's specified algorithm.
                 */
                AbstractEntry.prototype.hashCode = function () {
                    return java.util.Objects.hashCode(this.key) ^ java.util.Objects.hashCode(this.value);
                };
                AbstractEntry.prototype.toString = function () {
                    return this.key + "=" + this.value;
                };
                return AbstractEntry;
            }());
            AbstractMap.AbstractEntry = AbstractEntry;
            /**
             * A mutable {@link Map.Entry} shared by several {@link Map}
             * implementations.
             */
            var SimpleEntry = (function (_super) {
                __extends(SimpleEntry, _super);
                function SimpleEntry(key, value) {
                    if (((key != null) || key === null) && ((value != null) || value === null)) {
                        _super.call(this, key, value);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
                        (function () {
                        })();
                    }
                    else if (((key != null && key["__interfaces"] != null && key["__interfaces"].indexOf("java.util.Map.Entry") >= 0) || key === null) && value === undefined) {
                        var entry = key;
                        _super.call(this, entry.getKey(), entry.getValue());
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
                        (function () {
                        })();
                    }
                    else
                        throw new Error('invalid overload');
                }
                return SimpleEntry;
            }(AbstractMap.AbstractEntry));
            AbstractMap.SimpleEntry = SimpleEntry;
            /**
             * An immutable {@link Map.Entry} shared by several {@link Map}
             * implementations.
             */
            var SimpleImmutableEntry = (function (_super) {
                __extends(SimpleImmutableEntry, _super);
                function SimpleImmutableEntry(key, value) {
                    if (((key != null) || key === null) && ((value != null) || value === null)) {
                        _super.call(this, key, value);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
                        (function () {
                        })();
                    }
                    else if (((key != null && key["__interfaces"] != null && key["__interfaces"].indexOf("java.util.Map.Entry") >= 0) || key === null) && value === undefined) {
                        var entry = key;
                        _super.call(this, entry.getKey(), entry.getValue());
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
                        (function () {
                        })();
                    }
                    else
                        throw new Error('invalid overload');
                }
                SimpleImmutableEntry.prototype.setValue = function (value) {
                    throw new java.lang.UnsupportedOperationException();
                };
                return SimpleImmutableEntry;
            }(AbstractMap.AbstractEntry));
            AbstractMap.SimpleImmutableEntry = SimpleImmutableEntry;
            var AbstractMap$0 = (function (_super) {
                __extends(AbstractMap$0, _super);
                function AbstractMap$0(__parent) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Set", "java.lang.Iterable"] });
                    this.__parent = __parent;
                }
                AbstractMap$0.prototype.clear = function () {
                    this.__parent.clear();
                };
                AbstractMap$0.prototype.contains = function (key) {
                    return this.__parent.containsKey(key);
                };
                AbstractMap$0.prototype.iterator = function () {
                    var outerIter = this.__parent.entrySet().iterator();
                    return new AbstractMap$0.AbstractMap$0$0(this, outerIter);
                };
                AbstractMap$0.prototype.remove = function (key) {
                    if (this.__parent.containsKey(key)) {
                        this.__parent.remove(key);
                        return true;
                    }
                    return false;
                };
                AbstractMap$0.prototype.size = function () {
                    return this.__parent.size();
                };
                return AbstractMap$0;
            }(java.util.AbstractSet));
            AbstractMap.AbstractMap$0 = AbstractMap$0;
            var AbstractMap$0;
            (function (AbstractMap$0) {
                var AbstractMap$0$0 = (function () {
                    function AbstractMap$0$0(__parent, outerIter) {
                        this.outerIter = outerIter;
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                        this.__parent = __parent;
                    }
                    AbstractMap$0$0.prototype.forEachRemaining = function (consumer) {
                        javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                        while ((this.hasNext())) {
                            consumer(this.next());
                        }
                        ;
                    };
                    AbstractMap$0$0.prototype.hasNext = function () {
                        return this.outerIter.hasNext();
                    };
                    AbstractMap$0$0.prototype.next = function () {
                        var entry = this.outerIter.next();
                        return entry.getKey();
                    };
                    AbstractMap$0$0.prototype.remove = function () {
                        this.outerIter.remove();
                    };
                    return AbstractMap$0$0;
                }());
                AbstractMap$0.AbstractMap$0$0 = AbstractMap$0$0;
            })(AbstractMap$0 = AbstractMap.AbstractMap$0 || (AbstractMap.AbstractMap$0 = {}));
            var AbstractMap$1 = (function (_super) {
                __extends(AbstractMap$1, _super);
                function AbstractMap$1(__parent) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.lang.Iterable"] });
                    this.__parent = __parent;
                }
                AbstractMap$1.prototype.clear = function () {
                    this.__parent.clear();
                };
                AbstractMap$1.prototype.contains = function (value) {
                    return this.__parent.containsValue(value);
                };
                AbstractMap$1.prototype.iterator = function () {
                    var outerIter = this.__parent.entrySet().iterator();
                    return new AbstractMap$1.AbstractMap$1$0(this, outerIter);
                };
                AbstractMap$1.prototype.size = function () {
                    return this.__parent.size();
                };
                return AbstractMap$1;
            }(java.util.AbstractCollection));
            AbstractMap.AbstractMap$1 = AbstractMap$1;
            var AbstractMap$1;
            (function (AbstractMap$1) {
                var AbstractMap$1$0 = (function () {
                    function AbstractMap$1$0(__parent, outerIter) {
                        this.outerIter = outerIter;
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                        this.__parent = __parent;
                    }
                    AbstractMap$1$0.prototype.forEachRemaining = function (consumer) {
                        javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                        while ((this.hasNext())) {
                            consumer(this.next());
                        }
                        ;
                    };
                    AbstractMap$1$0.prototype.hasNext = function () {
                        return this.outerIter.hasNext();
                    };
                    AbstractMap$1$0.prototype.next = function () {
                        var entry = this.outerIter.next();
                        return entry.getValue();
                    };
                    AbstractMap$1$0.prototype.remove = function () {
                        this.outerIter.remove();
                    };
                    return AbstractMap$1$0;
                }());
                AbstractMap$1.AbstractMap$1$0 = AbstractMap$1$0;
            })(AbstractMap$1 = AbstractMap.AbstractMap$1 || (AbstractMap.AbstractMap$1 = {}));
        })(AbstractMap = util.AbstractMap || (util.AbstractMap = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Utility methods that operate on collections. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collections.html">[Sun
         * docs]</a>
         */
        var Collections = (function () {
            function Collections() {
            }
            Collections.EMPTY_LIST_$LI$ = function () { if (Collections.EMPTY_LIST == null)
                Collections.EMPTY_LIST = new Collections.EmptyList(); return Collections.EMPTY_LIST; };
            ;
            Collections.EMPTY_MAP_$LI$ = function () { if (Collections.EMPTY_MAP == null)
                Collections.EMPTY_MAP = new Collections.EmptyMap(); return Collections.EMPTY_MAP; };
            ;
            Collections.EMPTY_SET_$LI$ = function () { if (Collections.EMPTY_SET == null)
                Collections.EMPTY_SET = new Collections.EmptySet(); return Collections.EMPTY_SET; };
            ;
            Collections.addAll = function (c) {
                var a = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    a[_i - 1] = arguments[_i];
                }
                var result = false;
                for (var index170 = 0; index170 < a.length; index170++) {
                    var e = a[index170];
                    {
                        result = result || c.add(e);
                    }
                }
                return result;
            };
            Collections.asLifoQueue = function (deque) {
                return new Collections.LifoQueue(deque);
            };
            /**
             * Perform a binary search on a sorted List, using a user-specified comparison
             * function.
             *
             * <p>
             * Note: The GWT implementation differs from the JDK implementation in that it
             * does not do an iterator-based binary search for Lists that do not implement
             * RandomAccess.
             * </p>
             *
             * @param sortedList List to search
             * @param key value to search for
             * @param comparator comparision function, <code>null</code> indicates
             * <i>natural ordering</i> should be used.
             * @return the index of an element with a matching value, or a negative number
             * which is the index of the next larger value (or just past the end
             * of the array if the searched value is larger than all elements in
             * the array) minus 1 (to ensure error returns are negative)
             * @throws ClassCastException if <code>key</code> and
             * <code>sortedList</code>'s elements cannot be compared by
             * <code>comparator</code>.
             */
            Collections.binarySearch = function (sortedList, key, comparator) {
                if (comparator === void 0) { comparator = null; }
                if (comparator == null) {
                    comparator = java.util.Comparators.natural();
                }
                var low = 0;
                var high = sortedList.size() - 1;
                while ((low <= high)) {
                    var mid = low + ((high - low) >> 1);
                    var midVal = sortedList.get(mid);
                    var compareResult = comparator.compare(midVal, key);
                    if (compareResult < 0) {
                        low = mid + 1;
                    }
                    else if (compareResult > 0) {
                        high = mid - 1;
                    }
                    else {
                        return mid;
                    }
                }
                ;
                return -low - 1;
            };
            Collections.copy = function (dest, src) {
                if (src.size() > dest.size()) {
                    throw new java.lang.IndexOutOfBoundsException("src does not fit in dest");
                }
                var destIt = dest.listIterator();
                for (var index171 = src.iterator(); index171.hasNext();) {
                    var e = index171.next();
                    {
                        destIt.next();
                        destIt.set(e);
                    }
                }
            };
            Collections.disjoint = function (c1, c2) {
                var iterating = c1;
                var testing = c2;
                if ((c1 != null && c1["__interfaces"] != null && c1["__interfaces"].indexOf("java.util.Set") >= 0) && !(c2 != null && c2["__interfaces"] != null && c2["__interfaces"].indexOf("java.util.Set") >= 0)) {
                    iterating = c2;
                    testing = c1;
                }
                for (var index172 = iterating.iterator(); index172.hasNext();) {
                    var o = index172.next();
                    {
                        if (testing.contains(o)) {
                            return false;
                        }
                    }
                }
                return true;
            };
            Collections.emptyIterator = function () {
                return Collections.EmptyListIterator.INSTANCE_$LI$();
            };
            Collections.emptyList = function () {
                return Collections.EMPTY_LIST_$LI$();
            };
            Collections.emptyListIterator = function () {
                return Collections.EmptyListIterator.INSTANCE_$LI$();
            };
            Collections.emptyMap = function () {
                return Collections.EMPTY_MAP_$LI$();
            };
            Collections.emptySet = function () {
                return Collections.EMPTY_SET_$LI$();
            };
            Collections.enumeration = function (c) {
                var it = c.iterator();
                return new Collections.Collections$0(it);
            };
            Collections.fill = function (list, obj) {
                for (var it = list.listIterator(); it.hasNext();) {
                    it.next();
                    it.set(obj);
                }
            };
            Collections.frequency = function (c, o) {
                var count = 0;
                for (var index173 = c.iterator(); index173.hasNext();) {
                    var e = index173.next();
                    {
                        if (java.util.Objects.equals(o, e)) {
                            ++count;
                        }
                    }
                }
                return count;
            };
            Collections.list = function (e) {
                var arrayList = new java.util.ArrayList();
                while ((e.hasMoreElements())) {
                    arrayList.add(e.nextElement());
                }
                ;
                return arrayList;
            };
            Collections.max = function (coll, comp) {
                if (comp === void 0) { comp = null; }
                if (comp == null) {
                    comp = java.util.Comparators.natural();
                }
                var it = coll.iterator();
                var max = it.next();
                while ((it.hasNext())) {
                    var t = it.next();
                    if (comp.compare(t, max) > 0) {
                        max = t;
                    }
                }
                ;
                return max;
            };
            Collections.min = function (coll, comp) {
                if (comp === void 0) { comp = null; }
                return Collections.max(coll, Collections.reverseOrder(comp));
            };
            Collections.newSetFromMap = function (map) {
                javaemul.internal.InternalPreconditions.checkArgument(map.isEmpty(), "map is not empty");
                return new Collections.SetFromMap(map);
            };
            Collections.nCopies = function (n, o) {
                var list = new java.util.ArrayList();
                for (var i = 0; i < n; ++i) {
                    list.add(o);
                }
                return Collections.unmodifiableList(list);
            };
            Collections.replaceAll = function (list, oldVal, newVal) {
                var modified = false;
                for (var it = list.listIterator(); it.hasNext();) {
                    var t = it.next();
                    if (java.util.Objects.equals(t, oldVal)) {
                        it.set(newVal);
                        modified = true;
                    }
                }
                return modified;
            };
            Collections.reverse = function (l) {
                if (l != null && l["__interfaces"] != null && l["__interfaces"].indexOf("java.util.RandomAccess") >= 0) {
                    for (var iFront = 0, iBack = l.size() - 1; iFront < iBack; ++iFront, --iBack) {
                        Collections.swap(l, iFront, iBack);
                    }
                }
                else {
                    var head = l.listIterator();
                    var tail = l.listIterator(l.size());
                    while ((head.nextIndex() < tail.previousIndex())) {
                        var headElem = head.next();
                        var tailElem = tail.previous();
                        head.set(tailElem);
                        tail.set(headElem);
                    }
                    ;
                }
            };
            Collections.reverseOrder$ = function () {
                return Collections.ReverseComparator.INSTANCE_$LI$();
            };
            Collections.reverseOrder = function (cmp) {
                if (((cmp != null && cmp["__interfaces"] != null && cmp["__interfaces"].indexOf("java.util.Comparator") >= 0) || cmp === null)) {
                    return (function () {
                        if (cmp == null) {
                            return Collections.reverseOrder();
                        }
                        return new Collections.Collections$1(cmp);
                    })();
                }
                else if (cmp === undefined) {
                    return java.util.Collections.reverseOrder$();
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Rotates the elements in {@code list} by the distance {@code dist}
             * <p>
             * e.g. for a given list with elements [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], calling rotate(list, 3) or
             * rotate(list, -7) would modify the list to look like this: [8, 9, 0, 1, 2, 3, 4, 5, 6, 7]
             *
             * @param lst the list whose elements are to be rotated.
             * @param dist is the distance the list is rotated. This can be any valid integer. Negative values
             * rotate the list backwards.
             */
            Collections.rotate = function (lst, dist) {
                javaemul.internal.InternalPreconditions.checkNotNull(lst);
                var size = lst.size();
                if (size === 0) {
                    return;
                }
                var normdist = dist % size;
                if (normdist === 0) {
                    return;
                }
                if (normdist < 0) {
                    normdist += size;
                }
                if (lst != null && lst["__interfaces"] != null && lst["__interfaces"].indexOf("java.util.RandomAccess") >= 0) {
                    var list = lst;
                    var temp = list.get(0);
                    var index = 0;
                    var beginIndex = 0;
                    for (var i = 0; i < size; i++) {
                        index = (index + normdist) % size;
                        temp = list.set(index, temp);
                        if (index === beginIndex) {
                            index = ++beginIndex;
                            temp = list.get(beginIndex);
                        }
                    }
                }
                else {
                    var divideIndex = size - normdist;
                    var sublist1 = lst.subList(0, divideIndex);
                    var sublist2 = lst.subList(divideIndex, size);
                    Collections.reverse(sublist1);
                    Collections.reverse(sublist2);
                    Collections.reverse(lst);
                }
            };
            Collections.shuffle = function (list, rnd) {
                if (rnd === void 0) { rnd = Collections.RandomHolder.rnd_$LI$(); }
                if (list != null && list["__interfaces"] != null && list["__interfaces"].indexOf("java.util.RandomAccess") >= 0) {
                    for (var i = list.size() - 1; i >= 1; i--) {
                        Collections.swapImpl(list, i, rnd.nextInt(i + 1));
                    }
                }
                else {
                    var arr = list.toArray();
                    for (var i = arr.length - 1; i >= 1; i--) {
                        Collections.swapImpl(arr, i, rnd.nextInt(i + 1));
                    }
                    var it = list.listIterator();
                    for (var index174 = 0; index174 < arr.length; index174++) {
                        var e = arr[index174];
                        {
                            it.next();
                            it.set(e);
                        }
                    }
                }
            };
            Collections.singleton = function (o) {
                var set = new java.util.HashSet(1);
                set.add(o);
                return Collections.unmodifiableSet(set);
            };
            Collections.singletonList = function (o) {
                return new Collections.SingletonList(o);
            };
            Collections.singletonMap = function (key, value) {
                var map = new java.util.HashMap(1);
                map.put(key, value);
                return Collections.unmodifiableMap(map);
            };
            Collections.sort = function (target, c) {
                if (c === void 0) { c = null; }
                var x = target.toArray();
                java.util.Arrays.sort(x, c);
                Collections.replaceContents(target, x);
            };
            Collections.swap = function (list, i, j) {
                Collections.swapImpl(list, i, j);
            };
            Collections.unmodifiableCollection = function (coll) {
                return new Collections.UnmodifiableCollection(coll);
            };
            Collections.unmodifiableList = function (list) {
                return (list != null && list["__interfaces"] != null && list["__interfaces"].indexOf("java.util.RandomAccess") >= 0) ? new Collections.UnmodifiableRandomAccessList(list) : new Collections.UnmodifiableList(list);
            };
            Collections.unmodifiableMap = function (map) {
                return new Collections.UnmodifiableMap(map);
            };
            Collections.unmodifiableSet = function (set) {
                return new Collections.UnmodifiableSet(set);
            };
            Collections.unmodifiableSortedMap = function (map) {
                return new Collections.UnmodifiableSortedMap(map);
            };
            Collections.unmodifiableSortedSet = function (set) {
                return new Collections.UnmodifiableSortedSet(set);
            };
            /**
             * Computes hash code without preserving elements order (e.g. HashSet).
             */
            Collections.hashCode$java_lang_Iterable = function (collection) {
                var hashCode = 0;
                for (var index175 = collection.iterator(); index175.hasNext();) {
                    var e = index175.next();
                    {
                        hashCode = hashCode + java.util.Objects.hashCode(e);
                        hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                    }
                }
                return hashCode;
            };
            /**
             * Computes hash code preserving collection order (e.g. ArrayList).
             */
            Collections.hashCode = function (list) {
                if (((list != null && list["__interfaces"] != null && list["__interfaces"].indexOf("java.util.List") >= 0) || list === null)) {
                    return (function () {
                        var hashCode = 1;
                        for (var index176 = list.iterator(); index176.hasNext();) {
                            var e = index176.next();
                            {
                                hashCode = 31 * hashCode + java.util.Objects.hashCode(e);
                                hashCode = javaemul.internal.Coercions.ensureInt(hashCode);
                            }
                        }
                        return hashCode;
                    })();
                }
                else if (((list != null && list["__interfaces"] != null && list["__interfaces"].indexOf("java.lang.Iterable") >= 0) || list === null)) {
                    return java.util.Collections.hashCode$java_lang_Iterable(list);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Replace contents of a list from an array.
             *
             * @param <T> element type
             * @param target list to replace contents from an array
             * @param x an Object array which can contain only T instances
             */
            Collections.replaceContents = function (target, x) {
                var size = target.size();
                for (var i = 0; i < size; i++) {
                    target.set(i, x[i]);
                }
            };
            Collections.swapImpl = function (list, i, j) {
                if (((list != null && list["__interfaces"] != null && list["__interfaces"].indexOf("java.util.List") >= 0) || list === null) && ((typeof i === 'number') || i === null) && ((typeof j === 'number') || j === null)) {
                    return (function () {
                        var t = list.get(i);
                        list.set(i, list.get(j));
                        list.set(j, t);
                    })();
                }
                else if (((list != null && list instanceof Array) || list === null) && ((typeof i === 'number') || i === null) && ((typeof j === 'number') || j === null)) {
                    return java.util.Collections.swapImpl$java_lang_Object_A$int$int(list, i, j);
                }
                else
                    throw new Error('invalid overload');
            };
            Collections.swapImpl$java_lang_Object_A$int$int = function (a, i, j) {
                var obj = a[i];
                a[i] = a[j];
                a[j] = obj;
            };
            return Collections;
        }());
        util.Collections = Collections;
        var Collections;
        (function (Collections) {
            var LifoQueue = (function (_super) {
                __extends(LifoQueue, _super);
                function LifoQueue(deque) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Queue", "java.lang.Iterable", "java.io.Serializable"] });
                    this.deque = deque;
                }
                LifoQueue.prototype.iterator = function () {
                    return this.deque.iterator();
                };
                LifoQueue.prototype.offer = function (e) {
                    return this.deque.offerFirst(e);
                };
                LifoQueue.prototype.peek = function () {
                    return this.deque.peekFirst();
                };
                LifoQueue.prototype.poll = function () {
                    return this.deque.pollFirst();
                };
                LifoQueue.prototype.size = function () {
                    return this.deque.size();
                };
                return LifoQueue;
            }(java.util.AbstractQueue));
            Collections.LifoQueue = LifoQueue;
            var EmptyList = (function (_super) {
                __extends(EmptyList, _super);
                function EmptyList() {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess", "java.util.List", "java.util.Collection", "java.lang.Iterable", "java.io.Serializable"] });
                }
                EmptyList.prototype.contains = function (object) {
                    return false;
                };
                EmptyList.prototype.get = function (location) {
                    javaemul.internal.InternalPreconditions.checkElementIndex(location, 0);
                    return null;
                };
                EmptyList.prototype.iterator = function () {
                    return Collections.emptyIterator();
                };
                EmptyList.prototype.listIterator$ = function () {
                    return Collections.emptyListIterator();
                };
                EmptyList.prototype.size = function () {
                    return 0;
                };
                return EmptyList;
            }(java.util.AbstractList));
            Collections.EmptyList = EmptyList;
            var EmptyListIterator = (function () {
                function EmptyListIterator() {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator", "java.util.ListIterator"] });
                }
                EmptyListIterator.prototype.forEachRemaining = function (consumer) {
                    javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                    while ((this.hasNext())) {
                        consumer(this.next());
                    }
                    ;
                };
                EmptyListIterator.INSTANCE_$LI$ = function () { if (EmptyListIterator.INSTANCE == null)
                    EmptyListIterator.INSTANCE = new Collections.EmptyListIterator(); return EmptyListIterator.INSTANCE; };
                ;
                EmptyListIterator.prototype.add = function (o) {
                    throw new java.lang.UnsupportedOperationException();
                };
                EmptyListIterator.prototype.hasNext = function () {
                    return false;
                };
                EmptyListIterator.prototype.hasPrevious = function () {
                    return false;
                };
                EmptyListIterator.prototype.next = function () {
                    throw new java.util.NoSuchElementException();
                };
                EmptyListIterator.prototype.nextIndex = function () {
                    return 0;
                };
                EmptyListIterator.prototype.previous = function () {
                    throw new java.util.NoSuchElementException();
                };
                EmptyListIterator.prototype.previousIndex = function () {
                    return -1;
                };
                EmptyListIterator.prototype.remove = function () {
                    throw new java.lang.IllegalStateException();
                };
                EmptyListIterator.prototype.set = function (o) {
                    throw new java.lang.IllegalStateException();
                };
                return EmptyListIterator;
            }());
            Collections.EmptyListIterator = EmptyListIterator;
            var EmptySet = (function (_super) {
                __extends(EmptySet, _super);
                function EmptySet() {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Set", "java.lang.Iterable", "java.io.Serializable"] });
                }
                EmptySet.prototype.contains = function (object) {
                    return false;
                };
                EmptySet.prototype.iterator = function () {
                    return Collections.emptyIterator();
                };
                EmptySet.prototype.size = function () {
                    return 0;
                };
                return EmptySet;
            }(java.util.AbstractSet));
            Collections.EmptySet = EmptySet;
            var EmptyMap = (function (_super) {
                __extends(EmptyMap, _super);
                function EmptyMap() {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map", "java.io.Serializable"] });
                }
                EmptyMap.prototype.containsKey = function (key) {
                    return false;
                };
                EmptyMap.prototype.containsValue = function (value) {
                    return false;
                };
                EmptyMap.prototype.entrySet = function () {
                    return java.util.Collections.EMPTY_SET_$LI$();
                };
                EmptyMap.prototype.get = function (key) {
                    return null;
                };
                EmptyMap.prototype.keySet = function () {
                    return java.util.Collections.EMPTY_SET_$LI$();
                };
                EmptyMap.prototype.size = function () {
                    return 0;
                };
                EmptyMap.prototype.values = function () {
                    return java.util.Collections.EMPTY_LIST_$LI$();
                };
                return EmptyMap;
            }(java.util.AbstractMap));
            Collections.EmptyMap = EmptyMap;
            var ReverseComparator = (function () {
                function ReverseComparator() {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Comparator"] });
                }
                ReverseComparator.INSTANCE_$LI$ = function () { if (ReverseComparator.INSTANCE == null)
                    ReverseComparator.INSTANCE = new Collections.ReverseComparator(); return ReverseComparator.INSTANCE; };
                ;
                ReverseComparator.prototype.compare = function (o1, o2) {
                    if (((o1 != null && o1["__interfaces"] != null && o1["__interfaces"].indexOf("java.lang.Comparable") >= 0) || o1 === null) && ((o2 != null && o2["__interfaces"] != null && o2["__interfaces"].indexOf("java.lang.Comparable") >= 0) || o2 === null)) {
                        return (function () {
                            return o2.compareTo(o1);
                        })();
                    }
                    else
                        throw new Error('invalid overload');
                };
                return ReverseComparator;
            }());
            Collections.ReverseComparator = ReverseComparator;
            var SetFromMap = (function (_super) {
                __extends(SetFromMap, _super);
                function SetFromMap(map) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Set", "java.lang.Iterable", "java.io.Serializable"] });
                    this.backingMap = map;
                }
                SetFromMap.prototype.add = function (index, element) {
                    if (((index != null) || index === null) && element === undefined) {
                        return this.add$java_lang_Object(index);
                    }
                    else
                        throw new Error('invalid overload');
                };
                SetFromMap.prototype.add$java_lang_Object = function (e) {
                    return this.backingMap.put(e, javaemul.internal.BooleanHelper.TRUE) == null;
                };
                SetFromMap.prototype.clear = function () {
                    this.backingMap.clear();
                };
                SetFromMap.prototype.contains = function (o) {
                    return this.backingMap.containsKey(o);
                };
                SetFromMap.prototype.equals = function (o) {
                    return o === this || this.keySet().equals(o);
                };
                SetFromMap.prototype.hashCode = function () {
                    return this.keySet().hashCode();
                };
                SetFromMap.prototype.iterator = function () {
                    return this.keySet().iterator();
                };
                SetFromMap.prototype.remove = function (index) {
                    if (((index != null) || index === null)) {
                        return this.remove$java_lang_Object(index);
                    }
                    else
                        throw new Error('invalid overload');
                };
                SetFromMap.prototype.remove$java_lang_Object = function (o) {
                    return this.backingMap.remove(o) != null;
                };
                SetFromMap.prototype.size = function () {
                    return this.keySet().size();
                };
                SetFromMap.prototype.toString = function () {
                    return this.keySet().toString();
                };
                /**
                 * Lazy initialize keySet to avoid NPE after deserialization.
                 */
                SetFromMap.prototype.keySet = function () {
                    if (this.__keySet == null) {
                        this.__keySet = this.backingMap.keySet();
                    }
                    return this.__keySet;
                };
                return SetFromMap;
            }(java.util.AbstractSet));
            Collections.SetFromMap = SetFromMap;
            var SingletonList = (function (_super) {
                __extends(SingletonList, _super);
                function SingletonList(element) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.List", "java.util.Collection", "java.lang.Iterable", "java.io.Serializable"] });
                    this.element = element;
                }
                SingletonList.prototype.contains = function (item) {
                    return java.util.Objects.equals(this.element, item);
                };
                SingletonList.prototype.get = function (index) {
                    javaemul.internal.InternalPreconditions.checkElementIndex(index, 1);
                    return this.element;
                };
                SingletonList.prototype.size = function () {
                    return 1;
                };
                return SingletonList;
            }(java.util.AbstractList));
            Collections.SingletonList = SingletonList;
            var UnmodifiableCollection = (function () {
                function UnmodifiableCollection(coll) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.lang.Iterable"] });
                    this.coll = coll;
                }
                UnmodifiableCollection.prototype.forEach = function (action) {
                    javaemul.internal.InternalPreconditions.checkNotNull(action);
                    for (var index177 = this.iterator(); index177.hasNext();) {
                        var t = index177.next();
                        {
                            action(t);
                        }
                    }
                };
                UnmodifiableCollection.prototype.add = function (index, element) {
                    if (((index != null) || index === null) && element === undefined) {
                        return this.add$java_lang_Object(index);
                    }
                    else
                        throw new Error('invalid overload');
                };
                UnmodifiableCollection.prototype.add$java_lang_Object = function (o) {
                    throw new java.lang.UnsupportedOperationException();
                };
                UnmodifiableCollection.prototype.addAll = function (index, c) {
                    if (((index != null && index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0) || index === null) && c === undefined) {
                        return this.addAll$java_util_Collection(index);
                    }
                    else
                        throw new Error('invalid overload');
                };
                UnmodifiableCollection.prototype.addAll$java_util_Collection = function (c) {
                    throw new java.lang.UnsupportedOperationException();
                };
                UnmodifiableCollection.prototype.clear = function () {
                    throw new java.lang.UnsupportedOperationException();
                };
                UnmodifiableCollection.prototype.contains = function (o) {
                    return this.coll.contains(o);
                };
                UnmodifiableCollection.prototype.containsAll = function (c) {
                    return this.coll.containsAll(c);
                };
                UnmodifiableCollection.prototype.isEmpty = function () {
                    return this.coll.isEmpty();
                };
                UnmodifiableCollection.prototype.iterator = function () {
                    return new Collections.UnmodifiableCollectionIterator(this.coll.iterator());
                };
                UnmodifiableCollection.prototype.remove = function (index) {
                    if (((index != null) || index === null)) {
                        return this.remove$java_lang_Object(index);
                    }
                    else
                        throw new Error('invalid overload');
                };
                UnmodifiableCollection.prototype.remove$java_lang_Object = function (o) {
                    throw new java.lang.UnsupportedOperationException();
                };
                UnmodifiableCollection.prototype.removeAll = function (c) {
                    throw new java.lang.UnsupportedOperationException();
                };
                UnmodifiableCollection.prototype.retainAll = function (c) {
                    throw new java.lang.UnsupportedOperationException();
                };
                UnmodifiableCollection.prototype.size = function () {
                    return this.coll.size();
                };
                UnmodifiableCollection.prototype.toArray$ = function () {
                    return this.coll.toArray();
                };
                UnmodifiableCollection.prototype.toArray = function (a) {
                    var _this = this;
                    if (((a != null && a instanceof Array) || a === null)) {
                        return (function () {
                            return _this.coll.toArray(a);
                        })();
                    }
                    else if (a === undefined) {
                        return this.toArray$();
                    }
                    else
                        throw new Error('invalid overload');
                };
                UnmodifiableCollection.prototype.toString = function () {
                    return this.coll.toString();
                };
                return UnmodifiableCollection;
            }());
            Collections.UnmodifiableCollection = UnmodifiableCollection;
            var UnmodifiableList = (function (_super) {
                __extends(UnmodifiableList, _super);
                function UnmodifiableList(list) {
                    _super.call(this, list);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.List", "java.util.Collection", "java.lang.Iterable"] });
                    this.list = list;
                }
                UnmodifiableList.prototype.forEach = function (action) {
                    javaemul.internal.InternalPreconditions.checkNotNull(action);
                    for (var index178 = this.iterator(); index178.hasNext();) {
                        var t = index178.next();
                        {
                            action(t);
                        }
                    }
                };
                UnmodifiableList.prototype.add = function (index, element) {
                    if (((typeof index === 'number') || index === null) && ((element != null) || element === null)) {
                        return (function () {
                            throw new java.lang.UnsupportedOperationException();
                        })();
                    }
                    else if (((index != null) || index === null) && element === undefined) {
                        return this.add$java_lang_Object(index);
                    }
                    else
                        throw new Error('invalid overload');
                };
                UnmodifiableList.prototype.addAll = function (index, c) {
                    if (((typeof index === 'number') || index === null) && ((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Collection") >= 0) || c === null)) {
                        return (function () {
                            throw new java.lang.UnsupportedOperationException();
                        })();
                    }
                    else if (((index != null && index["__interfaces"] != null && index["__interfaces"].indexOf("java.util.Collection") >= 0) || index === null) && c === undefined) {
                        return this.addAll$java_util_Collection(index);
                    }
                    else
                        throw new Error('invalid overload');
                };
                UnmodifiableList.prototype.equals = function (o) {
                    return this.list.equals(o);
                };
                UnmodifiableList.prototype.get = function (index) {
                    return this.list.get(index);
                };
                UnmodifiableList.prototype.hashCode = function () {
                    return this.list.hashCode();
                };
                UnmodifiableList.prototype.indexOf = function (o, index) {
                    if (((o != null) || o === null) && index === undefined) {
                        return this.indexOf$java_lang_Object(o);
                    }
                    else
                        throw new Error('invalid overload');
                };
                UnmodifiableList.prototype.indexOf$java_lang_Object = function (o) {
                    return this.list.indexOf(o);
                };
                UnmodifiableList.prototype.isEmpty = function () {
                    return this.list.isEmpty();
                };
                UnmodifiableList.prototype.lastIndexOf = function (o, index) {
                    if (((o != null) || o === null) && index === undefined) {
                        return this.lastIndexOf$java_lang_Object(o);
                    }
                    else
                        throw new Error('invalid overload');
                };
                UnmodifiableList.prototype.lastIndexOf$java_lang_Object = function (o) {
                    return this.list.lastIndexOf(o);
                };
                UnmodifiableList.prototype.listIterator$ = function () {
                    return this.listIterator(0);
                };
                UnmodifiableList.prototype.listIterator = function (from) {
                    var _this = this;
                    if (((typeof from === 'number') || from === null)) {
                        return (function () {
                            return new Collections.UnmodifiableListIterator(_this.list.listIterator(from));
                        })();
                    }
                    else if (from === undefined) {
                        return this.listIterator$();
                    }
                    else
                        throw new Error('invalid overload');
                };
                UnmodifiableList.prototype.remove = function (index) {
                    if (((typeof index === 'number') || index === null)) {
                        return (function () {
                            throw new java.lang.UnsupportedOperationException();
                        })();
                    }
                    else if (((index != null) || index === null)) {
                        return this.remove$java_lang_Object(index);
                    }
                    else
                        throw new Error('invalid overload');
                };
                UnmodifiableList.prototype.set = function (index, element) {
                    throw new java.lang.UnsupportedOperationException();
                };
                UnmodifiableList.prototype.subList = function (fromIndex, toIndex) {
                    return new Collections.UnmodifiableList(this.list.subList(fromIndex, toIndex));
                };
                return UnmodifiableList;
            }(Collections.UnmodifiableCollection));
            Collections.UnmodifiableList = UnmodifiableList;
            var UnmodifiableRandomAccessList = (function (_super) {
                __extends(UnmodifiableRandomAccessList, _super);
                function UnmodifiableRandomAccessList(list) {
                    _super.call(this, list);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.RandomAccess", "java.util.List", "java.util.Collection", "java.lang.Iterable"] });
                }
                return UnmodifiableRandomAccessList;
            }(Collections.UnmodifiableList));
            Collections.UnmodifiableRandomAccessList = UnmodifiableRandomAccessList;
            var UnmodifiableSet = (function (_super) {
                __extends(UnmodifiableSet, _super);
                function UnmodifiableSet(set) {
                    _super.call(this, set);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Set", "java.lang.Iterable"] });
                }
                UnmodifiableSet.prototype.forEach = function (action) {
                    javaemul.internal.InternalPreconditions.checkNotNull(action);
                    for (var index179 = this.iterator(); index179.hasNext();) {
                        var t = index179.next();
                        {
                            action(t);
                        }
                    }
                };
                UnmodifiableSet.prototype.equals = function (o) {
                    return this.coll.equals(o);
                };
                UnmodifiableSet.prototype.hashCode = function () {
                    return this.coll.hashCode();
                };
                return UnmodifiableSet;
            }(Collections.UnmodifiableCollection));
            Collections.UnmodifiableSet = UnmodifiableSet;
            var UnmodifiableMap = (function () {
                function UnmodifiableMap(map) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map"] });
                    this.map = map;
                }
                UnmodifiableMap.prototype.clear = function () {
                    throw new java.lang.UnsupportedOperationException();
                };
                UnmodifiableMap.prototype.containsKey = function (key) {
                    return this.map.containsKey(key);
                };
                UnmodifiableMap.prototype.containsValue = function (val) {
                    return this.map.containsValue(val);
                };
                UnmodifiableMap.prototype.entrySet = function () {
                    if (this.__entrySet == null) {
                        this.__entrySet = new UnmodifiableMap.UnmodifiableEntrySet(this.map.entrySet());
                    }
                    return this.__entrySet;
                };
                UnmodifiableMap.prototype.equals = function (o) {
                    return this.map.equals(o);
                };
                UnmodifiableMap.prototype.get = function (key) {
                    return this.map.get(key);
                };
                UnmodifiableMap.prototype.hashCode = function () {
                    return this.map.hashCode();
                };
                UnmodifiableMap.prototype.isEmpty = function () {
                    return this.map.isEmpty();
                };
                UnmodifiableMap.prototype.keySet = function () {
                    if (this.__keySet == null) {
                        this.__keySet = new Collections.UnmodifiableSet(this.map.keySet());
                    }
                    return this.__keySet;
                };
                UnmodifiableMap.prototype.put = function (key, value) {
                    throw new java.lang.UnsupportedOperationException();
                };
                UnmodifiableMap.prototype.putAll = function (t) {
                    throw new java.lang.UnsupportedOperationException();
                };
                UnmodifiableMap.prototype.remove = function (key) {
                    throw new java.lang.UnsupportedOperationException();
                };
                UnmodifiableMap.prototype.size = function () {
                    return this.map.size();
                };
                UnmodifiableMap.prototype.toString = function () {
                    return this.map.toString();
                };
                UnmodifiableMap.prototype.values = function () {
                    if (this.__values == null) {
                        this.__values = new Collections.UnmodifiableCollection(this.map.values());
                    }
                    return this.__values;
                };
                return UnmodifiableMap;
            }());
            Collections.UnmodifiableMap = UnmodifiableMap;
            var UnmodifiableMap;
            (function (UnmodifiableMap) {
                var UnmodifiableEntrySet = (function (_super) {
                    __extends(UnmodifiableEntrySet, _super);
                    function UnmodifiableEntrySet(s) {
                        _super.call(this, s);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Set", "java.lang.Iterable"] });
                    }
                    UnmodifiableEntrySet.prototype.contains = function (o) {
                        return this.coll.contains(o);
                    };
                    UnmodifiableEntrySet.prototype.containsAll = function (o) {
                        return this.coll.containsAll(o);
                    };
                    UnmodifiableEntrySet.prototype.iterator = function () {
                        var it = this.coll.iterator();
                        return new UnmodifiableEntrySet.UnmodifiableEntrySet$0(this, it);
                    };
                    UnmodifiableEntrySet.prototype.toArray$ = function () {
                        var array = _super.prototype.toArray.call(this);
                        this.wrap(array, array.length);
                        return array;
                    };
                    UnmodifiableEntrySet.prototype.toArray = function (a) {
                        var _this = this;
                        if (((a != null && a instanceof Array) || a === null)) {
                            return (function () {
                                var result = _super.prototype.toArray.call(_this, a);
                                _this.wrap(result, _this.coll.size());
                                return result;
                            })();
                        }
                        else if (a === undefined) {
                            return this.toArray$();
                        }
                        else
                            throw new Error('invalid overload');
                    };
                    /**
                     * Wrap an array of Map.Entries as UnmodifiableEntries.
                     *
                     * @param array array to wrap
                     * @param size number of entries to wrap
                     */
                    UnmodifiableEntrySet.prototype.wrap = function (array, size) {
                        for (var i = 0; i < size; ++i) {
                            array[i] = new UnmodifiableEntrySet.UnmodifiableEntry(array[i]);
                        }
                    };
                    return UnmodifiableEntrySet;
                }(Collections.UnmodifiableSet));
                UnmodifiableMap.UnmodifiableEntrySet = UnmodifiableEntrySet;
                var UnmodifiableEntrySet;
                (function (UnmodifiableEntrySet) {
                    var UnmodifiableEntry = (function () {
                        function UnmodifiableEntry(entry) {
                            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
                            this.entry = entry;
                        }
                        UnmodifiableEntry.prototype.equals = function (o) {
                            return this.entry.equals(o);
                        };
                        UnmodifiableEntry.prototype.getKey = function () {
                            return this.entry.getKey();
                        };
                        UnmodifiableEntry.prototype.getValue = function () {
                            return this.entry.getValue();
                        };
                        UnmodifiableEntry.prototype.hashCode = function () {
                            return this.entry.hashCode();
                        };
                        UnmodifiableEntry.prototype.setValue = function (value) {
                            throw new java.lang.UnsupportedOperationException();
                        };
                        UnmodifiableEntry.prototype.toString = function () {
                            return this.entry.toString();
                        };
                        return UnmodifiableEntry;
                    }());
                    UnmodifiableEntrySet.UnmodifiableEntry = UnmodifiableEntry;
                    var UnmodifiableEntrySet$0 = (function () {
                        function UnmodifiableEntrySet$0(__parent, it) {
                            this.it = it;
                            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                            this.__parent = __parent;
                        }
                        UnmodifiableEntrySet$0.prototype.forEachRemaining = function (consumer) {
                            javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                            while ((this.hasNext())) {
                                consumer(this.next());
                            }
                            ;
                        };
                        UnmodifiableEntrySet$0.prototype.hasNext = function () {
                            return this.it.hasNext();
                        };
                        UnmodifiableEntrySet$0.prototype.next = function () {
                            return new UnmodifiableEntrySet.UnmodifiableEntry(this.it.next());
                        };
                        UnmodifiableEntrySet$0.prototype.remove = function () {
                            throw new java.lang.UnsupportedOperationException();
                        };
                        return UnmodifiableEntrySet$0;
                    }());
                    UnmodifiableEntrySet.UnmodifiableEntrySet$0 = UnmodifiableEntrySet$0;
                })(UnmodifiableEntrySet = UnmodifiableMap.UnmodifiableEntrySet || (UnmodifiableMap.UnmodifiableEntrySet = {}));
            })(UnmodifiableMap = Collections.UnmodifiableMap || (Collections.UnmodifiableMap = {}));
            var UnmodifiableSortedMap = (function (_super) {
                __extends(UnmodifiableSortedMap, _super);
                function UnmodifiableSortedMap(sortedMap) {
                    _super.call(this, sortedMap);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map", "java.util.SortedMap"] });
                    this.sortedMap = sortedMap;
                }
                UnmodifiableSortedMap.prototype.comparator = function () {
                    return this.sortedMap.comparator();
                };
                UnmodifiableSortedMap.prototype.equals = function (o) {
                    return this.sortedMap.equals(o);
                };
                UnmodifiableSortedMap.prototype.firstKey = function () {
                    return this.sortedMap.firstKey();
                };
                UnmodifiableSortedMap.prototype.hashCode = function () {
                    return this.sortedMap.hashCode();
                };
                UnmodifiableSortedMap.prototype.headMap = function (toKey, inclusive) {
                    if (((toKey != null) || toKey === null) && inclusive === undefined) {
                        return this.headMap$java_lang_Object(toKey);
                    }
                    else
                        throw new Error('invalid overload');
                };
                UnmodifiableSortedMap.prototype.headMap$java_lang_Object = function (toKey) {
                    return new Collections.UnmodifiableSortedMap(this.sortedMap.headMap(toKey));
                };
                UnmodifiableSortedMap.prototype.lastKey = function () {
                    return this.sortedMap.lastKey();
                };
                UnmodifiableSortedMap.prototype.subMap = function (fromKey, fromInclusive, toKey, toInclusive) {
                    if (((fromKey != null) || fromKey === null) && ((fromInclusive != null) || fromInclusive === null) && toKey === undefined && toInclusive === undefined) {
                        return this.subMap$java_lang_Object$java_lang_Object(fromKey, fromInclusive);
                    }
                    else
                        throw new Error('invalid overload');
                };
                UnmodifiableSortedMap.prototype.subMap$java_lang_Object$java_lang_Object = function (fromKey, toKey) {
                    return new Collections.UnmodifiableSortedMap(this.sortedMap.subMap(fromKey, toKey));
                };
                UnmodifiableSortedMap.prototype.tailMap = function (fromKey, inclusive) {
                    if (((fromKey != null) || fromKey === null) && inclusive === undefined) {
                        return this.tailMap$java_lang_Object(fromKey);
                    }
                    else
                        throw new Error('invalid overload');
                };
                UnmodifiableSortedMap.prototype.tailMap$java_lang_Object = function (fromKey) {
                    return new Collections.UnmodifiableSortedMap(this.sortedMap.tailMap(fromKey));
                };
                return UnmodifiableSortedMap;
            }(Collections.UnmodifiableMap));
            Collections.UnmodifiableSortedMap = UnmodifiableSortedMap;
            var UnmodifiableSortedSet = (function (_super) {
                __extends(UnmodifiableSortedSet, _super);
                function UnmodifiableSortedSet(sortedSet) {
                    _super.call(this, sortedSet);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.SortedSet", "java.util.Collection", "java.util.Set", "java.lang.Iterable"] });
                    this.sortedSet = sortedSet;
                }
                UnmodifiableSortedSet.prototype.forEach = function (action) {
                    javaemul.internal.InternalPreconditions.checkNotNull(action);
                    for (var index180 = this.iterator(); index180.hasNext();) {
                        var t = index180.next();
                        {
                            action(t);
                        }
                    }
                };
                UnmodifiableSortedSet.prototype.comparator = function () {
                    return this.sortedSet.comparator();
                };
                UnmodifiableSortedSet.prototype.equals = function (o) {
                    return this.sortedSet.equals(o);
                };
                UnmodifiableSortedSet.prototype.first = function () {
                    return this.sortedSet.first();
                };
                UnmodifiableSortedSet.prototype.hashCode = function () {
                    return this.sortedSet.hashCode();
                };
                UnmodifiableSortedSet.prototype.headSet = function (toElement, inclusive) {
                    if (((toElement != null) || toElement === null) && inclusive === undefined) {
                        return this.headSet$java_lang_Object(toElement);
                    }
                    else
                        throw new Error('invalid overload');
                };
                UnmodifiableSortedSet.prototype.headSet$java_lang_Object = function (toElement) {
                    return new Collections.UnmodifiableSortedSet(this.sortedSet.headSet(toElement));
                };
                UnmodifiableSortedSet.prototype.last = function () {
                    return this.sortedSet.last();
                };
                UnmodifiableSortedSet.prototype.subSet = function (fromElement, fromInclusive, toElement, toInclusive) {
                    if (((fromElement != null) || fromElement === null) && ((fromInclusive != null) || fromInclusive === null) && toElement === undefined && toInclusive === undefined) {
                        return this.subSet$java_lang_Object$java_lang_Object(fromElement, fromInclusive);
                    }
                    else
                        throw new Error('invalid overload');
                };
                UnmodifiableSortedSet.prototype.subSet$java_lang_Object$java_lang_Object = function (fromElement, toElement) {
                    return new Collections.UnmodifiableSortedSet(this.sortedSet.subSet(fromElement, toElement));
                };
                UnmodifiableSortedSet.prototype.tailSet = function (fromElement, inclusive) {
                    if (((fromElement != null) || fromElement === null) && inclusive === undefined) {
                        return this.tailSet$java_lang_Object(fromElement);
                    }
                    else
                        throw new Error('invalid overload');
                };
                UnmodifiableSortedSet.prototype.tailSet$java_lang_Object = function (fromElement) {
                    return new Collections.UnmodifiableSortedSet(this.sortedSet.tailSet(fromElement));
                };
                return UnmodifiableSortedSet;
            }(Collections.UnmodifiableSet));
            Collections.UnmodifiableSortedSet = UnmodifiableSortedSet;
            var UnmodifiableCollectionIterator = (function () {
                function UnmodifiableCollectionIterator(it) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                    this.it = it;
                }
                UnmodifiableCollectionIterator.prototype.forEachRemaining = function (consumer) {
                    javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                    while ((this.hasNext())) {
                        consumer(this.next());
                    }
                    ;
                };
                UnmodifiableCollectionIterator.prototype.hasNext = function () {
                    return this.it.hasNext();
                };
                UnmodifiableCollectionIterator.prototype.next = function () {
                    return this.it.next();
                };
                UnmodifiableCollectionIterator.prototype.remove = function () {
                    throw new java.lang.UnsupportedOperationException();
                };
                return UnmodifiableCollectionIterator;
            }());
            Collections.UnmodifiableCollectionIterator = UnmodifiableCollectionIterator;
            var UnmodifiableListIterator = (function (_super) {
                __extends(UnmodifiableListIterator, _super);
                function UnmodifiableListIterator(lit) {
                    _super.call(this, lit);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator", "java.util.ListIterator"] });
                    this.lit = lit;
                }
                UnmodifiableListIterator.prototype.forEachRemaining = function (consumer) {
                    javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                    while ((this.hasNext())) {
                        consumer(this.next());
                    }
                    ;
                };
                UnmodifiableListIterator.prototype.add = function (o) {
                    throw new java.lang.UnsupportedOperationException();
                };
                UnmodifiableListIterator.prototype.hasPrevious = function () {
                    return this.lit.hasPrevious();
                };
                UnmodifiableListIterator.prototype.nextIndex = function () {
                    return this.lit.nextIndex();
                };
                UnmodifiableListIterator.prototype.previous = function () {
                    return this.lit.previous();
                };
                UnmodifiableListIterator.prototype.previousIndex = function () {
                    return this.lit.previousIndex();
                };
                UnmodifiableListIterator.prototype.set = function (o) {
                    throw new java.lang.UnsupportedOperationException();
                };
                return UnmodifiableListIterator;
            }(Collections.UnmodifiableCollectionIterator));
            Collections.UnmodifiableListIterator = UnmodifiableListIterator;
            var RandomHolder = (function () {
                function RandomHolder() {
                }
                RandomHolder.rnd_$LI$ = function () { if (RandomHolder.rnd == null)
                    RandomHolder.rnd = new java.util.Random(); return RandomHolder.rnd; };
                ;
                return RandomHolder;
            }());
            Collections.RandomHolder = RandomHolder;
            var Collections$0 = (function () {
                function Collections$0(it) {
                    this.it = it;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Enumeration"] });
                }
                Collections$0.prototype.hasMoreElements = function () {
                    return this.it.hasNext();
                };
                Collections$0.prototype.nextElement = function () {
                    return this.it.next();
                };
                return Collections$0;
            }());
            Collections.Collections$0 = Collections$0;
            var Collections$1 = (function () {
                function Collections$1(cmp) {
                    this.cmp = cmp;
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Comparator"] });
                }
                Collections$1.prototype.compare = function (t1, t2) {
                    return this.cmp.compare(t2, t1);
                };
                return Collections$1;
            }());
            Collections.Collections$1 = Collections$1;
        })(Collections = util.Collections || (util.Collections = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Implementation of Map interface based on a hash table. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/HashMap.html">[Sun
         * docs]</a>
         *
         * @param <K> key type
         * @param <V> value type
         */
        var AbstractHashMap = (function (_super) {
            __extends(AbstractHashMap, _super);
            function AbstractHashMap(ignored, alsoIgnored) {
                var _this = this;
                if (((typeof ignored === 'number') || ignored === null) && ((typeof alsoIgnored === 'number') || alsoIgnored === null)) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map"] });
                    (function () {
                        javaemul.internal.InternalPreconditions.checkArgument(ignored >= 0, "Negative initial capacity");
                        javaemul.internal.InternalPreconditions.checkArgument(alsoIgnored >= 0, "Non-positive load factor");
                        _this.reset();
                    })();
                }
                else if (((ignored != null && ignored["__interfaces"] != null && ignored["__interfaces"].indexOf("java.util.Map") >= 0) || ignored === null) && alsoIgnored === undefined) {
                    var toBeCopied = ignored;
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map"] });
                    (function () {
                        _this.reset();
                        _this.putAll(toBeCopied);
                    })();
                }
                else if (((typeof ignored === 'number') || ignored === null) && alsoIgnored === undefined) {
                    {
                        var alsoIgnored = 0;
                        _super.call(this);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map"] });
                        (function () {
                            javaemul.internal.InternalPreconditions.checkArgument(ignored >= 0, "Negative initial capacity");
                            javaemul.internal.InternalPreconditions.checkArgument(alsoIgnored >= 0, "Non-positive load factor");
                            _this.reset();
                        })();
                    }
                    (function () {
                    })();
                }
                else if (ignored === undefined && alsoIgnored === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map"] });
                    (function () {
                        _this.reset();
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            AbstractHashMap.prototype.clear = function () {
                this.reset();
            };
            AbstractHashMap.prototype.reset = function () {
                this.hashCodeMap = new java.util.InternalHashCodeMap(this);
                this.stringMap = new java.util.InternalStringMap(this);
                java.util.ConcurrentModificationDetector.structureChanged(this);
            };
            AbstractHashMap.prototype.containsKey = function (key) {
                return (typeof key === 'string') ? this.hasStringValue(javaemul.internal.JsUtils.unsafeCastToString(key)) : this.hasHashValue(key);
            };
            AbstractHashMap.prototype.containsValue = function (value) {
                return this._containsValue(value, this.stringMap) || this._containsValue(value, this.hashCodeMap);
            };
            AbstractHashMap.prototype._containsValue = function (value, entries) {
                for (var index181 = entries.iterator(); index181.hasNext();) {
                    var entry = index181.next();
                    {
                        if (this._equals(value, entry.getValue())) {
                            return true;
                        }
                    }
                }
                return false;
            };
            AbstractHashMap.prototype.entrySet = function () {
                return new AbstractHashMap.EntrySet(this);
            };
            AbstractHashMap.prototype.get = function (key) {
                return (typeof key === 'string') ? this.getStringValue(javaemul.internal.JsUtils.unsafeCastToString(key)) : this.getHashValue(key);
            };
            AbstractHashMap.prototype.put = function (key, value) {
                return (typeof key === 'string') ? this.putStringValue(javaemul.internal.JsUtils.unsafeCastToString(key), value) : this.putHashValue(key, value);
            };
            AbstractHashMap.prototype.remove = function (key) {
                return (typeof key === 'string') ? this.removeStringValue(javaemul.internal.JsUtils.unsafeCastToString(key)) : this.removeHashValue(key);
            };
            AbstractHashMap.prototype.size = function () {
                return this.hashCodeMap.size() + this.stringMap.getSize();
            };
            /**
             * Returns the Map.Entry whose key is Object equal to <code>key</code>,
             * provided that <code>key</code>'s hash code is <code>hashCode</code>;
             * or <code>null</code> if no such Map.Entry exists at the specified
             * hashCode.
             */
            AbstractHashMap.prototype.getHashValue = function (key) {
                return util.AbstractMap.getEntryValueOrNull(this.hashCodeMap.getEntry(key));
            };
            /**
             * Returns the value for the given key in the stringMap. Returns
             * <code>null</code> if the specified key does not exist.
             */
            AbstractHashMap.prototype.getStringValue = function (key) {
                return key == null ? this.getHashValue(null) : this.stringMap.get(key);
            };
            /**
             * Returns true if the a key exists in the hashCodeMap that is Object equal to
             * <code>key</code>, provided that <code>key</code>'s hash code is
             * <code>hashCode</code>.
             */
            AbstractHashMap.prototype.hasHashValue = function (key) {
                return this.hashCodeMap.getEntry(key) != null;
            };
            /**
             * Returns true if the given key exists in the stringMap.
             */
            AbstractHashMap.prototype.hasStringValue = function (key) {
                return key == null ? this.hasHashValue(null) : this.stringMap.contains(key);
            };
            /**
             * Sets the specified key to the specified value in the hashCodeMap. Returns
             * the value previously at that key. Returns <code>null</code> if the
             * specified key did not exist.
             */
            AbstractHashMap.prototype.putHashValue = function (key, value) {
                return this.hashCodeMap.put(key, value);
            };
            /**
             * Sets the specified key to the specified value in the stringMap. Returns the
             * value previously at that key. Returns <code>null</code> if the specified
             * key did not exist.
             */
            AbstractHashMap.prototype.putStringValue = function (key, value) {
                return key == null ? this.putHashValue(null, value) : this.stringMap.put(key, value);
            };
            /**
             * Removes the pair whose key is Object equal to <code>key</code> from
             * <code>hashCodeMap</code>, provided that <code>key</code>'s hash code
             * is <code>hashCode</code>. Returns the value that was associated with the
             * removed key, or null if no such key existed.
             */
            AbstractHashMap.prototype.removeHashValue = function (key) {
                return this.hashCodeMap.remove(key);
            };
            /**
             * Removes the specified key from the stringMap and returns the value that was
             * previously there. Returns <code>null</code> if the specified key does not
             * exist.
             */
            AbstractHashMap.prototype.removeStringValue = function (key) {
                return key == null ? this.removeHashValue(null) : this.stringMap.remove(key);
            };
            return AbstractHashMap;
        }(java.util.AbstractMap));
        util.AbstractHashMap = AbstractHashMap;
        var AbstractHashMap;
        (function (AbstractHashMap) {
            var EntrySet = (function (_super) {
                __extends(EntrySet, _super);
                function EntrySet(__parent) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Set", "java.lang.Iterable"] });
                    this.__parent = __parent;
                }
                EntrySet.prototype.clear = function () {
                    this.__parent.clear();
                };
                EntrySet.prototype.contains = function (o) {
                    if (o != null && o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.Map.Entry") >= 0) {
                        return this.__parent.containsEntry(o);
                    }
                    return false;
                };
                EntrySet.prototype.iterator = function () {
                    return new AbstractHashMap.EntrySetIterator(this.__parent);
                };
                EntrySet.prototype.remove = function (index) {
                    if (((index != null) || index === null)) {
                        return this.remove$java_lang_Object(index);
                    }
                    else
                        throw new Error('invalid overload');
                };
                EntrySet.prototype.remove$java_lang_Object = function (entry) {
                    if (this.contains(entry)) {
                        var key = entry.getKey();
                        this.__parent.remove(key);
                        return true;
                    }
                    return false;
                };
                EntrySet.prototype.size = function () {
                    return this.__parent.size();
                };
                return EntrySet;
            }(java.util.AbstractSet));
            AbstractHashMap.EntrySet = EntrySet;
            /**
             * Iterator for <code>EntrySet</code>.
             */
            var EntrySetIterator = (function () {
                function EntrySetIterator(__parent) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                    this.__parent = __parent;
                    this.__hasNext = false;
                    this.stringMapEntries = this.__parent.stringMap.iterator();
                    this.current = this.stringMapEntries;
                    this.__hasNext = this.computeHasNext();
                    java.util.ConcurrentModificationDetector.recordLastKnownStructure(this.__parent, this);
                }
                EntrySetIterator.prototype.forEachRemaining = function (consumer) {
                    javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                    while ((this.hasNext())) {
                        consumer(this.next());
                    }
                    ;
                };
                EntrySetIterator.prototype.hasNext = function () {
                    return this.__hasNext;
                };
                EntrySetIterator.prototype.computeHasNext = function () {
                    if (this.current.hasNext()) {
                        return true;
                    }
                    if (this.current !== this.stringMapEntries) {
                        return false;
                    }
                    this.current = this.__parent.hashCodeMap.iterator();
                    return this.current.hasNext();
                };
                EntrySetIterator.prototype.next = function () {
                    java.util.ConcurrentModificationDetector.checkStructuralChange(this.__parent, this);
                    javaemul.internal.InternalPreconditions.checkElement(this.hasNext());
                    this.last = this.current;
                    var rv = this.current.next();
                    this.__hasNext = this.computeHasNext();
                    return rv;
                };
                EntrySetIterator.prototype.remove = function () {
                    javaemul.internal.InternalPreconditions.checkState(this.last != null);
                    java.util.ConcurrentModificationDetector.checkStructuralChange(this.__parent, this);
                    this.last.remove();
                    this.last = null;
                    this.__hasNext = this.computeHasNext();
                    java.util.ConcurrentModificationDetector.recordLastKnownStructure(this.__parent, this);
                };
                return EntrySetIterator;
            }());
            AbstractHashMap.EntrySetIterator = EntrySetIterator;
        })(AbstractHashMap = util.AbstractHashMap || (util.AbstractHashMap = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Skeletal implementation of a NavigableMap.
         */
        var AbstractNavigableMap = (function (_super) {
            __extends(AbstractNavigableMap, _super);
            function AbstractNavigableMap() {
                _super.call(this);
                Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map", "java.util.NavigableMap", "java.util.SortedMap"] });
            }
            AbstractNavigableMap.copyOf = function (entry) {
                return entry == null ? null : new util.AbstractMap.SimpleImmutableEntry(entry);
            };
            AbstractNavigableMap.getKeyOrNSE = function (entry) {
                if (entry == null) {
                    throw new java.util.NoSuchElementException();
                }
                return entry.getKey();
            };
            AbstractNavigableMap.prototype.ceilingEntry = function (key) {
                return AbstractNavigableMap.copyOf(this.getCeilingEntry(key));
            };
            AbstractNavigableMap.prototype.ceilingKey = function (key) {
                return util.AbstractMap.getEntryKeyOrNull(this.getCeilingEntry(key));
            };
            AbstractNavigableMap.prototype.containsKey = function (k) {
                var key = k;
                return this.getEntry(key) != null;
            };
            AbstractNavigableMap.prototype.descendingKeySet = function () {
                return this.descendingMap().navigableKeySet();
            };
            AbstractNavigableMap.prototype.descendingMap = function () {
                return new AbstractNavigableMap.DescendingMap(this);
            };
            AbstractNavigableMap.prototype.entrySet = function () {
                return new AbstractNavigableMap.EntrySet(this);
            };
            AbstractNavigableMap.prototype.firstEntry = function () {
                return AbstractNavigableMap.copyOf(this.getFirstEntry());
            };
            AbstractNavigableMap.prototype.firstKey = function () {
                return AbstractNavigableMap.getKeyOrNSE(this.getFirstEntry());
            };
            AbstractNavigableMap.prototype.floorEntry = function (key) {
                return AbstractNavigableMap.copyOf(this.getFloorEntry(key));
            };
            AbstractNavigableMap.prototype.floorKey = function (key) {
                return util.AbstractMap.getEntryKeyOrNull(this.getFloorEntry(key));
            };
            AbstractNavigableMap.prototype.get = function (k) {
                var key = k;
                return util.AbstractMap.getEntryValueOrNull(this.getEntry(key));
            };
            AbstractNavigableMap.prototype.headMap = function (toKey, inclusive) {
                if (((toKey != null) || toKey === null) && inclusive === undefined) {
                    return this.headMap$java_lang_Object(toKey);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractNavigableMap.prototype.headMap$java_lang_Object = function (toKey) {
                return this.headMap(toKey, false);
            };
            AbstractNavigableMap.prototype.higherEntry = function (key) {
                return AbstractNavigableMap.copyOf(this.getHigherEntry(key));
            };
            AbstractNavigableMap.prototype.higherKey = function (key) {
                return util.AbstractMap.getEntryKeyOrNull(this.getHigherEntry(key));
            };
            AbstractNavigableMap.prototype.keySet = function () {
                return this.navigableKeySet();
            };
            AbstractNavigableMap.prototype.lastEntry = function () {
                return AbstractNavigableMap.copyOf(this.getLastEntry());
            };
            AbstractNavigableMap.prototype.lastKey = function () {
                return AbstractNavigableMap.getKeyOrNSE(this.getLastEntry());
            };
            AbstractNavigableMap.prototype.lowerEntry = function (key) {
                return AbstractNavigableMap.copyOf(this.getLowerEntry(key));
            };
            AbstractNavigableMap.prototype.lowerKey = function (key) {
                return util.AbstractMap.getEntryKeyOrNull(this.getLowerEntry(key));
            };
            AbstractNavigableMap.prototype.navigableKeySet = function () {
                return new AbstractNavigableMap.NavigableKeySet(this);
            };
            AbstractNavigableMap.prototype.pollFirstEntry = function () {
                return this.pollEntry(this.getFirstEntry());
            };
            AbstractNavigableMap.prototype.pollLastEntry = function () {
                return this.pollEntry(this.getLastEntry());
            };
            AbstractNavigableMap.prototype.subMap = function (fromKey, fromInclusive, toKey, toInclusive) {
                if (((fromKey != null) || fromKey === null) && ((fromInclusive != null) || fromInclusive === null) && toKey === undefined && toInclusive === undefined) {
                    return this.subMap$java_lang_Object$java_lang_Object(fromKey, fromInclusive);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractNavigableMap.prototype.subMap$java_lang_Object$java_lang_Object = function (fromKey, toKey) {
                return this.subMap(fromKey, true, toKey, false);
            };
            AbstractNavigableMap.prototype.tailMap = function (fromKey, inclusive) {
                if (((fromKey != null) || fromKey === null) && inclusive === undefined) {
                    return this.tailMap$java_lang_Object(fromKey);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractNavigableMap.prototype.tailMap$java_lang_Object = function (fromKey) {
                return this.tailMap(fromKey, true);
            };
            AbstractNavigableMap.prototype.containsEntry = function (entry) {
                var key = entry.getKey();
                var lookupEntry = this.getEntry(key);
                return lookupEntry != null && java.util.Objects.equals(lookupEntry.getValue(), entry.getValue());
            };
            AbstractNavigableMap.prototype.pollEntry = function (entry) {
                if (entry != null) {
                    this.removeEntry(entry);
                }
                return AbstractNavigableMap.copyOf(entry);
            };
            return AbstractNavigableMap;
        }(java.util.AbstractMap));
        util.AbstractNavigableMap = AbstractNavigableMap;
        var AbstractNavigableMap;
        (function (AbstractNavigableMap) {
            var DescendingMap = (function (_super) {
                __extends(DescendingMap, _super);
                function DescendingMap(__parent) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map", "java.util.NavigableMap", "java.util.SortedMap"] });
                    this.__parent = __parent;
                }
                DescendingMap.prototype.clear = function () {
                    this.ascendingMap().clear();
                };
                DescendingMap.prototype.comparator = function () {
                    return java.util.Collections.reverseOrder(this.ascendingMap().comparator());
                };
                DescendingMap.prototype.descendingMap = function () {
                    return this.ascendingMap();
                };
                DescendingMap.prototype.headMap = function (toKey, inclusive) {
                    var _this = this;
                    if (((toKey != null) || toKey === null) && ((typeof inclusive === 'boolean') || inclusive === null)) {
                        return (function () {
                            return _this.ascendingMap().tailMap(toKey, inclusive).descendingMap();
                        })();
                    }
                    else if (((toKey != null) || toKey === null) && inclusive === undefined) {
                        return this.headMap$java_lang_Object(toKey);
                    }
                    else
                        throw new Error('invalid overload');
                };
                DescendingMap.prototype.put = function (key, value) {
                    return this.ascendingMap().put(key, value);
                };
                DescendingMap.prototype.remove = function (key) {
                    return this.ascendingMap().remove(key);
                };
                DescendingMap.prototype.size = function () {
                    return this.ascendingMap().size();
                };
                DescendingMap.prototype.subMap = function (fromKey, fromInclusive, toKey, toInclusive) {
                    var _this = this;
                    if (((fromKey != null) || fromKey === null) && ((typeof fromInclusive === 'boolean') || fromInclusive === null) && ((toKey != null) || toKey === null) && ((typeof toInclusive === 'boolean') || toInclusive === null)) {
                        return (function () {
                            return _this.ascendingMap().subMap(toKey, toInclusive, fromKey, fromInclusive).descendingMap();
                        })();
                    }
                    else if (((fromKey != null) || fromKey === null) && ((fromInclusive != null) || fromInclusive === null) && toKey === undefined && toInclusive === undefined) {
                        return this.subMap$java_lang_Object$java_lang_Object(fromKey, fromInclusive);
                    }
                    else
                        throw new Error('invalid overload');
                };
                DescendingMap.prototype.tailMap = function (fromKey, inclusive) {
                    var _this = this;
                    if (((fromKey != null) || fromKey === null) && ((typeof inclusive === 'boolean') || inclusive === null)) {
                        return (function () {
                            return _this.ascendingMap().headMap(fromKey, inclusive).descendingMap();
                        })();
                    }
                    else if (((fromKey != null) || fromKey === null) && inclusive === undefined) {
                        return this.tailMap$java_lang_Object(fromKey);
                    }
                    else
                        throw new Error('invalid overload');
                };
                DescendingMap.prototype.ascendingMap = function () {
                    return this.__parent;
                };
                DescendingMap.prototype.descendingEntryIterator = function () {
                    return this.ascendingMap().entryIterator();
                };
                DescendingMap.prototype.entryIterator = function () {
                    return this.ascendingMap().descendingEntryIterator();
                };
                DescendingMap.prototype.getEntry = function (key) {
                    return this.ascendingMap().getEntry(key);
                };
                DescendingMap.prototype.getFirstEntry = function () {
                    return this.ascendingMap().getLastEntry();
                };
                DescendingMap.prototype.getLastEntry = function () {
                    return this.ascendingMap().getFirstEntry();
                };
                DescendingMap.prototype.getCeilingEntry = function (key) {
                    return this.ascendingMap().getFloorEntry(key);
                };
                DescendingMap.prototype.getFloorEntry = function (key) {
                    return this.ascendingMap().getCeilingEntry(key);
                };
                DescendingMap.prototype.getHigherEntry = function (key) {
                    return this.ascendingMap().getLowerEntry(key);
                };
                DescendingMap.prototype.getLowerEntry = function (key) {
                    return this.ascendingMap().getHigherEntry(key);
                };
                DescendingMap.prototype.removeEntry = function (entry) {
                    return this.ascendingMap().removeEntry(entry);
                };
                return DescendingMap;
            }(java.util.AbstractNavigableMap));
            AbstractNavigableMap.DescendingMap = DescendingMap;
            var EntrySet = (function (_super) {
                __extends(EntrySet, _super);
                function EntrySet(__parent) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Set", "java.lang.Iterable"] });
                    this.__parent = __parent;
                }
                EntrySet.prototype.contains = function (o) {
                    return (o != null && o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.Map.Entry") >= 0) && this.__parent.containsEntry(o);
                };
                EntrySet.prototype.iterator = function () {
                    return this.__parent.entryIterator();
                };
                EntrySet.prototype.remove = function (index) {
                    if (((index != null) || index === null)) {
                        return this.remove$java_lang_Object(index);
                    }
                    else
                        throw new Error('invalid overload');
                };
                EntrySet.prototype.remove$java_lang_Object = function (o) {
                    if (o != null && o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.Map.Entry") >= 0) {
                        var entry = o;
                        return this.__parent.removeEntry(entry);
                    }
                    return false;
                };
                EntrySet.prototype.size = function () {
                    return this.__parent.size();
                };
                return EntrySet;
            }(java.util.AbstractSet));
            AbstractNavigableMap.EntrySet = EntrySet;
            var NavigableKeySet = (function (_super) {
                __extends(NavigableKeySet, _super);
                function NavigableKeySet(map) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.SortedSet", "java.util.Collection", "java.util.Set", "java.util.NavigableSet", "java.lang.Iterable"] });
                    this.map = map;
                }
                NavigableKeySet.prototype.forEach = function (action) {
                    javaemul.internal.InternalPreconditions.checkNotNull(action);
                    for (var index182 = this.iterator(); index182.hasNext();) {
                        var t = index182.next();
                        {
                            action(t);
                        }
                    }
                };
                NavigableKeySet.prototype.ceiling = function (k) {
                    return this.map.ceilingKey(k);
                };
                NavigableKeySet.prototype.clear = function () {
                    this.map.clear();
                };
                NavigableKeySet.prototype.comparator = function () {
                    return this.map.comparator();
                };
                NavigableKeySet.prototype.contains = function (o) {
                    return this.map.containsKey(o);
                };
                NavigableKeySet.prototype.descendingIterator = function () {
                    return this.descendingSet().iterator();
                };
                NavigableKeySet.prototype.descendingSet = function () {
                    return this.map.descendingMap().navigableKeySet();
                };
                NavigableKeySet.prototype.first = function () {
                    return this.map.firstKey();
                };
                NavigableKeySet.prototype.floor = function (k) {
                    return this.map.floorKey(k);
                };
                NavigableKeySet.prototype.headSet$java_lang_Object = function (toElement) {
                    return this.headSet(toElement, false);
                };
                NavigableKeySet.prototype.headSet = function (toElement, inclusive) {
                    var _this = this;
                    if (((toElement != null) || toElement === null) && ((typeof inclusive === 'boolean') || inclusive === null)) {
                        return (function () {
                            return _this.map.headMap(toElement, inclusive).navigableKeySet();
                        })();
                    }
                    else if (((toElement != null) || toElement === null) && inclusive === undefined) {
                        return this.headSet$java_lang_Object(toElement);
                    }
                    else
                        throw new Error('invalid overload');
                };
                NavigableKeySet.prototype.higher = function (k) {
                    return this.map.higherKey(k);
                };
                NavigableKeySet.prototype.iterator = function () {
                    var entryIterator = this.map.entrySet().iterator();
                    return new NavigableKeySet.NavigableKeySet$0(this, entryIterator);
                };
                NavigableKeySet.prototype.last = function () {
                    return this.map.lastKey();
                };
                NavigableKeySet.prototype.lower = function (k) {
                    return this.map.lowerKey(k);
                };
                NavigableKeySet.prototype.pollFirst = function () {
                    return util.AbstractMap.getEntryKeyOrNull(this.map.pollFirstEntry());
                };
                NavigableKeySet.prototype.pollLast = function () {
                    return util.AbstractMap.getEntryKeyOrNull(this.map.pollLastEntry());
                };
                NavigableKeySet.prototype.remove = function (index) {
                    if (((index != null) || index === null)) {
                        return this.remove$java_lang_Object(index);
                    }
                    else
                        throw new Error('invalid overload');
                };
                NavigableKeySet.prototype.remove$java_lang_Object = function (o) {
                    if (this.map.containsKey(o)) {
                        this.map.remove(o);
                        return true;
                    }
                    return false;
                };
                NavigableKeySet.prototype.size = function () {
                    return this.map.size();
                };
                NavigableKeySet.prototype.subSet = function (fromElement, fromInclusive, toElement, toInclusive) {
                    var _this = this;
                    if (((fromElement != null) || fromElement === null) && ((typeof fromInclusive === 'boolean') || fromInclusive === null) && ((toElement != null) || toElement === null) && ((typeof toInclusive === 'boolean') || toInclusive === null)) {
                        return (function () {
                            return _this.map.subMap(fromElement, fromInclusive, toElement, toInclusive).navigableKeySet();
                        })();
                    }
                    else if (((fromElement != null) || fromElement === null) && ((fromInclusive != null) || fromInclusive === null) && toElement === undefined && toInclusive === undefined) {
                        return this.subSet$java_lang_Object$java_lang_Object(fromElement, fromInclusive);
                    }
                    else
                        throw new Error('invalid overload');
                };
                NavigableKeySet.prototype.subSet$java_lang_Object$java_lang_Object = function (fromElement, toElement) {
                    return this.subSet(fromElement, true, toElement, false);
                };
                NavigableKeySet.prototype.tailSet$java_lang_Object = function (fromElement) {
                    return this.tailSet(fromElement, true);
                };
                NavigableKeySet.prototype.tailSet = function (fromElement, inclusive) {
                    var _this = this;
                    if (((fromElement != null) || fromElement === null) && ((typeof inclusive === 'boolean') || inclusive === null)) {
                        return (function () {
                            return _this.map.tailMap(fromElement, inclusive).navigableKeySet();
                        })();
                    }
                    else if (((fromElement != null) || fromElement === null) && inclusive === undefined) {
                        return this.tailSet$java_lang_Object(fromElement);
                    }
                    else
                        throw new Error('invalid overload');
                };
                return NavigableKeySet;
            }(java.util.AbstractSet));
            AbstractNavigableMap.NavigableKeySet = NavigableKeySet;
            var NavigableKeySet;
            (function (NavigableKeySet) {
                var NavigableKeySet$0 = (function () {
                    function NavigableKeySet$0(__parent, entryIterator) {
                        this.entryIterator = entryIterator;
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                        this.__parent = __parent;
                    }
                    NavigableKeySet$0.prototype.forEachRemaining = function (consumer) {
                        javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                        while ((this.hasNext())) {
                            consumer(this.next());
                        }
                        ;
                    };
                    NavigableKeySet$0.prototype.hasNext = function () {
                        return this.entryIterator.hasNext();
                    };
                    NavigableKeySet$0.prototype.next = function () {
                        var entry = this.entryIterator.next();
                        return entry.getKey();
                    };
                    NavigableKeySet$0.prototype.remove = function () {
                        this.entryIterator.remove();
                    };
                    return NavigableKeySet$0;
                }());
                NavigableKeySet.NavigableKeySet$0 = NavigableKeySet$0;
            })(NavigableKeySet = AbstractNavigableMap.NavigableKeySet || (AbstractNavigableMap.NavigableKeySet = {}));
        })(AbstractNavigableMap = util.AbstractNavigableMap || (util.AbstractNavigableMap = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Implementation of Map interface based on a hash table. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/HashMap.html">[Sun
         * docs]</a>
         *
         * @param <K> key type
         * @param <V> value type
         */
        var HashMap = (function (_super) {
            __extends(HashMap, _super);
            function HashMap(ignored, alsoIgnored) {
                if (((typeof ignored === 'number') || ignored === null) && ((typeof alsoIgnored === 'number') || alsoIgnored === null)) {
                    _super.call(this, ignored, alsoIgnored);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Map", "java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((ignored != null && ignored["__interfaces"] != null && ignored["__interfaces"].indexOf("java.util.Map") >= 0) || ignored === null) && alsoIgnored === undefined) {
                    var toBeCopied = ignored;
                    _super.call(this, toBeCopied);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Map", "java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((typeof ignored === 'number') || ignored === null) && alsoIgnored === undefined) {
                    _super.call(this, ignored);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Map", "java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (ignored === undefined && alsoIgnored === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Map", "java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            HashMap.prototype.clone = function () {
                return new HashMap(this);
            };
            HashMap.prototype._equals = function (value1, value2) {
                return java.util.Objects.equals(value1, value2);
            };
            HashMap.prototype.getHashCode = function (key) {
                var hashCode = key.toString();
                return javaemul.internal.Coercions.ensureInt(hashCode);
            };
            return HashMap;
        }(java.util.AbstractHashMap));
        util.HashMap = HashMap;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Map using reference equality on keys. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/IdentityHashMap.html">[Sun
         * docs]</a>
         *
         * @param <K> key type
         * @param <V> value type
         */
        var IdentityHashMap = (function (_super) {
            __extends(IdentityHashMap, _super);
            function IdentityHashMap(toBeCopied) {
                if (((toBeCopied != null && toBeCopied["__interfaces"] != null && toBeCopied["__interfaces"].indexOf("java.util.Map") >= 0) || toBeCopied === null)) {
                    _super.call(this, toBeCopied);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Map", "java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (((typeof toBeCopied === 'number') || toBeCopied === null)) {
                    var ignored = toBeCopied;
                    _super.call(this, ignored);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Map", "java.io.Serializable"] });
                    (function () {
                    })();
                }
                else if (toBeCopied === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Map", "java.io.Serializable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            IdentityHashMap.prototype.clone = function () {
                return new IdentityHashMap(this);
            };
            IdentityHashMap.prototype.equals = function (obj) {
                if (obj === this) {
                    return true;
                }
                if (!(obj != null && obj["__interfaces"] != null && obj["__interfaces"].indexOf("java.util.Map") >= 0)) {
                    return false;
                }
                var otherMap = obj;
                if (this.size() !== otherMap.size()) {
                    return false;
                }
                for (var index183 = otherMap.entrySet().iterator(); index183.hasNext();) {
                    var entry = index183.next();
                    {
                        var otherKey = entry.getKey();
                        var otherValue = entry.getValue();
                        if (!this.containsKey(otherKey)) {
                            return false;
                        }
                        if (otherValue !== this.get(otherKey)) {
                            return false;
                        }
                    }
                }
                return true;
            };
            IdentityHashMap.prototype.hashCode = function () {
                var hashCode = 0;
                for (var index184 = this.entrySet().iterator(); index184.hasNext();) {
                    var entry = index184.next();
                    {
                        hashCode += java.lang.System.identityHashCode(entry.getKey());
                        hashCode += java.lang.System.identityHashCode(entry.getValue());
                    }
                }
                return hashCode;
            };
            IdentityHashMap.prototype._equals = function (value1, value2) {
                return value1 === value2;
            };
            IdentityHashMap.prototype.getHashCode = function (key) {
                return javaemul.internal.HashCodes.getObjectIdentityHashCode(key);
            };
            return IdentityHashMap;
        }(java.util.AbstractHashMap));
        util.IdentityHashMap = IdentityHashMap;
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Hash table implementation of the Map interface with predictable iteration
         * order. <a href=
         * "http://java.sun.com/j2se/1.5.0/docs/api/java/util/LinkedHashMap.html">[Sun
         * docs]</a>
         *
         * @param <K>
         * key type.
         * @param <V>
         * value type.
         */
        var LinkedHashMap = (function (_super) {
            __extends(LinkedHashMap, _super);
            function LinkedHashMap(ignored, alsoIgnored, accessOrder) {
                var _this = this;
                if (((typeof ignored === 'number') || ignored === null) && ((typeof alsoIgnored === 'number') || alsoIgnored === null) && ((typeof accessOrder === 'boolean') || accessOrder === null)) {
                    _super.call(this, ignored, alsoIgnored);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Map", "java.io.Serializable"] });
                    this.accessOrder = false;
                    (function () {
                        _this.head = new LinkedHashMap.ChainEntry(_this);
                        _this.map = new java.util.HashMap();
                        _this.accessOrder = accessOrder;
                        _this.resetChainEntries();
                    })();
                }
                else if (((typeof ignored === 'number') || ignored === null) && ((typeof alsoIgnored === 'number') || alsoIgnored === null) && accessOrder === undefined) {
                    _super.call(this, ignored, alsoIgnored);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Map", "java.io.Serializable"] });
                    this.accessOrder = false;
                    (function () {
                        _this.head = new LinkedHashMap.ChainEntry(_this);
                        _this.map = new java.util.HashMap();
                        _this.resetChainEntries();
                    })();
                }
                else if (((ignored != null && ignored["__interfaces"] != null && ignored["__interfaces"].indexOf("java.util.Map") >= 0) || ignored === null) && alsoIgnored === undefined && accessOrder === undefined) {
                    var toBeCopied = ignored;
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Map", "java.io.Serializable"] });
                    this.accessOrder = false;
                    (function () {
                        _this.head = new LinkedHashMap.ChainEntry(_this);
                        _this.map = new java.util.HashMap();
                        _this.resetChainEntries();
                        _this.putAll(toBeCopied);
                    })();
                }
                else if (((typeof ignored === 'number') || ignored === null) && alsoIgnored === undefined && accessOrder === undefined) {
                    {
                        var alsoIgnored = 0;
                        _super.call(this, ignored, alsoIgnored);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Map", "java.io.Serializable"] });
                        this.accessOrder = false;
                        (function () {
                            _this.head = new LinkedHashMap.ChainEntry(_this);
                            _this.map = new java.util.HashMap();
                            _this.resetChainEntries();
                        })();
                    }
                    (function () {
                    })();
                }
                else if (ignored === undefined && alsoIgnored === undefined && accessOrder === undefined) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.Cloneable", "java.util.Map", "java.io.Serializable"] });
                    this.accessOrder = false;
                    (function () {
                        _this.head = new LinkedHashMap.ChainEntry(_this);
                        _this.map = new java.util.HashMap();
                        _this.resetChainEntries();
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            LinkedHashMap.prototype.clear = function () {
                this.map.clear();
                this.resetChainEntries();
            };
            LinkedHashMap.prototype.resetChainEntries = function () {
                this.head.prev = this.head;
                this.head.next = this.head;
            };
            LinkedHashMap.prototype.clone = function () {
                return new LinkedHashMap(this);
            };
            LinkedHashMap.prototype.containsKey = function (key) {
                return this.map.containsKey(key);
            };
            LinkedHashMap.prototype.containsValue = function (value) {
                var node = this.head.next;
                while ((node !== this.head)) {
                    if (java.util.Objects.equals(node.getValue(), value)) {
                        return true;
                    }
                    node = node.next;
                }
                ;
                return false;
            };
            LinkedHashMap.prototype.entrySet = function () {
                return new LinkedHashMap.EntrySet(this);
            };
            LinkedHashMap.prototype.get = function (key) {
                var entry = this.map.get(key);
                if (entry != null) {
                    this.recordAccess(entry);
                    return entry.getValue();
                }
                return null;
            };
            LinkedHashMap.prototype.put = function (key, value) {
                var old = this.map.get(key);
                if (old == null) {
                    var newEntry = new LinkedHashMap.ChainEntry(this, key, value);
                    this.map.put(key, newEntry);
                    newEntry.addToEnd();
                    var eldest = this.head.next;
                    if (this.removeEldestEntry(eldest)) {
                        eldest.remove();
                        this.map.remove(eldest.getKey());
                    }
                    return null;
                }
                else {
                    var oldValue = old.setValue(value);
                    this.recordAccess(old);
                    return oldValue;
                }
            };
            LinkedHashMap.prototype.remove = function (key) {
                var entry = this.map.remove(key);
                if (entry != null) {
                    entry.remove();
                    return entry.getValue();
                }
                return null;
            };
            LinkedHashMap.prototype.size = function () {
                return this.map.size();
            };
            LinkedHashMap.prototype.removeEldestEntry = function (eldest) {
                return false;
            };
            LinkedHashMap.prototype.recordAccess = function (entry) {
                if (this.accessOrder) {
                    entry.remove();
                    entry.addToEnd();
                }
            };
            return LinkedHashMap;
        }(java.util.HashMap));
        util.LinkedHashMap = LinkedHashMap;
        var LinkedHashMap;
        (function (LinkedHashMap) {
            /**
             * The entry we use includes next/prev pointers for a doubly-linked circular
             * list with a head node. This reduces the special cases we have to deal
             * with in the list operations.
             *
             * Note that we duplicate the key from the underlying hash map so we can
             * find the eldest entry. The alternative would have been to modify HashMap
             * so more of the code was directly usable here, but this would have added
             * some overhead to HashMap, or to reimplement most of the HashMap code here
             * with small modifications. Paying a small storage cost only if you use
             * LinkedHashMap and minimizing code size seemed like a better tradeoff
             */
            var ChainEntry = (function (_super) {
                __extends(ChainEntry, _super);
                function ChainEntry(__parent, key, value) {
                    if (key === void 0) { key = null; }
                    if (value === void 0) { value = null; }
                    _super.call(this, key, value);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
                    this.__parent = __parent;
                }
                /**
                 * Add this node to the end of the chain.
                 */
                ChainEntry.prototype.addToEnd = function () {
                    var tail = this.__parent.head.prev;
                    this.prev = tail;
                    this.next = this.__parent.head;
                    tail.next = this.__parent.head.prev = this;
                };
                /**
                 * Remove this node from any list it may be a part of.
                 */
                ChainEntry.prototype.remove = function () {
                    this.next.prev = this.prev;
                    this.prev.next = this.next;
                    this.next = this.prev = null;
                };
                return ChainEntry;
            }(util.AbstractMap.SimpleEntry));
            LinkedHashMap.ChainEntry = ChainEntry;
            var EntrySet = (function (_super) {
                __extends(EntrySet, _super);
                function EntrySet(__parent) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Set", "java.lang.Iterable"] });
                    this.__parent = __parent;
                }
                EntrySet.prototype.clear = function () {
                    this.__parent.clear();
                };
                EntrySet.prototype.contains = function (o) {
                    if (o != null && o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.Map.Entry") >= 0) {
                        return this.__parent.containsEntry(o);
                    }
                    return false;
                };
                EntrySet.prototype.iterator = function () {
                    return new EntrySet.EntryIterator(this);
                };
                EntrySet.prototype.remove = function (index) {
                    if (((index != null) || index === null)) {
                        return this.remove$java_lang_Object(index);
                    }
                    else
                        throw new Error('invalid overload');
                };
                EntrySet.prototype.remove$java_lang_Object = function (entry) {
                    if (this.contains(entry)) {
                        var key = entry.getKey();
                        this.__parent.remove(key);
                        return true;
                    }
                    return false;
                };
                EntrySet.prototype.size = function () {
                    return this.__parent.size();
                };
                return EntrySet;
            }(java.util.AbstractSet));
            LinkedHashMap.EntrySet = EntrySet;
            var EntrySet;
            (function (EntrySet) {
                var EntryIterator = (function () {
                    function EntryIterator(__parent) {
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                        this.__parent = __parent;
                        this.__next = this.__parent.__parent.head.next;
                        java.util.ConcurrentModificationDetector.recordLastKnownStructure(this.__parent.__parent.map, this);
                    }
                    EntryIterator.prototype.forEachRemaining = function (consumer) {
                        javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                        while ((this.hasNext())) {
                            consumer(this.next());
                        }
                        ;
                    };
                    EntryIterator.prototype.hasNext = function () {
                        return this.__next !== this.__parent.__parent.head;
                    };
                    EntryIterator.prototype.next = function () {
                        java.util.ConcurrentModificationDetector.checkStructuralChange(this.__parent.__parent.map, this);
                        javaemul.internal.InternalPreconditions.checkCriticalElement(this.hasNext());
                        this.last = this.__next;
                        this.__next = this.__next.next;
                        return this.last;
                    };
                    EntryIterator.prototype.remove = function () {
                        javaemul.internal.InternalPreconditions.checkState(this.last != null);
                        java.util.ConcurrentModificationDetector.checkStructuralChange(this.__parent.__parent.map, this);
                        this.last.remove();
                        this.__parent.__parent.map.remove(this.last.getKey());
                        java.util.ConcurrentModificationDetector.recordLastKnownStructure(this.__parent.__parent.map, this);
                        this.last = null;
                    };
                    return EntryIterator;
                }());
                EntrySet.EntryIterator = EntryIterator;
            })(EntrySet = LinkedHashMap.EntrySet || (LinkedHashMap.EntrySet = {}));
        })(LinkedHashMap = util.LinkedHashMap || (util.LinkedHashMap = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * A {@link java.util.Map} of {@link Enum}s. <a
         * href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/EnumMap.html">[Sun
         * docs]</a>
         *
         * @param <K> key type
         * @param <V> value type
         */
        var EnumMap = (function (_super) {
            __extends(EnumMap, _super);
            function EnumMap(type) {
                var _this = this;
                if (((type != null && type instanceof java.lang.Class) || type === null)) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map"] });
                    (function () {
                        _this.init(type);
                    })();
                }
                else if (((type != null && type instanceof java.util.EnumMap) || type === null)) {
                    var m = type;
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map"] });
                    (function () {
                        _this.init(m);
                    })();
                }
                else if (((type != null && type["__interfaces"] != null && type["__interfaces"].indexOf("java.util.Map") >= 0) || type === null)) {
                    var m = type;
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map"] });
                    (function () {
                        if (m != null && m instanceof java.util.EnumMap) {
                            _this.init(m);
                        }
                        else {
                            javaemul.internal.InternalPreconditions.checkArgument(!m.isEmpty(), "Specified map is empty");
                            _this.init(m.keySet().iterator().next().getDeclaringClass());
                            _this.putAll(m);
                        }
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            EnumMap.prototype.clear = function () {
                this.__keySet.clear();
                this.__values = new Array(this.__values.length);
            };
            EnumMap.prototype.clone = function () {
                return new EnumMap(this);
            };
            EnumMap.prototype.containsKey = function (key) {
                return this.__keySet.contains(key);
            };
            EnumMap.prototype.containsValue = function (value) {
                for (var index185 = this.__keySet.iterator(); index185.hasNext();) {
                    var key = index185.next();
                    {
                        if (java.util.Objects.equals(value, this.__values[key.ordinal()])) {
                            return true;
                        }
                    }
                }
                return false;
            };
            EnumMap.prototype.entrySet = function () {
                return new EnumMap.EntrySet(this);
            };
            EnumMap.prototype.get = function (k) {
                return this.__keySet.contains(k) ? this.__values[this.asOrdinal(k)] : null;
            };
            EnumMap.prototype.put = function (key, value) {
                var _this = this;
                if (((key != null) || key === null) && ((value != null) || value === null)) {
                    return (function () {
                        _this.__keySet.add(key);
                        return _this.set(key.ordinal(), value);
                    })();
                }
                else if (((key != null) || key === null) && ((value != null) || value === null)) {
                    return this.put$java_lang_Object$java_lang_Object(key, value);
                }
                else
                    throw new Error('invalid overload');
            };
            EnumMap.prototype.remove = function (key) {
                return this.__keySet.remove(key) ? this.set(this.asOrdinal(key), null) : null;
            };
            EnumMap.prototype.size = function () {
                return this.__keySet.size();
            };
            /**
             * Returns <code>key</code> as <code>K</code>. Only runtime checks that
             * key is an Enum, not that it's the particular Enum K. Should only be called
             * when you are sure <code>key</code> is of type <code>K</code>.
             */
            EnumMap.prototype.asKey = function (key) {
                return key;
            };
            EnumMap.prototype.asOrdinal = function (key) {
                return this.asKey(key).ordinal();
            };
            EnumMap.prototype.init = function (type) {
                var _this = this;
                if (((type != null && type instanceof java.lang.Class) || type === null)) {
                    return (function () {
                        _this.__keySet = java.util.EnumSet.noneOf(type);
                        _this.__values = new Array(_this.__keySet.capacity());
                    })();
                }
                else if (((type != null && type instanceof java.util.EnumMap) || type === null)) {
                    return this.init$java_util_EnumMap(type);
                }
                else
                    throw new Error('invalid overload');
            };
            EnumMap.prototype.init$java_util_EnumMap = function (m) {
                this.__keySet = m.__keySet.clone();
                this.__values = javaemul.internal.ArrayHelper.clone(m.__values, 0, m.__values.length);
            };
            EnumMap.prototype.set = function (ordinal, value) {
                var was = this.__values[ordinal];
                this.__values[ordinal] = value;
                return was;
            };
            return EnumMap;
        }(java.util.AbstractMap));
        util.EnumMap = EnumMap;
        var EnumMap;
        (function (EnumMap) {
            var EntrySet = (function (_super) {
                __extends(EntrySet, _super);
                function EntrySet(__parent) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Set", "java.lang.Iterable"] });
                    this.__parent = __parent;
                }
                EntrySet.prototype.clear = function () {
                    this.__parent.clear();
                };
                EntrySet.prototype.contains = function (o) {
                    if (o != null && o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.Map.Entry") >= 0) {
                        return this.__parent.containsEntry(o);
                    }
                    return false;
                };
                EntrySet.prototype.iterator = function () {
                    return new EnumMap.EntrySetIterator(this.__parent);
                };
                EntrySet.prototype.remove = function (index) {
                    if (((index != null) || index === null)) {
                        return this.remove$java_lang_Object(index);
                    }
                    else
                        throw new Error('invalid overload');
                };
                EntrySet.prototype.remove$java_lang_Object = function (entry) {
                    if (this.contains(entry)) {
                        var key = entry.getKey();
                        this.__parent.remove(key);
                        return true;
                    }
                    return false;
                };
                EntrySet.prototype.size = function () {
                    return this.__parent.size();
                };
                return EntrySet;
            }(java.util.AbstractSet));
            EnumMap.EntrySet = EntrySet;
            var EntrySetIterator = (function () {
                function EntrySetIterator(__parent) {
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                    this.__parent = __parent;
                    this.it = this.__parent.__keySet.iterator();
                }
                EntrySetIterator.prototype.forEachRemaining = function (consumer) {
                    javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                    while ((this.hasNext())) {
                        consumer(this.next());
                    }
                    ;
                };
                EntrySetIterator.prototype.hasNext = function () {
                    return this.it.hasNext();
                };
                EntrySetIterator.prototype.next = function () {
                    this.key = this.it.next();
                    return new EnumMap.MapEntry(this.__parent, this.key);
                };
                EntrySetIterator.prototype.remove = function () {
                    javaemul.internal.InternalPreconditions.checkState(this.key != null);
                    this.__parent.remove(this.key);
                    this.key = null;
                };
                return EntrySetIterator;
            }());
            EnumMap.EntrySetIterator = EntrySetIterator;
            var MapEntry = (function (_super) {
                __extends(MapEntry, _super);
                function MapEntry(__parent, key) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
                    this.__parent = __parent;
                    this.key = key;
                }
                MapEntry.prototype.getKey = function () {
                    return this.key;
                };
                MapEntry.prototype.getValue = function () {
                    return this.__parent.__values[this.key.ordinal()];
                };
                MapEntry.prototype.setValue = function (value) {
                    return this.__parent.set(this.key.ordinal(), value);
                };
                return MapEntry;
            }(java.util.AbstractMapEntry));
            EnumMap.MapEntry = MapEntry;
        })(EnumMap = util.EnumMap || (util.EnumMap = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var util;
    (function (util) {
        /**
         * Implements a TreeMap using a red-black tree. This guarantees O(log n)
         * performance on lookups, inserts, and deletes while maintaining linear
         * in-order traversal time. Null keys and values are fully supported if the
         * comparator supports them (the default comparator does not).
         *
         * @param <K> key type
         * @param <V> value type
         */
        var TreeMap = (function (_super) {
            __extends(TreeMap, _super);
            function TreeMap(c) {
                var _this = this;
                if (((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Comparator") >= 0) || c === null)) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map", "java.util.NavigableMap", "java.util.SortedMap", "java.io.Serializable"] });
                    this.__size = 0;
                    (function () {
                        _this.root = null;
                        if (c == null) {
                            c = java.util.Comparators.natural();
                        }
                        _this.cmp = c;
                    })();
                }
                else if (((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.SortedMap") >= 0) || c === null)) {
                    var map = c;
                    {
                        var c = javaemul.internal.InternalPreconditions.checkNotNull(map).comparator();
                        _super.call(this);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map", "java.util.NavigableMap", "java.util.SortedMap", "java.io.Serializable"] });
                        this.__size = 0;
                        (function () {
                            _this.root = null;
                            if (c == null) {
                                c = java.util.Comparators.natural();
                            }
                            _this.cmp = c;
                        })();
                    }
                    (function () {
                        _this.putAll(map);
                    })();
                }
                else if (((c != null && c["__interfaces"] != null && c["__interfaces"].indexOf("java.util.Map") >= 0) || c === null)) {
                    var map = c;
                    {
                        {
                            var c = null;
                            _super.call(this);
                            Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map", "java.util.NavigableMap", "java.util.SortedMap", "java.io.Serializable"] });
                            this.__size = 0;
                            (function () {
                                _this.root = null;
                                if (c == null) {
                                    c = java.util.Comparators.natural();
                                }
                                _this.cmp = c;
                            })();
                        }
                        (function () {
                        })();
                    }
                    (function () {
                        _this.putAll(map);
                    })();
                }
                else if (c === undefined) {
                    {
                        var c = null;
                        _super.call(this);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map", "java.util.NavigableMap", "java.util.SortedMap", "java.io.Serializable"] });
                        this.__size = 0;
                        (function () {
                            _this.root = null;
                            if (c == null) {
                                c = java.util.Comparators.natural();
                            }
                            _this.cmp = c;
                        })();
                    }
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            TreeMap.SubMapType_All_$LI$ = function () { if (TreeMap.SubMapType_All == null)
                TreeMap.SubMapType_All = new TreeMap.SubMapType(); return TreeMap.SubMapType_All; };
            ;
            TreeMap.SubMapType_Head_$LI$ = function () { if (TreeMap.SubMapType_Head == null)
                TreeMap.SubMapType_Head = new TreeMap.SubMapTypeHead(); return TreeMap.SubMapType_Head; };
            ;
            TreeMap.SubMapType_Range_$LI$ = function () { if (TreeMap.SubMapType_Range == null)
                TreeMap.SubMapType_Range = new TreeMap.SubMapTypeRange(); return TreeMap.SubMapType_Range; };
            ;
            TreeMap.SubMapType_Tail_$LI$ = function () { if (TreeMap.SubMapType_Tail == null)
                TreeMap.SubMapType_Tail = new TreeMap.SubMapTypeTail(); return TreeMap.SubMapType_Tail; };
            ;
            TreeMap.otherChild = function (child) {
                return 1 - child;
            };
            TreeMap.prototype.clear = function () {
                this.root = null;
                this.__size = 0;
            };
            TreeMap.prototype.comparator = function () {
                if (this.cmp === java.util.Comparators.natural()) {
                    return null;
                }
                return this.cmp;
            };
            TreeMap.prototype.entrySet = function () {
                return new TreeMap.EntrySet(this);
            };
            TreeMap.prototype.headMap = function (toKey, inclusive) {
                var _this = this;
                if (((toKey != null) || toKey === null) && ((typeof inclusive === 'boolean') || inclusive === null)) {
                    return (function () {
                        return new TreeMap.SubMap(_this, TreeMap.SubMapType_Head_$LI$(), null, false, toKey, inclusive);
                    })();
                }
                else if (((toKey != null) || toKey === null) && inclusive === undefined) {
                    return this.headMap$java_lang_Object(toKey);
                }
                else
                    throw new Error('invalid overload');
            };
            TreeMap.prototype.put = function (key, value) {
                if (((key != null) || key === null) && ((value != null) || value === null)) {
                    return this.put$java_lang_Object$java_lang_Object(key, value);
                }
                else
                    throw new Error('invalid overload');
            };
            TreeMap.prototype.put$java_lang_Object$java_lang_Object = function (key, value) {
                var node = new TreeMap.Node(key, value);
                var state = new TreeMap.State();
                this.root = this.insert(this.root, node, state);
                if (!state.found) {
                    ++this.__size;
                }
                this.root.isRed = false;
                return state.value;
            };
            TreeMap.prototype.remove = function (k) {
                var key = k;
                var state = new TreeMap.State();
                this.removeWithState(key, state);
                return state.value;
            };
            TreeMap.prototype.size = function () {
                return this.__size;
            };
            TreeMap.prototype.subMap = function (fromKey, fromInclusive, toKey, toInclusive) {
                var _this = this;
                if (((fromKey != null) || fromKey === null) && ((typeof fromInclusive === 'boolean') || fromInclusive === null) && ((toKey != null) || toKey === null) && ((typeof toInclusive === 'boolean') || toInclusive === null)) {
                    return (function () {
                        return new TreeMap.SubMap(_this, TreeMap.SubMapType_Range_$LI$(), fromKey, fromInclusive, toKey, toInclusive);
                    })();
                }
                else if (((fromKey != null) || fromKey === null) && ((fromInclusive != null) || fromInclusive === null) && toKey === undefined && toInclusive === undefined) {
                    return this.subMap$java_lang_Object$java_lang_Object(fromKey, fromInclusive);
                }
                else
                    throw new Error('invalid overload');
            };
            TreeMap.prototype.tailMap = function (fromKey, inclusive) {
                var _this = this;
                if (((fromKey != null) || fromKey === null) && ((typeof inclusive === 'boolean') || inclusive === null)) {
                    return (function () {
                        return new TreeMap.SubMap(_this, TreeMap.SubMapType_Tail_$LI$(), fromKey, inclusive, null, false);
                    })();
                }
                else if (((fromKey != null) || fromKey === null) && inclusive === undefined) {
                    return this.tailMap$java_lang_Object(fromKey);
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Returns the first node which compares greater than the given key.
             *
             * @param key the key to search for
             * @return the next node, or null if there is none
             */
            TreeMap.prototype.getNodeAfter = function (key, inclusive) {
                var foundNode = null;
                var node = this.root;
                while ((node != null)) {
                    var c = this.cmp.compare(key, node.getKey());
                    if (inclusive && c === 0) {
                        return node;
                    }
                    if (c >= 0) {
                        node = node.child[TreeMap.RIGHT];
                    }
                    else {
                        foundNode = node;
                        node = node.child[TreeMap.LEFT];
                    }
                }
                ;
                return foundNode;
            };
            /**
             * Returns the last node which is strictly less than the given key.
             *
             * @param key the key to search for
             * @return the previous node, or null if there is none
             */
            TreeMap.prototype.getNodeBefore = function (key, inclusive) {
                var foundNode = null;
                var node = this.root;
                while ((node != null)) {
                    var c = this.cmp.compare(key, node.getKey());
                    if (inclusive && c === 0) {
                        return node;
                    }
                    if (c <= 0) {
                        node = node.child[TreeMap.LEFT];
                    }
                    else {
                        foundNode = node;
                        node = node.child[TreeMap.RIGHT];
                    }
                }
                ;
                return foundNode;
            };
            /**
             * Used for testing. Validate that the tree meets all red-black correctness
             * requirements. These include:
             *
             * <pre>
             * - root is black
             * - no children of a red node may be red
             * - the black height of every path through the three to a leaf is exactly the same
             * </pre>
             *
             * @throws RuntimeException if any correctness errors are detected.
             */
            TreeMap.prototype.assertCorrectness$ = function () {
                this.assertCorrectness(this.root, true);
            };
            TreeMap.prototype.descendingEntryIterator = function () {
                return new TreeMap.DescendingEntryIterator(this);
            };
            TreeMap.prototype.entryIterator = function () {
                return new TreeMap.EntryIterator(this);
            };
            /**
             * Internal helper function for public {@link #assertCorrectness()}.
             *
             * @param tree the subtree to validate.
             * @param isRed true if the parent of this node is red.
             * @return the black height of this subtree.
             * @throws RuntimeException if this RB-tree is not valid.
             */
            TreeMap.prototype.assertCorrectness = function (tree, isRed) {
                var _this = this;
                if (((tree != null && tree instanceof java.util.TreeMap.Node) || tree === null) && ((typeof isRed === 'boolean') || isRed === null)) {
                    return (function () {
                        if (tree == null) {
                            return 0;
                        }
                        if (isRed && tree.isRed) {
                            throw new Error("Two red nodes adjacent");
                        }
                        var leftNode = tree.child[TreeMap.LEFT];
                        if (leftNode != null && _this.cmp.compare(leftNode.getKey(), tree.getKey()) > 0) {
                            throw new Error("Left child " + leftNode + " larger than " + tree);
                        }
                        var rightNode = tree.child[TreeMap.RIGHT];
                        if (rightNode != null && _this.cmp.compare(rightNode.getKey(), tree.getKey()) < 0) {
                            throw new Error("Right child " + rightNode + " smaller than " + tree);
                        }
                        var leftHeight = _this.assertCorrectness(leftNode, tree.isRed);
                        var rightHeight = _this.assertCorrectness(rightNode, tree.isRed);
                        if (leftHeight !== 0 && rightHeight !== 0 && leftHeight !== rightHeight) {
                            throw new Error("Black heights don\'t match");
                        }
                        return tree.isRed ? leftHeight : leftHeight + 1;
                    })();
                }
                else if (tree === undefined && isRed === undefined) {
                    return this.assertCorrectness$();
                }
                else
                    throw new Error('invalid overload');
            };
            /**
             * Finds an entry given a key and returns the node.
             *
             * @param key the search key
             * @return the node matching the key or null
             */
            TreeMap.prototype.getEntry = function (key) {
                var tree = this.root;
                while ((tree != null)) {
                    var c = this.cmp.compare(key, tree.getKey());
                    if (c === 0) {
                        return tree;
                    }
                    var childNum = c < 0 ? TreeMap.LEFT : TreeMap.RIGHT;
                    tree = tree.child[childNum];
                }
                ;
                return null;
            };
            /**
             * Returns the left-most node of the tree, or null if empty.
             */
            TreeMap.prototype.getFirstEntry = function () {
                if (this.root == null) {
                    return null;
                }
                var node = this.root;
                var nextNode;
                while (((nextNode = node.child[TreeMap.LEFT]) != null)) {
                    node = nextNode;
                }
                ;
                return node;
            };
            /**
             * Returns the right-most node of the tree, or null if empty.
             */
            TreeMap.prototype.getLastEntry = function () {
                if (this.root == null) {
                    return null;
                }
                var node = this.root;
                var nextNode;
                while (((nextNode = node.child[TreeMap.RIGHT]) != null)) {
                    node = nextNode;
                }
                ;
                return node;
            };
            TreeMap.prototype.getCeilingEntry = function (key) {
                return this.getNodeAfter(key, true);
            };
            TreeMap.prototype.getFloorEntry = function (key) {
                return this.getNodeBefore(key, true);
            };
            TreeMap.prototype.getHigherEntry = function (key) {
                return this.getNodeAfter(key, false);
            };
            TreeMap.prototype.getLowerEntry = function (key) {
                return this.getNodeBefore(key, false);
            };
            TreeMap.prototype.removeEntry = function (entry) {
                var state = new TreeMap.State();
                state.matchValue = true;
                state.value = entry.getValue();
                return this.removeWithState(entry.getKey(), state);
            };
            TreeMap.prototype.inOrderAdd = function (list, type, current, fromKey, fromInclusive, toKey, toInclusive) {
                if (current == null) {
                    return;
                }
                var leftNode = current.child[TreeMap.LEFT];
                if (leftNode != null) {
                    this.inOrderAdd(list, type, leftNode, fromKey, fromInclusive, toKey, toInclusive);
                }
                if (this.inRange(type, current.getKey(), fromKey, fromInclusive, toKey, toInclusive)) {
                    list.add(current);
                }
                var rightNode = current.child[TreeMap.RIGHT];
                if (rightNode != null) {
                    this.inOrderAdd(list, type, rightNode, fromKey, fromInclusive, toKey, toInclusive);
                }
            };
            TreeMap.prototype.inRange = function (type, key, fromKey, fromInclusive, toKey, toInclusive) {
                if (type.fromKeyValid() && this.smaller(key, fromKey, !fromInclusive)) {
                    return false;
                }
                if (type.toKeyValid() && this.larger(key, toKey, !toInclusive)) {
                    return false;
                }
                return true;
            };
            /**
             * Insert a node into a subtree, collecting state about the insertion.
             *
             * If the same key already exists, the value of the node is overwritten with
             * the value from the new node instead.
             *
             * @param tree subtree to insert into
             * @param newNode new node to insert
             * @param state result of the insertion: state.found true if the key already
             * existed in the tree state.value the old value if the key existed
             * @return the new subtree root
             */
            TreeMap.prototype.insert = function (tree, newNode, state) {
                if (tree == null) {
                    return newNode;
                }
                else {
                    var c = this.cmp.compare(newNode.getKey(), tree.getKey());
                    if (c === 0) {
                        state.value = tree.setValue(newNode.getValue());
                        state.found = true;
                        return tree;
                    }
                    var childNum = c < 0 ? TreeMap.LEFT : TreeMap.RIGHT;
                    tree.child[childNum] = this.insert(tree.child[childNum], newNode, state);
                    if (this.isRed(tree.child[childNum])) {
                        if (this.isRed(tree.child[TreeMap.otherChild(childNum)])) {
                            tree.isRed = true;
                            tree.child[TreeMap.LEFT].isRed = false;
                            tree.child[TreeMap.RIGHT].isRed = false;
                        }
                        else {
                            if (this.isRed(tree.child[childNum].child[childNum])) {
                                tree = this.rotateSingle(tree, TreeMap.otherChild(childNum));
                            }
                            else if (this.isRed(tree.child[childNum].child[TreeMap.otherChild(childNum)])) {
                                tree = this.rotateDouble(tree, TreeMap.otherChild(childNum));
                            }
                        }
                    }
                }
                return tree;
            };
            /**
             * Returns true if <code>node</code> is red. Note that null pointers are
             * considered black.
             */
            TreeMap.prototype.isRed = function (node) {
                return node != null && node.isRed;
            };
            /**
             * Returns true if <code>a</code> is greater than or equal to <code>b</code>.
             */
            TreeMap.prototype.larger = function (a, b, orEqual) {
                var compare = this.cmp.compare(a, b);
                return compare > 0 || (orEqual && compare === 0);
            };
            /**
             * Returns true if <code>a</code> is less than or equal to <code>b</code>.
             */
            TreeMap.prototype.smaller = function (a, b, orEqual) {
                var compare = this.cmp.compare(a, b);
                return compare < 0 || (orEqual && compare === 0);
            };
            /**
             * Remove a key from the tree, returning whether it was found and its value.
             *
             * @param key key to remove
             * @param state return state, not null
             * @return true if the value was found
             */
            TreeMap.prototype.removeWithState = function (key, state) {
                if (this.root == null) {
                    return false;
                }
                var found = null;
                var parent = null;
                var head = new TreeMap.Node(null, null);
                var dir = TreeMap.RIGHT;
                head.child[TreeMap.RIGHT] = this.root;
                var node = head;
                while ((node.child[dir] != null)) {
                    var last = dir;
                    var grandparent = parent;
                    parent = node;
                    node = node.child[dir];
                    var c = this.cmp.compare(key, node.getKey());
                    dir = c < 0 ? TreeMap.LEFT : TreeMap.RIGHT;
                    if (c === 0 && (!state.matchValue || java.util.Objects.equals(node.getValue(), state.value))) {
                        found = node;
                    }
                    if (!this.isRed(node) && !this.isRed(node.child[dir])) {
                        if (this.isRed(node.child[TreeMap.otherChild(dir)])) {
                            parent = parent.child[last] = this.rotateSingle(node, dir);
                        }
                        else if (!this.isRed(node.child[TreeMap.otherChild(dir)])) {
                            var sibling = parent.child[TreeMap.otherChild(last)];
                            if (sibling != null) {
                                if (!this.isRed(sibling.child[TreeMap.otherChild(last)]) && !this.isRed(sibling.child[last])) {
                                    parent.isRed = false;
                                    sibling.isRed = true;
                                    node.isRed = true;
                                }
                                else {
                                    var dir2 = grandparent.child[TreeMap.RIGHT] === parent ? TreeMap.RIGHT : TreeMap.LEFT;
                                    if (this.isRed(sibling.child[last])) {
                                        grandparent.child[dir2] = this.rotateDouble(parent, last);
                                    }
                                    else if (this.isRed(sibling.child[TreeMap.otherChild(last)])) {
                                        grandparent.child[dir2] = this.rotateSingle(parent, last);
                                    }
                                    node.isRed = grandparent.child[dir2].isRed = true;
                                    grandparent.child[dir2].child[TreeMap.LEFT].isRed = false;
                                    grandparent.child[dir2].child[TreeMap.RIGHT].isRed = false;
                                }
                            }
                        }
                    }
                }
                ;
                if (found != null) {
                    state.found = true;
                    state.value = found.getValue();
                    if (node !== found) {
                        var newNode = new TreeMap.Node(node.getKey(), node.getValue());
                        this.replaceNode(head, found, newNode);
                        if (parent === found) {
                            parent = newNode;
                        }
                    }
                    parent.child[parent.child[TreeMap.RIGHT] === node ? TreeMap.RIGHT : TreeMap.LEFT] = node.child[node.child[TreeMap.LEFT] == null ? TreeMap.RIGHT : TreeMap.LEFT];
                    this.__size--;
                }
                this.root = head.child[TreeMap.RIGHT];
                if (this.root != null) {
                    this.root.isRed = false;
                }
                return state.found;
            };
            /**
             * replace 'node' with 'newNode' in the tree rooted at 'head'. Could have
             * avoided this traversal if each node maintained a parent pointer.
             */
            TreeMap.prototype.replaceNode = function (head, node, newNode) {
                var parent = head;
                var direction = (parent.getKey() == null || this.cmp.compare(node.getKey(), parent.getKey()) > 0) ? TreeMap.RIGHT : TreeMap.LEFT;
                while ((parent.child[direction] !== node)) {
                    parent = parent.child[direction];
                    direction = this.cmp.compare(node.getKey(), parent.getKey()) > 0 ? TreeMap.RIGHT : TreeMap.LEFT;
                }
                ;
                parent.child[direction] = newNode;
                newNode.isRed = node.isRed;
                newNode.child[TreeMap.LEFT] = node.child[TreeMap.LEFT];
                newNode.child[TreeMap.RIGHT] = node.child[TreeMap.RIGHT];
                node.child[TreeMap.LEFT] = null;
                node.child[TreeMap.RIGHT] = null;
            };
            /**
             * Perform a double rotation, first rotating the child which will become the
             * root in the opposite direction, then rotating the root in the specified
             * direction.
             *
             * <pre>
             * A                                               F
             * B   C    becomes (with rotateDirection=0)       A   C
             * D E F G                                         B E   G
             * D
             * </pre>
             *
             * @param tree root of the subtree to rotate
             * @param rotateDirection the direction to rotate: 0=left, 1=right
             * @return the new root of the rotated subtree
             */
            TreeMap.prototype.rotateDouble = function (tree, rotateDirection) {
                var otherChildDir = TreeMap.otherChild(rotateDirection);
                tree.child[otherChildDir] = this.rotateSingle(tree.child[otherChildDir], otherChildDir);
                return this.rotateSingle(tree, rotateDirection);
            };
            /**
             * Perform a single rotation, pushing the root of the subtree to the specified
             * direction.
             *
             * <pre>
             * A                                              B
             * B   C     becomes (with rotateDirection=1)     D   A
             * D E                                              E   C
             * </pre>
             *
             * @param tree the root of the subtree to rotate
             * @param rotateDirection the direction to rotate: 0=left rotation, 1=right
             * @return the new root of the rotated subtree
             */
            TreeMap.prototype.rotateSingle = function (tree, rotateDirection) {
                var otherChildDir = TreeMap.otherChild(rotateDirection);
                var save = tree.child[otherChildDir];
                tree.child[otherChildDir] = save.child[rotateDirection];
                save.child[rotateDirection] = tree;
                tree.isRed = true;
                save.isRed = false;
                return save;
            };
            TreeMap.LEFT = 0;
            TreeMap.RIGHT = 1;
            return TreeMap;
        }(java.util.AbstractNavigableMap));
        util.TreeMap = TreeMap;
        var TreeMap;
        (function (TreeMap) {
            /**
             * Iterator for <code>descendingMap().entrySet()</code>.
             */
            var DescendingEntryIterator = (function () {
                /**
                 * Create an iterator which may return only a restricted range.
                 *
                 * @param fromKey the first key to return in the iterator.
                 * @param toKey the upper bound of keys to return.
                 */
                function DescendingEntryIterator(__parent, type, fromKey, fromInclusive, toKey, toInclusive) {
                    if (type === void 0) { type = java.util.TreeMap.SubMapType_All_$LI$(); }
                    if (fromKey === void 0) { fromKey = null; }
                    if (fromInclusive === void 0) { fromInclusive = false; }
                    if (toKey === void 0) { toKey = null; }
                    if (toInclusive === void 0) { toInclusive = false; }
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                    this.__parent = __parent;
                    var list = new java.util.ArrayList();
                    this.__parent.inOrderAdd(list, type, this.__parent.root, fromKey, fromInclusive, toKey, toInclusive);
                    this.iter = list.listIterator(list.size());
                }
                DescendingEntryIterator.prototype.forEachRemaining = function (consumer) {
                    javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                    while ((this.hasNext())) {
                        consumer(this.next());
                    }
                    ;
                };
                DescendingEntryIterator.prototype.hasNext = function () {
                    return this.iter.hasPrevious();
                };
                DescendingEntryIterator.prototype.next = function () {
                    return this.last = this.iter.previous();
                };
                DescendingEntryIterator.prototype.remove = function () {
                    this.iter.remove();
                    this.__parent.removeEntry(this.last);
                    this.last = null;
                };
                return DescendingEntryIterator;
            }());
            TreeMap.DescendingEntryIterator = DescendingEntryIterator;
            /**
             * Iterator for <code>EntrySet</code>.
             */
            var EntryIterator = (function () {
                /**
                 * Create an iterator which may return only a restricted range.
                 *
                 * @param fromKey the first key to return in the iterator.
                 * @param toKey the upper bound of keys to return.
                 */
                function EntryIterator(__parent, type, fromKey, fromInclusive, toKey, toInclusive) {
                    if (type === void 0) { type = java.util.TreeMap.SubMapType_All_$LI$(); }
                    if (fromKey === void 0) { fromKey = null; }
                    if (fromInclusive === void 0) { fromInclusive = false; }
                    if (toKey === void 0) { toKey = null; }
                    if (toInclusive === void 0) { toInclusive = false; }
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Iterator"] });
                    this.__parent = __parent;
                    var list = new java.util.ArrayList();
                    this.__parent.inOrderAdd(list, type, this.__parent.root, fromKey, fromInclusive, toKey, toInclusive);
                    this.iter = list.listIterator();
                }
                EntryIterator.prototype.forEachRemaining = function (consumer) {
                    javaemul.internal.InternalPreconditions.checkNotNull(consumer);
                    while ((this.hasNext())) {
                        consumer(this.next());
                    }
                    ;
                };
                EntryIterator.prototype.hasNext = function () {
                    return this.iter.hasNext();
                };
                EntryIterator.prototype.next = function () {
                    return this.last = this.iter.next();
                };
                EntryIterator.prototype.remove = function () {
                    this.iter.remove();
                    this.__parent.removeEntry(this.last);
                    this.last = null;
                };
                return EntryIterator;
            }());
            TreeMap.EntryIterator = EntryIterator;
            var EntrySet = (function (_super) {
                __extends(EntrySet, _super);
                function EntrySet(__parent) {
                    _super.call(this, __parent);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Set", "java.lang.Iterable"] });
                    this.__parent = __parent;
                }
                EntrySet.prototype.clear = function () {
                    this.__parent.clear();
                };
                return EntrySet;
            }(java.util.AbstractNavigableMap.EntrySet));
            TreeMap.EntrySet = EntrySet;
            /**
             * Tree node.
             *
             * @param <K> key type
             * @param <V> value type
             */
            var Node = (function (_super) {
                __extends(Node, _super);
                /**
                 * Create a node of the specified color.
                 *
                 * @param key
                 * @param value
                 * @param isRed true if this should be a red node, false for black
                 */
                function Node(key, value, isRed) {
                    if (isRed === void 0) { isRed = true; }
                    _super.call(this, key, value);
                    this.child = new Array(2);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map.Entry"] });
                    this.isRed = false;
                    this.isRed = isRed;
                }
                return Node;
            }(util.AbstractMap.SimpleEntry));
            TreeMap.Node = Node;
            /**
             * A state object which is passed down the tree for both insert and remove.
             * All uses make use of the done flag to indicate when no further rebalancing
             * of the tree is required. Remove methods use the found flag to indicate when
             * the desired key has been found. value is used both to return the value of a
             * removed node as well as to pass in a value which must match (used for
             * entrySet().remove(entry)), and the matchValue flag is used to request this
             * behavior.
             *
             * @param <V> value type
             */
            var State = (function () {
                function State() {
                    this.done = false;
                    this.found = false;
                    this.matchValue = false;
                }
                State.prototype.toString = function () {
                    return "State: mv=" + this.matchValue + " value=" + this.value + " done=" + this.done + " found=" + this.found;
                };
                return State;
            }());
            TreeMap.State = State;
            var SubMap = (function (_super) {
                __extends(SubMap, _super);
                function SubMap(__parent, type, fromKey, fromInclusive, toKey, toInclusive) {
                    _super.call(this);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Map", "java.util.NavigableMap", "java.util.SortedMap"] });
                    this.__parent = __parent;
                    this.fromInclusive = false;
                    this.toInclusive = false;
                    if (type === java.util.TreeMap.SubMapType_Range_$LI$()) {
                        if (this.__parent.cmp.compare(toKey, fromKey) < 0) {
                            throw new java.lang.IllegalArgumentException("subMap: " + toKey + " less than " + fromKey);
                        }
                    }
                    if (type === java.util.TreeMap.SubMapType_Head_$LI$()) {
                        this.__parent.cmp.compare(toKey, toKey);
                    }
                    if (type === java.util.TreeMap.SubMapType_Tail_$LI$()) {
                        this.__parent.cmp.compare(fromKey, fromKey);
                    }
                    if (type === java.util.TreeMap.SubMapType_All_$LI$()) {
                    }
                    this.type = type;
                    this.fromKey = fromKey;
                    this.fromInclusive = fromInclusive;
                    this.toKey = toKey;
                    this.toInclusive = toInclusive;
                }
                SubMap.prototype.comparator = function () {
                    return this.__parent.comparator();
                };
                SubMap.prototype.entrySet = function () {
                    return new SubMap.SubMap$0(this);
                };
                SubMap.prototype.headMap = function (toKey, toInclusive) {
                    var _this = this;
                    if (((toKey != null) || toKey === null) && ((typeof toInclusive === 'boolean') || toInclusive === null)) {
                        return (function () {
                            if (_this.type.toKeyValid() && _this.__parent.cmp.compare(toKey, _this.toKey) > 0) {
                                throw new java.lang.IllegalArgumentException("subMap: " + toKey + " greater than " + _this.toKey);
                            }
                            if (_this.type.fromKeyValid()) {
                                return _this.__parent.subMap(_this.fromKey, _this.fromInclusive, toKey, toInclusive);
                            }
                            else {
                                return _this.__parent.headMap(toKey, toInclusive);
                            }
                        })();
                    }
                    else if (((toKey != null) || toKey === null) && toInclusive === undefined) {
                        return this.headMap$java_lang_Object(toKey);
                    }
                    else
                        throw new Error('invalid overload');
                };
                SubMap.prototype.isEmpty = function () {
                    return this.getFirstEntry() == null;
                };
                SubMap.prototype.put = function (key, value) {
                    if (((key != null) || key === null) && ((value != null) || value === null)) {
                        return this.put$java_lang_Object$java_lang_Object(key, value);
                    }
                    else
                        throw new Error('invalid overload');
                };
                SubMap.prototype.put$java_lang_Object$java_lang_Object = function (key, value) {
                    if (!this.inRange(key)) {
                        throw new java.lang.IllegalArgumentException(key + " outside the range " + this.fromKey + " to " + this.toKey);
                    }
                    return this.__parent.put(key, value);
                };
                SubMap.prototype.remove = function (k) {
                    var key = k;
                    if (!this.inRange(key)) {
                        return null;
                    }
                    return this.__parent.remove(key);
                };
                SubMap.prototype.size = function () {
                    var count = 0;
                    for (var it = this.entryIterator(); it.hasNext(); it.next()) {
                        count++;
                    }
                    return count;
                };
                SubMap.prototype.subMap = function (newFromKey, newFromInclusive, newToKey, newToInclusive) {
                    var _this = this;
                    if (((newFromKey != null) || newFromKey === null) && ((typeof newFromInclusive === 'boolean') || newFromInclusive === null) && ((newToKey != null) || newToKey === null) && ((typeof newToInclusive === 'boolean') || newToInclusive === null)) {
                        return (function () {
                            if (_this.type.fromKeyValid() && _this.__parent.cmp.compare(newFromKey, _this.fromKey) < 0) {
                                throw new java.lang.IllegalArgumentException("subMap: " + newFromKey + " less than " + _this.fromKey);
                            }
                            if (_this.type.toKeyValid() && _this.__parent.cmp.compare(newToKey, _this.toKey) > 0) {
                                throw new java.lang.IllegalArgumentException("subMap: " + newToKey + " greater than " + _this.toKey);
                            }
                            return _this.__parent.subMap(newFromKey, newFromInclusive, newToKey, newToInclusive);
                        })();
                    }
                    else if (((newFromKey != null) || newFromKey === null) && ((newFromInclusive != null) || newFromInclusive === null) && newToKey === undefined && newToInclusive === undefined) {
                        return this.subMap$java_lang_Object$java_lang_Object(newFromKey, newFromInclusive);
                    }
                    else
                        throw new Error('invalid overload');
                };
                SubMap.prototype.tailMap = function (fromKey, fromInclusive) {
                    var _this = this;
                    if (((fromKey != null) || fromKey === null) && ((typeof fromInclusive === 'boolean') || fromInclusive === null)) {
                        return (function () {
                            if (_this.type.fromKeyValid() && _this.__parent.cmp.compare(fromKey, _this.fromKey) < 0) {
                                throw new java.lang.IllegalArgumentException("subMap: " + fromKey + " less than " + _this.fromKey);
                            }
                            if (_this.type.toKeyValid()) {
                                return _this.__parent.subMap(fromKey, fromInclusive, _this.toKey, _this.toInclusive);
                            }
                            else {
                                return _this.__parent.tailMap(fromKey, fromInclusive);
                            }
                        })();
                    }
                    else if (((fromKey != null) || fromKey === null) && fromInclusive === undefined) {
                        return this.tailMap$java_lang_Object(fromKey);
                    }
                    else
                        throw new Error('invalid overload');
                };
                SubMap.prototype.descendingEntryIterator = function () {
                    return new TreeMap.DescendingEntryIterator(this.__parent, this.type, this.fromKey, this.fromInclusive, this.toKey, this.toInclusive);
                };
                SubMap.prototype.entryIterator = function () {
                    return new TreeMap.EntryIterator(this.__parent, this.type, this.fromKey, this.fromInclusive, this.toKey, this.toInclusive);
                };
                SubMap.prototype.getEntry = function (key) {
                    return this.guardInRange(this.__parent.getEntry(key));
                };
                SubMap.prototype.getFirstEntry = function () {
                    var entry;
                    if (this.type.fromKeyValid()) {
                        if (this.fromInclusive) {
                            entry = this.__parent.getCeilingEntry(this.fromKey);
                        }
                        else {
                            entry = this.__parent.getHigherEntry(this.fromKey);
                        }
                    }
                    else {
                        entry = this.__parent.getFirstEntry();
                    }
                    return this.guardInRange(entry);
                };
                SubMap.prototype.getLastEntry = function () {
                    var entry;
                    if (this.type.toKeyValid()) {
                        if (this.toInclusive) {
                            entry = this.__parent.getFloorEntry(this.toKey);
                        }
                        else {
                            entry = this.__parent.getLowerEntry(this.toKey);
                        }
                    }
                    else {
                        entry = this.__parent.getLastEntry();
                    }
                    return this.guardInRange(entry);
                };
                SubMap.prototype.getCeilingEntry = function (key) {
                    return this.guardInRange(this.__parent.getCeilingEntry(key));
                };
                SubMap.prototype.getFloorEntry = function (key) {
                    return this.guardInRange(this.__parent.getFloorEntry(key));
                };
                SubMap.prototype.getHigherEntry = function (key) {
                    return this.guardInRange(this.__parent.getHigherEntry(key));
                };
                SubMap.prototype.getLowerEntry = function (key) {
                    return this.guardInRange(this.__parent.getLowerEntry(key));
                };
                SubMap.prototype.removeEntry = function (entry) {
                    return this.inRange(entry.getKey()) && this.__parent.removeEntry(entry);
                };
                SubMap.prototype.guardInRange = function (entry) {
                    return entry != null && this.inRange(entry.getKey()) ? entry : null;
                };
                SubMap.prototype.inRange = function (key) {
                    return this.__parent.inRange(this.type, key, this.fromKey, this.fromInclusive, this.toKey, this.toInclusive);
                };
                return SubMap;
            }(java.util.AbstractNavigableMap));
            TreeMap.SubMap = SubMap;
            var SubMap;
            (function (SubMap) {
                var SubMap$0 = (function (_super) {
                    __extends(SubMap$0, _super);
                    function SubMap$0(__parent) {
                        _super.call(this, __parent);
                        Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.util.Collection", "java.util.Set", "java.lang.Iterable"] });
                        this.__parent = __parent;
                    }
                    SubMap$0.prototype.isEmpty = function () {
                        return this.__parent.isEmpty();
                    };
                    return SubMap$0;
                }(TreeMap.SubMap.EntrySet));
                SubMap.SubMap$0 = SubMap$0;
            })(SubMap = TreeMap.SubMap || (TreeMap.SubMap = {}));
            var SubMapType = (function () {
                function SubMapType() {
                }
                /**
                 * Returns true if this submap type uses a from-key.
                 */
                SubMapType.prototype.fromKeyValid = function () {
                    return false;
                };
                /**
                 * Returns true if this submap type uses a to-key.
                 */
                SubMapType.prototype.toKeyValid = function () {
                    return false;
                };
                return SubMapType;
            }());
            TreeMap.SubMapType = SubMapType;
            var SubMapTypeHead = (function (_super) {
                __extends(SubMapTypeHead, _super);
                function SubMapTypeHead() {
                    _super.apply(this, arguments);
                }
                SubMapTypeHead.prototype.toKeyValid = function () {
                    return true;
                };
                return SubMapTypeHead;
            }(TreeMap.SubMapType));
            TreeMap.SubMapTypeHead = SubMapTypeHead;
            var SubMapTypeRange = (function (_super) {
                __extends(SubMapTypeRange, _super);
                function SubMapTypeRange() {
                    _super.apply(this, arguments);
                }
                SubMapTypeRange.prototype.fromKeyValid = function () {
                    return true;
                };
                SubMapTypeRange.prototype.toKeyValid = function () {
                    return true;
                };
                return SubMapTypeRange;
            }(TreeMap.SubMapType));
            TreeMap.SubMapTypeRange = SubMapTypeRange;
            var SubMapTypeTail = (function (_super) {
                __extends(SubMapTypeTail, _super);
                function SubMapTypeTail() {
                    _super.apply(this, arguments);
                }
                SubMapTypeTail.prototype.fromKeyValid = function () {
                    return true;
                };
                return SubMapTypeTail;
            }(TreeMap.SubMapType));
            TreeMap.SubMapTypeTail = SubMapTypeTail;
        })(TreeMap = util.TreeMap || (util.TreeMap = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * A base class to share implementation between {@link StringBuffer} and {@link StringBuilder}.
         * <p>
         * Most methods will give expected performance results. Exception is {@link #setCharAt(int, char)},
         * which is O(n), and thus should not be used many times on the same <code>StringBuffer</code>.
         */
        var AbstractStringBuilder = (function () {
            function AbstractStringBuilder(string) {
                this.string = string;
            }
            AbstractStringBuilder.prototype.length = function () {
                return this.string.length;
            };
            AbstractStringBuilder.prototype.setLength = function (newLength) {
                var oldLength = this.length();
                if (newLength < oldLength) {
                    this.string = this.string.substring(0, newLength);
                }
                else if (newLength > oldLength) {
                    this.string += new String(new Array(newLength - oldLength)).toString();
                }
            };
            AbstractStringBuilder.prototype.capacity = function () {
                return javaemul.internal.IntegerHelper.MAX_VALUE;
            };
            AbstractStringBuilder.prototype.ensureCapacity = function (ignoredCapacity) {
            };
            AbstractStringBuilder.prototype.trimToSize = function () {
            };
            AbstractStringBuilder.prototype.charAt = function (index) {
                return this.string.charAt(index);
            };
            AbstractStringBuilder.prototype.getChars = function (srcStart, srcEnd, dst, dstStart) {
                javaemul.internal.InternalPreconditions.checkStringBounds(srcStart, srcEnd, this.length());
                javaemul.internal.InternalPreconditions.checkStringBounds(dstStart, dstStart + (srcEnd - srcStart), dst.length);
                while ((srcStart < srcEnd)) {
                    dst[dstStart++] = this.string.charAt(srcStart++);
                }
                ;
            };
            /**
             * Warning! This method is <b>much</b> slower than the JRE implementation. If you need to do
             * character level manipulation, you are strongly advised to use a char[] directly.
             */
            AbstractStringBuilder.prototype.setCharAt = function (index, x) {
                this.replace0(index, index + 1, /* valueOf */ new String(x).toString());
            };
            AbstractStringBuilder.prototype.subSequence = function (start, end) {
                return this.string.substring(start, end);
            };
            AbstractStringBuilder.prototype.substring$int = function (begin) {
                return this.string.substring(begin);
            };
            AbstractStringBuilder.prototype.substring = function (begin, end) {
                var _this = this;
                if (((typeof begin === 'number') || begin === null) && ((typeof end === 'number') || end === null)) {
                    return (function () {
                        return _this.string.substring(begin, end);
                    })();
                }
                else if (((typeof begin === 'number') || begin === null) && end === undefined) {
                    return this.substring$int(begin);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractStringBuilder.prototype.indexOf$java_lang_String = function (x) {
                return this.string.indexOf(x);
            };
            AbstractStringBuilder.prototype.indexOf = function (x, start) {
                var _this = this;
                if (((typeof x === 'string') || x === null) && ((typeof start === 'number') || start === null)) {
                    return (function () {
                        return _this.string.indexOf(x, start);
                    })();
                }
                else if (((typeof x === 'string') || x === null) && start === undefined) {
                    return this.indexOf$java_lang_String(x);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractStringBuilder.prototype.lastIndexOf$java_lang_String = function (s) {
                return this.string.lastIndexOf(s);
            };
            AbstractStringBuilder.prototype.lastIndexOf = function (s, start) {
                var _this = this;
                if (((typeof s === 'string') || s === null) && ((typeof start === 'number') || start === null)) {
                    return (function () {
                        return _this.string.lastIndexOf(s, start);
                    })();
                }
                else if (((typeof s === 'string') || s === null) && start === undefined) {
                    return this.lastIndexOf$java_lang_String(s);
                }
                else
                    throw new Error('invalid overload');
            };
            AbstractStringBuilder.prototype.toString = function () {
                return this.string;
            };
            AbstractStringBuilder.prototype.append0 = function (x, start, end) {
                if (x == null) {
                    x = "null";
                }
                this.string += x.substring(start, end);
            };
            AbstractStringBuilder.prototype.appendCodePoint0 = function (x) {
                this.string += new String(/* toChars */ String.fromCharCode(x)).toString();
            };
            AbstractStringBuilder.prototype.replace0 = function (start, end, toInsert) {
                this.string = this.string.substring(0, start) + toInsert + this.string.substring(end);
            };
            AbstractStringBuilder.prototype.reverse0 = function () {
                var length = this.string.length;
                if (length <= 1) {
                    return;
                }
                var buffer = new Array(length);
                buffer[0] = this.string.charAt(length - 1);
                for (var i = 1; i < length; i++) {
                    buffer[i] = this.string.charAt(length - 1 - i);
                    if (javaemul.internal.CharacterHelper.isSurrogatePair(buffer[i], buffer[i - 1])) {
                        AbstractStringBuilder.swap(buffer, i - 1, i);
                    }
                }
                this.string = new String(buffer);
            };
            AbstractStringBuilder.swap = function (buffer, f, s) {
                var tmp = buffer[f];
                buffer[f] = buffer[s];
                buffer[s] = tmp;
            };
            return AbstractStringBuilder;
        }());
        lang.AbstractStringBuilder = AbstractStringBuilder;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * A fast way to create strings using multiple appends.
         *
         * This class is an exact clone of {@link StringBuilder} except for the name.
         * Any change made to one should be mirrored in the other.
         */
        var StringBuffer = (function (_super) {
            __extends(StringBuffer, _super);
            function StringBuffer(s) {
                if (((typeof s === 'string') || s === null)) {
                    _super.call(this, s);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.CharSequence", "java.lang.Appendable"] });
                    (function () {
                    })();
                }
                else if (((s != null && (s["__interfaces"] != null && s["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof s === "string")) || s === null)) {
                    _super.call(this, /* valueOf */ new String(s).toString());
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.CharSequence", "java.lang.Appendable"] });
                    (function () {
                    })();
                }
                else if (((typeof s === 'number') || s === null)) {
                    var ignoredCapacity = s;
                    _super.call(this, "");
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.CharSequence", "java.lang.Appendable"] });
                    (function () {
                    })();
                }
                else if (s === undefined) {
                    _super.call(this, "");
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.CharSequence", "java.lang.Appendable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            StringBuffer.prototype.append$boolean = function (x) {
                this.string += x;
                return this;
            };
            StringBuffer.prototype.append$char = function (x) {
                this.string += x;
                return this;
            };
            StringBuffer.prototype.append$char_A = function (x) {
                this.string += new String(x).toString();
                return this;
            };
            StringBuffer.prototype.append = function (x, start, len) {
                var _this = this;
                if (((x != null && x instanceof Array) || x === null) && ((typeof start === 'number') || start === null) && ((typeof len === 'number') || len === null)) {
                    return (function () {
                        _this.string += (function (str, index, len) { return str.join('').substring(index, index + len); })(x, start, len);
                        return _this;
                    })();
                }
                else if (((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && ((typeof start === 'number') || start === null) && ((typeof len === 'number') || len === null)) {
                    return this.append$java_lang_CharSequence$int$int(x, start, len);
                }
                else if (((x != null && x instanceof Array) || x === null) && start === undefined && len === undefined) {
                    return this.append$char_A(x);
                }
                else if (((typeof x === 'string') || x === null) && start === undefined && len === undefined) {
                    return this.append$java_lang_String(x);
                }
                else if (((x != null && x instanceof java.lang.StringBuffer) || x === null) && start === undefined && len === undefined) {
                    return this.append$java_lang_StringBuffer(x);
                }
                else if (((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && start === undefined && len === undefined) {
                    return this.append$java_lang_CharSequence(x);
                }
                else if (((typeof x === 'boolean') || x === null) && start === undefined && len === undefined) {
                    return this.append$boolean(x);
                }
                else if (((typeof x === 'string') || x === null) && start === undefined && len === undefined) {
                    return this.append$char(x);
                }
                else if (((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
                    return this.append$int(x);
                }
                else if (((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
                    return this.append$long(x);
                }
                else if (((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
                    return this.append$float(x);
                }
                else if (((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
                    return this.append$double(x);
                }
                else if (((x != null) || x === null) && start === undefined && len === undefined) {
                    return this.append$java_lang_Object(x);
                }
                else
                    throw new Error('invalid overload');
            };
            StringBuffer.prototype.append$java_lang_CharSequence = function (x) {
                this.string += x;
                return this;
            };
            StringBuffer.prototype.append$java_lang_CharSequence$int$int = function (x, start, end) {
                this.append0(x, start, end);
                return this;
            };
            StringBuffer.prototype.append$double = function (x) {
                this.string += x;
                return this;
            };
            StringBuffer.prototype.append$float = function (x) {
                this.string += x;
                return this;
            };
            StringBuffer.prototype.append$int = function (x) {
                this.string += x;
                return this;
            };
            StringBuffer.prototype.append$long = function (x) {
                this.string += x;
                return this;
            };
            StringBuffer.prototype.append$java_lang_Object = function (x) {
                this.string += x;
                return this;
            };
            StringBuffer.prototype.append$java_lang_String = function (x) {
                this.string += x;
                return this;
            };
            StringBuffer.prototype.append$java_lang_StringBuffer = function (x) {
                this.string += x;
                return this;
            };
            StringBuffer.prototype.appendCodePoint = function (x) {
                this.appendCodePoint0(x);
                return this;
            };
            StringBuffer.prototype.delete = function (start, end) {
                this.replace0(start, end, "");
                return this;
            };
            StringBuffer.prototype.deleteCharAt = function (start) {
                this.replace0(start, start + 1, "");
                return this;
            };
            StringBuffer.prototype.insert$int$boolean = function (index, x) {
                return this.insert(index, /* valueOf */ new String(x).toString());
            };
            StringBuffer.prototype.insert$int$char = function (index, x) {
                return this.insert(index, /* valueOf */ new String(x).toString());
            };
            StringBuffer.prototype.insert$int$char_A = function (index, x) {
                return this.insert(index, /* valueOf */ new String(x).toString());
            };
            StringBuffer.prototype.insert = function (index, x, offset, len) {
                var _this = this;
                if (((typeof index === 'number') || index === null) && ((x != null && x instanceof Array) || x === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                    return (function () {
                        return _this.insert(index, /* valueOf */ (function (str, index, len) { return str.join('').substring(index, index + len); })(x, offset, len));
                    })();
                }
                else if (((typeof index === 'number') || index === null) && ((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                    return this.insert$int$java_lang_CharSequence$int$int(index, x, offset, len);
                }
                else if (((typeof index === 'number') || index === null) && ((x != null && x instanceof Array) || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$char_A(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'string') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$java_lang_String(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$java_lang_CharSequence(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'boolean') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$boolean(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'string') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$char(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$int(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$long(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$float(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$double(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((x != null) || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$java_lang_Object(index, x);
                }
                else
                    throw new Error('invalid overload');
            };
            StringBuffer.prototype.insert$int$java_lang_CharSequence = function (index, chars) {
                return this.insert(index, chars.toString());
            };
            StringBuffer.prototype.insert$int$java_lang_CharSequence$int$int = function (index, chars, start, end) {
                return this.insert(index, /* subSequence */ chars.substring(start, end).toString());
            };
            StringBuffer.prototype.insert$int$double = function (index, x) {
                return this.insert(index, /* valueOf */ new String(x).toString());
            };
            StringBuffer.prototype.insert$int$float = function (index, x) {
                return this.insert(index, /* valueOf */ new String(x).toString());
            };
            StringBuffer.prototype.insert$int$int = function (index, x) {
                return this.insert(index, /* valueOf */ new String(x).toString());
            };
            StringBuffer.prototype.insert$int$long = function (index, x) {
                return this.insert(index, /* valueOf */ new String(x).toString());
            };
            StringBuffer.prototype.insert$int$java_lang_Object = function (index, x) {
                return this.insert(index, /* valueOf */ new String(x).toString());
            };
            StringBuffer.prototype.insert$int$java_lang_String = function (index, x) {
                this.replace0(index, index, x);
                return this;
            };
            StringBuffer.prototype.replace = function (start, end, toInsert) {
                this.replace0(start, end, toInsert);
                return this;
            };
            StringBuffer.prototype.reverse = function () {
                this.reverse0();
                return this;
            };
            return StringBuffer;
        }(java.lang.AbstractStringBuilder));
        lang.StringBuffer = StringBuffer;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
"Generated from Java with JSweet 1.1.0-SNAPSHOT - http://www.jsweet.org";
var java;
(function (java) {
    var lang;
    (function (lang) {
        /**
         * A fast way to create strings using multiple appends.
         *
         * This class is an exact clone of {@link StringBuffer} except for the name. Any
         * change made to one should be mirrored in the other.
         */
        var StringBuilder = (function (_super) {
            __extends(StringBuilder, _super);
            function StringBuilder(s) {
                if (((typeof s === 'string') || s === null)) {
                    _super.call(this, s);
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.CharSequence", "java.lang.Appendable"] });
                    (function () {
                    })();
                }
                else if (((s != null && (s["__interfaces"] != null && s["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof s === "string")) || s === null)) {
                    _super.call(this, /* valueOf */ new String(s).toString());
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.CharSequence", "java.lang.Appendable"] });
                    (function () {
                    })();
                }
                else if (((typeof s === 'number') || s === null)) {
                    var ignoredCapacity = s;
                    _super.call(this, "");
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.CharSequence", "java.lang.Appendable"] });
                    (function () {
                    })();
                }
                else if (s === undefined) {
                    _super.call(this, "");
                    Object.defineProperty(this, '__interfaces', { configurable: true, value: ["java.lang.CharSequence", "java.lang.Appendable"] });
                    (function () {
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            StringBuilder.prototype.append$boolean = function (x) {
                this.string += x;
                return this;
            };
            StringBuilder.prototype.append$char = function (x) {
                this.string += x;
                return this;
            };
            StringBuilder.prototype.append$char_A = function (x) {
                this.string += new String(x).toString();
                return this;
            };
            StringBuilder.prototype.append = function (x, start, len) {
                var _this = this;
                if (((x != null && x instanceof Array) || x === null) && ((typeof start === 'number') || start === null) && ((typeof len === 'number') || len === null)) {
                    return (function () {
                        _this.string += (function (str, index, len) { return str.join('').substring(index, index + len); })(x, start, len);
                        return _this;
                    })();
                }
                else if (((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && ((typeof start === 'number') || start === null) && ((typeof len === 'number') || len === null)) {
                    return this.append$java_lang_CharSequence$int$int(x, start, len);
                }
                else if (((x != null && x instanceof Array) || x === null) && start === undefined && len === undefined) {
                    return this.append$char_A(x);
                }
                else if (((typeof x === 'string') || x === null) && start === undefined && len === undefined) {
                    return this.append$java_lang_String(x);
                }
                else if (((x != null && x instanceof java.lang.StringBuffer) || x === null) && start === undefined && len === undefined) {
                    return this.append$java_lang_StringBuffer(x);
                }
                else if (((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && start === undefined && len === undefined) {
                    return this.append$java_lang_CharSequence(x);
                }
                else if (((typeof x === 'boolean') || x === null) && start === undefined && len === undefined) {
                    return this.append$boolean(x);
                }
                else if (((typeof x === 'string') || x === null) && start === undefined && len === undefined) {
                    return this.append$char(x);
                }
                else if (((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
                    return this.append$int(x);
                }
                else if (((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
                    return this.append$long(x);
                }
                else if (((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
                    return this.append$float(x);
                }
                else if (((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
                    return this.append$double(x);
                }
                else if (((x != null) || x === null) && start === undefined && len === undefined) {
                    return this.append$java_lang_Object(x);
                }
                else
                    throw new Error('invalid overload');
            };
            StringBuilder.prototype.append$java_lang_CharSequence = function (x) {
                this.string += x;
                return this;
            };
            StringBuilder.prototype.append$java_lang_CharSequence$int$int = function (x, start, end) {
                this.append0(x, start, end);
                return this;
            };
            StringBuilder.prototype.append$double = function (x) {
                this.string += x;
                return this;
            };
            StringBuilder.prototype.append$float = function (x) {
                this.string += x;
                return this;
            };
            StringBuilder.prototype.append$int = function (x) {
                this.string += x;
                return this;
            };
            StringBuilder.prototype.append$long = function (x) {
                this.string += x;
                return this;
            };
            StringBuilder.prototype.append$java_lang_Object = function (x) {
                this.string += x;
                return this;
            };
            StringBuilder.prototype.append$java_lang_String = function (x) {
                this.string += x;
                return this;
            };
            StringBuilder.prototype.append$java_lang_StringBuffer = function (x) {
                this.string += x;
                return this;
            };
            StringBuilder.prototype.appendCodePoint = function (x) {
                this.appendCodePoint0(x);
                return this;
            };
            StringBuilder.prototype.delete = function (start, end) {
                this.replace0(start, end, "");
                return this;
            };
            StringBuilder.prototype.deleteCharAt = function (start) {
                this.replace0(start, start + 1, "");
                return this;
            };
            StringBuilder.prototype.insert$int$boolean = function (index, x) {
                return this.insert(index, /* valueOf */ new String(x).toString());
            };
            StringBuilder.prototype.insert$int$char = function (index, x) {
                this.replace0(index, index, /* valueOf */ new String(x).toString());
                return this;
            };
            StringBuilder.prototype.insert$int$char_A = function (index, x) {
                return this.insert(index, /* valueOf */ new String(x).toString());
            };
            StringBuilder.prototype.insert = function (index, x, offset, len) {
                var _this = this;
                if (((typeof index === 'number') || index === null) && ((x != null && x instanceof Array) || x === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                    return (function () {
                        return _this.insert(index, /* valueOf */ (function (str, index, len) { return str.join('').substring(index, index + len); })(x, offset, len));
                    })();
                }
                else if (((typeof index === 'number') || index === null) && ((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
                    return this.insert$int$java_lang_CharSequence$int$int(index, x, offset, len);
                }
                else if (((typeof index === 'number') || index === null) && ((x != null && x instanceof Array) || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$char_A(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'string') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$java_lang_String(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$java_lang_CharSequence(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'boolean') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$boolean(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'string') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$char(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$int(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$long(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$float(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$double(index, x);
                }
                else if (((typeof index === 'number') || index === null) && ((x != null) || x === null) && offset === undefined && len === undefined) {
                    return this.insert$int$java_lang_Object(index, x);
                }
                else
                    throw new Error('invalid overload');
            };
            StringBuilder.prototype.insert$int$java_lang_CharSequence = function (index, chars) {
                return this.insert(index, chars.toString());
            };
            StringBuilder.prototype.insert$int$java_lang_CharSequence$int$int = function (index, chars, start, end) {
                return this.insert(index, /* subSequence */ chars.substring(start, end).toString());
            };
            StringBuilder.prototype.insert$int$double = function (index, x) {
                return this.insert(index, /* valueOf */ new String(x).toString());
            };
            StringBuilder.prototype.insert$int$float = function (index, x) {
                return this.insert(index, /* valueOf */ new String(x).toString());
            };
            StringBuilder.prototype.insert$int$int = function (index, x) {
                return this.insert(index, /* valueOf */ new String(x).toString());
            };
            StringBuilder.prototype.insert$int$long = function (index, x) {
                return this.insert(index, /* valueOf */ new String(x).toString());
            };
            StringBuilder.prototype.insert$int$java_lang_Object = function (index, x) {
                return this.insert(index, /* valueOf */ new String(x).toString());
            };
            StringBuilder.prototype.insert$int$java_lang_String = function (index, x) {
                this.replace0(index, index, x);
                return this;
            };
            StringBuilder.prototype.replace = function (start, end, toInsert) {
                this.replace0(start, end, toInsert);
                return this;
            };
            StringBuilder.prototype.reverse = function () {
                this.reverse0();
                return this;
            };
            return StringBuilder;
        }(java.lang.AbstractStringBuilder));
        lang.StringBuilder = StringBuilder;
    })(lang = java.lang || (java.lang = {}));
})(java || (java = {}));
java.util.TreeMap.SubMapType_Tail_$LI$();
java.util.TreeMap.SubMapType_Range_$LI$();
java.util.TreeMap.SubMapType_Head_$LI$();
java.util.TreeMap.SubMapType_All_$LI$();
java.util.Collections.RandomHolder.rnd_$LI$();
java.util.Collections.ReverseComparator.INSTANCE_$LI$();
java.util.Collections.EmptyListIterator.INSTANCE_$LI$();
java.util.Collections.EMPTY_SET_$LI$();
java.util.Collections.EMPTY_MAP_$LI$();
java.util.Collections.EMPTY_LIST_$LI$();
javaemul.internal.BooleanHelper.TYPE_$LI$();
javaemul.internal.InternalPreconditions.BOUND_CHECK_$LI$();
javaemul.internal.InternalPreconditions.API_CHECK_$LI$();
javaemul.internal.InternalPreconditions.TYPE_CHECK_$LI$();
javaemul.internal.InternalPreconditions.CHECKED_MODE_$LI$();
java.util.ConcurrentModificationDetector.API_CHECK_$LI$();
java.util.logging.Logger.LOGGING_FALSE_$LI$();
java.util.logging.Logger.LOGGING_SEVERE_$LI$();
java.util.logging.Logger.LOGGING_WARNING_$LI$();
java.util.logging.Logger.LOGGING_ENABLED_$LI$();
java.util.logging.Logger.__static_initialize();
java.lang.System.out_$LI$();
java.lang.System.err_$LI$();
javaemul.internal.ByteHelper.BoxedValues.boxedValues_$LI$();
javaemul.internal.ByteHelper.TYPE_$LI$();
javaemul.internal.ByteHelper.MAX_VALUE_$LI$();
javaemul.internal.ByteHelper.MIN_VALUE_$LI$();
javaemul.internal.LongHelper.BoxedValues.boxedValues_$LI$();
javaemul.internal.IntegerHelper.ReverseNibbles.reverseNibbles_$LI$();
javaemul.internal.IntegerHelper.BoxedValues.boxedValues_$LI$();
javaemul.internal.FloatHelper.POSITIVE_INFINITY_$LI$();
javaemul.internal.FloatHelper.NEGATIVE_INFINITY_$LI$();
javaemul.internal.FloatHelper.NaN_$LI$();
javaemul.internal.ShortHelper.BoxedValues.boxedValues_$LI$();
javaemul.internal.ShortHelper.TYPE_$LI$();
javaemul.internal.ShortHelper.MAX_VALUE_$LI$();
javaemul.internal.ShortHelper.MIN_VALUE_$LI$();
javaemul.internal.DoubleHelper.PowersTable.invPowers_$LI$();
javaemul.internal.DoubleHelper.PowersTable.powers_$LI$();
javaemul.internal.DoubleHelper.POSITIVE_INFINITY_$LI$();
javaemul.internal.DoubleHelper.NEGATIVE_INFINITY_$LI$();
javaemul.internal.DoubleHelper.NaN_$LI$();
javaemul.internal.NumberHelper.__ParseLong.maxValueForRadix_$LI$();
javaemul.internal.NumberHelper.__ParseLong.maxLengthForRadix_$LI$();
javaemul.internal.NumberHelper.__ParseLong.maxDigitsRadixPower_$LI$();
javaemul.internal.NumberHelper.__ParseLong.maxDigitsForRadix_$LI$();
javaemul.internal.NumberHelper.__ParseLong.__static_initialize();
javaemul.internal.CharacterHelper.BoxedValues.boxedValues_$LI$();
javaemul.internal.CharacterHelper.TYPE_$LI$();
java.util.InternalJsMapFactory.jsMapCtor_$LI$();
java.util.Comparators.NATURAL_$LI$();
javaemul.internal.JreHelper.LOG10E_$LI$();
java.security.MessageDigest.Md5Digest.padding_$LI$();
java.util.OptionalDouble.EMPTY_$LI$();
java.nio.charset.StandardCharsets.UTF_8_$LI$();
java.nio.charset.StandardCharsets.ISO_8859_1_$LI$();
javaemul.internal.EmulatedCharset.ISO_8859_1_$LI$();
javaemul.internal.EmulatedCharset.ISO_LATIN_1_$LI$();
javaemul.internal.EmulatedCharset.UTF_8_$LI$();
java.util.Locale.defaultLocale_$LI$();
java.util.Locale.US_$LI$();
java.util.Locale.ENGLISH_$LI$();
java.util.Locale.ROOT_$LI$();
java.lang.Class.classes_$LI$();
java.lang.Class.constructors_$LI$();
javaemul.internal.StringHashCache.front_$LI$();
javaemul.internal.StringHashCache.back_$LI$();
java.util.Optional.EMPTY_$LI$();
java.util.Date.StringData.MONTHS_$LI$();
java.util.Date.StringData.DAYS_$LI$();
java.util.Date.ONE_HOUR_IN_MILLISECONDS_$LI$();
java.util.OptionalLong.EMPTY_$LI$();
java.util.OptionalInt.EMPTY_$LI$();
java.util.Random.twoToTheXMinus48_$LI$();
java.util.Random.twoToTheXMinus24_$LI$();
java.util.Random.__static_initialize();
java.util.logging.Level.WARNING_$LI$();
java.util.logging.Level.SEVERE_$LI$();
java.util.logging.Level.OFF_$LI$();
java.util.logging.Level.INFO_$LI$();
java.util.logging.Level.FINEST_$LI$();
java.util.logging.Level.FINER_$LI$();
java.util.logging.Level.FINE_$LI$();
java.util.logging.Level.CONFIG_$LI$();
java.util.logging.Level.ALL_$LI$();
