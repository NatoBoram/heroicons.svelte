<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SignalSvelte from '../../../lib/16/solid/signal.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: SignalSvelte,
		args: { class: '' },
	})
</script>

<Story name="Signal" />
