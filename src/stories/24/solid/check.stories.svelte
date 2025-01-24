<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CheckSvelte from '../../../lib/24/solid/check.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CheckSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Check" />
