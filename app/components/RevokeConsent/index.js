/**
 *
 * RevokeConsent
 *
 */

import React from 'react';
import { Cell, Grid } from 'styled-css-grid';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import Checkbox from 'components/Checkbox';
import StyledRaisedButton from 'components/StyledRaisedButton';
import GoBackButton from 'components/GoBackButton';
import ConsentFormSection from 'components/ConsentFormSection';
import messages from './messages';
import RevokeConsentGrid from './RevokeConsentGrid';

class RevokeConsent extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      authenticationDialogOpen: false,
    };
    this.handleCheckPassword = this.handleCheckPassword.bind(this);
    this.handleDialogCallback = this.handleDialogCallback.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
  }

  handleCheckPassword() {
    this.setState({ isAuthenticated: true });
  }

  handleDialogCallback() {
    this.setState({ authenticationDialogOpen: false });
  }

  checkPassword(password, actions) {
    this.props.checkPassword(password, actions);
    if (this.props.isAuthenticated) {
      this.setState({ authenticationDialogOpen: false });
    }
  }

  // Todo: Add signature pad to authenticate consent revoke
  render() {
    const { onSubmit, consent, patient } = this.props;
    const patientName = consent && consent.patient && consent.patient.display;

    return (
      <div>
        <Dialog
          open={this.state.authenticationDialogOpen}
        ></Dialog>
        <Formik
          onSubmit={(values, actions) => onSubmit(values, actions)}
          render={({ isSubmitting }) => (
            <Form>
              <RevokeConsentGrid>
                <Cell area="patientGroup">
                  <ConsentFormSection title={<FormattedMessage {...messages.header} />}>
                    <Grid columns={1} gap={'20px'}>
                      <Cell>
                        <FormattedMessage {...messages.label.consentRef} />
                        <strong>{consent && consent.logicalId}</strong>
                      </Cell>
                      <Cell>
                        <FormattedMessage {...messages.label.patientName} />
                        <strong>{consent && consent.patient && consent.patient.display}</strong>
                      </Cell>
                      <Cell>
                        <FormattedMessage {...messages.label.patientDob} />
                        <strong>{patient && patient.birthDate}</strong>
                      </Cell>
                    </Grid>
                    <FormattedHTMLMessage {...messages.revokeTerm} />
                    <Checkbox
                      name="agreement"
                      checked={this.state.isAuthenticated}
                      label={<FormattedHTMLMessage {...messages.agreementTerm} values={{ patientName }} />}
                      onCheck={this.handleCheckPassword}
                    />
                  </ConsentFormSection>
                </Cell>
                <Cell>

                </Cell>
                <Cell area="buttonGroup">
                  <Grid columns={2}>
                    <Cell>
                      <StyledRaisedButton
                        fullWidth
                        type="submit"
                        disabled={!this.state.isAuthenticated}
                      >
                        Complete
                      </StyledRaisedButton>
                    </Cell>
                    <Cell>
                      <GoBackButton disabled={isSubmitting} />
                    </Cell>
                  </Grid>
                </Cell>
              </RevokeConsentGrid>
            </Form>
          )}
        />
      </div>
    );
  }
}

RevokeConsent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  checkPassword: PropTypes.func,
  consent: PropTypes.object,
  patient: PropTypes.object,
  isAuthenticated: PropTypes.bool,
};

export default RevokeConsent;