<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SignalSlashSvelte from '../../../lib/24/solid/signal-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: SignalSlashSvelte,
		args: { class: '' },
	})
</script>

<Story name="SignalSlash" />
