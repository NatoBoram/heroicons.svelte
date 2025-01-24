<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FlagSvelte from '../../../lib/16/solid/flag.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: FlagSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Flag" />
