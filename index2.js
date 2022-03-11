    (gogoproto.nullable)   = false,
    (gogoproto.moretags)   = "yaml:\"collateral_weight\""
  ];

  // The liquidation_threshold defines what amount of the total value of the asset
  // can contribute to a user's liquidation threshold (above which they become
  // eligible for liquidation).
  string liquidation_threshold = 4 [
    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec",
    (gogoproto.nullable)   = false,
    (gogoproto.moretags)   = "yaml:\"liquidation_threshold\""
  ];

  // The base_borrow_rate defines the base interest rate for borrowing this
  // asset.
  string base_borrow_rate = 4 [
  string base_borrow_rate = 5 [
    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec",
    (gogoproto.nullable)   = false,
    (gogoproto.moretags)   = "yaml:\"base_borrow_rate\""
@@ -67,38 +76,38 @@ message Token {
  // The kink_borrow_rate defines the interest rate for borrowing this
  // asset when utilization is at the 'kink' utilization value as defined
  // on the utilization:interest graph.
  string kink_borrow_rate = 5 [
  string kink_borrow_rate = 6 [
    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec",
    (gogoproto.nullable)   = false,
    (gogoproto.moretags)   = "yaml:\"kink_borrow_rate\""
  ];

  // The max_borrow_rate defines the interest rate for borrowing this
  // asset (seen when utilization is 100%).
  string max_borrow_rate = 6 [
  string max_borrow_rate = 7 [
    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec",
    (gogoproto.nullable)   = false,
    (gogoproto.moretags)   = "yaml:\"max_borrow_rate\""
  ];

  // The kink_utilization_rate defines the borrow utilization rate for this
  // asset where the 'kink' on the utilization:interest graph occurs.
  string kink_utilization_rate = 7 [
  string kink_utilization_rate = 8 [
    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec",
    (gogoproto.nullable)   = false,
    (gogoproto.moretags)   = "yaml:\"kink_utilization_rate\""
  ];

  // The liquidation_incentive determines the portion of bonus collateral of
  // a token type liquidators receive as a liquidation reward.
  string liquidation_incentive = 8 [
  string liquidation_incentive = 9 [
    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec",
    (gogoproto.nullable)   = false,
    (gogoproto.moretags)   = "yaml:\"liquidation_incentive\""
  ];

  // The symbol_denom and exponent are solely used to update the oracle's accept
  // list of allowed tokens.
  string symbol_denom = 9 [(gogoproto.moretags) = "yaml:\"symbol_denom\""];
  uint32 exponent     = 10 [(gogoproto.moretags) = "yaml:\"exponent\""];
  string symbol_denom = 10 [(gogoproto.moretags) = "yaml:\"symbol_denom\""];
  uint32 exponent     = 11 [(gogoproto.moretags) = "yaml:\"exponent\""];
