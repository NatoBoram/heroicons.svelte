<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BellAlertSvelte from '../../../lib/16/solid/bell-alert.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BellAlertSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="BellAlert" />
