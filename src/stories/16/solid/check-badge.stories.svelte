<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CheckBadgeSvelte from '../../../lib/16/solid/check-badge.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CheckBadgeSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="CheckBadge" />
