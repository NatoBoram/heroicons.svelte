<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SignalSlashSvelte from '../../../lib/20/solid/signal-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: SignalSlashSvelte,
		args: { class: '' },
	})
</script>

<Story name="SignalSlash" />
