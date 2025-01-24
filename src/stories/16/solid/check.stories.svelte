<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CheckSvelte from '../../../lib/16/solid/check.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CheckSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Check" />
