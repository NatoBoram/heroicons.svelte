<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SignalSvelte from '../../../lib/20/solid/signal.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: SignalSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Signal" />
