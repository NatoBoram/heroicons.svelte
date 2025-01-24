<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CheckBadgeSvelte from '../../../lib/24/solid/check-badge.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CheckBadgeSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CheckBadge" />
